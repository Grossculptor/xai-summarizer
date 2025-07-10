# Contributing to X.AI Website Summarizer

First off, thank you for considering contributing to X.AI Website Summarizer! It's people like you that make this extension better for everyone.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Pull Requests](#pull-requests)
- [Development Setup](#development-setup)
- [Style Guidelines](#style-guidelines)
- [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please be respectful and constructive in all interactions.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
3. Set up your development environment (see [Development Setup](#development-setup))
4. Create a new branch for your feature or fix
5. Make your changes
6. Test thoroughly
7. Submit a pull request

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if applicable**
- **Note your Chrome version and OS**

### Suggesting Enhancements

Enhancement suggestions are welcome! Please provide:

- **Use a clear and descriptive title**
- **Provide a detailed description of the proposed enhancement**
- **Explain why this enhancement would be useful**
- **List any alternatives you've considered**

### Pull Requests

1. **Follow the style guidelines**
2. **Write clear commit messages**
3. **Include comments in your code where necessary**
4. **Update documentation as needed**
5. **Add tests if applicable**
6. **Ensure all tests pass**

#### Pull Request Process

1. Update the README.md with details of changes if needed
2. Update the CHANGELOG.md with your changes
3. The PR will be merged once you have approval from a maintainer

## Development Setup

1. **Prerequisites**
   - Chrome browser (latest stable version)
   - Text editor or IDE
   - Git

2. **Setup Steps**
   ```bash
   # Clone your fork
   git clone https://github.com/YOUR_USERNAME/xai-summarizer.git
   cd xai-summarizer
   
   # Create a new branch
   git checkout -b feature/your-feature-name
   ```

3. **Load Extension in Chrome**
   - Navigate to `chrome://extensions/`
   - Enable Developer Mode
   - Click "Load unpacked"
   - Select the project directory

4. **Making Changes**
   - Edit files as needed
   - Reload the extension in Chrome to test changes
   - Use Chrome DevTools for debugging

## Style Guidelines

### JavaScript Style

- Use ES6+ features where appropriate
- Follow consistent indentation (2 spaces)
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

```javascript
// Good
async function fetchUserSummary(userId) {
  try {
    const response = await api.getSummary(userId);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch summary:', error);
    throw error;
  }
}

// Avoid
async function f(id) {
  return await api.getSummary(id).data;
}
```

### CSS Style

- Use semantic class names
- Group related properties
- Use CSS variables for theming
- Mobile-first approach when applicable

### Commit Messages

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 72 characters
- Reference issues and pull requests when applicable

Example:
```
Add summary export functionality

- Implement PDF export option
- Add Markdown export format
- Update UI with export button

Fixes #123
```

## Testing

- Test your changes in multiple scenarios
- Check different webpage types (articles, blogs, documentation)
- Verify error handling works correctly
- Test with and without API key
- Check performance with large pages

## Documentation

- Update README.md if you change functionality
- Add JSDoc comments to new functions
- Update inline comments if logic changes
- Include examples for new features

## Community

- Join our [Discussions](https://github.com/yourusername/xai-summarizer/discussions)
- Follow us for updates
- Share your use cases and feedback

## Questions?

Feel free to open an issue with the "question" label or reach out in discussions.

Thank you for contributing to X.AI Website Summarizer! 🎉