document.getElementById('summarizeBtn').addEventListener('click', async () => {
    const button = document.getElementById('summarizeBtn');
    const statusDiv = document.getElementById('status');
    const summaryDiv = document.getElementById('summary');
    
    // Disable button and show loading
    button.disabled = true;
    statusDiv.innerHTML = '<div class="loading">Extracting page content...<span class="spinner"></span></div>';
    summaryDiv.textContent = '';
    
    try {
        // Get the current tab
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        
        // Inject content script to extract text
        const results = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: extractPageContent
        });
        
        const pageContent = results[0].result;
        
        if (!pageContent || pageContent.length < 100) {
            throw new Error('Could not extract enough content from this page');
        }
        
        statusDiv.innerHTML = '<div class="loading">Generating summary with X.AI...<span class="spinner"></span></div>';
        
        // Send to background script for API call
        const response = await chrome.runtime.sendMessage({
            action: 'summarize',
            content: pageContent,
            url: tab.url,
            title: tab.title
        });
        
        if (response.error) {
            throw new Error(response.error);
        }
        
        // Display summary
        statusDiv.textContent = 'Summary generated successfully!';
        summaryDiv.textContent = response.summary;
        
    } catch (error) {
        statusDiv.innerHTML = `<div class="error">Error: ${error.message}</div>`;
        summaryDiv.textContent = '';
    } finally {
        button.disabled = false;
    }
});

// Function to extract text content from the page
function extractPageContent() {
    // Remove script and style elements
    const scripts = document.querySelectorAll('script, style, noscript');
    scripts.forEach(el => el.remove());
    
    // Get main content areas
    const contentSelectors = [
        'main', 'article', '[role="main"]', '#content', '.content',
        '#main', '.main', '.post', '.entry-content'
    ];
    
    let content = '';
    
    // Try to find main content area
    for (const selector of contentSelectors) {
        const element = document.querySelector(selector);
        if (element) {
            content = element.innerText;
            break;
        }
    }
    
    // Fallback to body if no main content found
    if (!content) {
        content = document.body.innerText;
    }
    
    // Clean up the text
    content = content
        .replace(/\s+/g, ' ')  // Normalize whitespace
        .replace(/\n{3,}/g, '\n\n')  // Remove excessive line breaks
        .trim();
    
    // Limit content length to avoid API limits
    const maxLength = 4000;
    if (content.length > maxLength) {
        content = content.substring(0, maxLength) + '...';
    }
    
    return content;
}