# Security Policy

## Supported Versions

Currently supported versions for security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of X.AI Website Summarizer seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### Please do NOT:
- Open a public issue on GitHub
- Disclose the vulnerability publicly before it has been addressed

### Please DO:
- Email us at: your-security-email@example.com
- Include "SECURITY" in the subject line
- Provide detailed steps to reproduce the vulnerability
- Include the impact of the vulnerability
- Suggest a fix if you have one

### What to expect:
- Acknowledgment of your report within 48 hours
- Regular updates on our progress
- Credit for responsible disclosure (if desired)

## Security Best Practices for Users

### API Key Security
- **Never share your X.AI API key**
- **Never commit your API key to version control**
- Only enter your API key in the official extension settings
- Regularly rotate your API keys
- Monitor your X.AI account for unusual activity

### Extension Permissions
This extension requests minimal permissions:
- `activeTab`: To access the current page content for summarization
- `scripting`: To extract text content from web pages
- `https://api.x.ai/*`: To communicate with X.AI's API

### Data Handling
- **No user data is stored permanently**
- Page content is sent to X.AI's API for processing only
- Summaries are displayed locally and not stored
- No tracking or analytics are implemented
- No data is shared with third parties (except X.AI for processing)

## Security Features

### Current Security Measures
- API key is stored locally in the extension
- All API communications use HTTPS
- Content extraction happens locally before sending
- No external dependencies or libraries
- Minimal permission requests

### Planned Security Enhancements
- [ ] Encrypted storage for API keys
- [ ] Option to use environment variables for API keys
- [ ] Content Security Policy implementation
- [ ] Regular security audits

## Known Security Considerations

1. **API Key Exposure**: Currently, users must manually add their API key to the source code. We're working on a secure settings page.

2. **Content Transmission**: Page content is sent to X.AI's servers. Users should be aware of this when summarizing sensitive content.

## Responsible Disclosure

We believe in responsible disclosure and will:
- Work with security researchers to verify and fix issues
- Publicly acknowledge researchers who report valid issues (with permission)
- Release security updates as quickly as possible
- Notify users of critical security updates

## Contact

For security concerns, please contact:
- Email: your-security-email@example.com
- GPG Key: [Link to your GPG key if available]

Thank you for helping keep X.AI Website Summarizer secure!