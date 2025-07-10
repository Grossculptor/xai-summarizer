// Replace with your actual X.AI API key
const XAI_API_KEY = '<YOUR_XAI_API_KEY_HERE>';
const XAI_API_URL = 'https://api.x.ai/v1/chat/completions';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'summarize') {
        summarizeContent(request.content, request.url, request.title)
            .then(summary => sendResponse({ summary }))
            .catch(error => sendResponse({ error: error.message }));
        return true; // Keep the message channel open for async response
    }
});

async function summarizeContent(content, url, title) {
    const systemPrompt = "You are a helpful assistant that creates concise, informative summaries of web pages. Focus on the main points and key information.";
    
    const userPrompt = `Please summarize the following webpage content. The page title is "${title}" and the URL is ${url}.\n\nContent:\n${content}`;
    
    try {
        const response = await fetch(XAI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${XAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'grok-4-0709',
                messages: [
                    {
                        role: 'system',
                        content: systemPrompt
                    },
                    {
                        role: 'user',
                        content: userPrompt
                    }
                ],
                temperature: 0.3,
                max_tokens: 500
            })
        });
        
        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(`API Error: ${response.status} - ${errorData}`);
        }
        
        const data = await response.json();
        
        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
            throw new Error('Invalid response format from X.AI API');
        }
        
        return data.choices[0].message.content;
        
    } catch (error) {
        console.error('Error calling X.AI API:', error);
        throw error;
    }
}