# Development Guide

This guide will help you set up the development environment and contribute to Toster.js.

## Prerequisites

- Node.js 16+ 
- npm 8+
- Git

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/sanju9645/toster-js.git
   cd toster-js
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Open demo**
   ```bash
   open index.html
   ```

## Project Structure

```
toster-js/
├── src/
│   └── toster-js.js      # Main source file
├── dist/                 # Built files (generated)
├── index.html           # Demo page
├── package.json         # Package configuration
├── rollup.config.js     # Build configuration
├── README.md           # User documentation
└── DEVELOPMENT.md      # This file
```

## Development Workflow

### Making Changes

1. **Edit source files** in `src/`
2. **Build the project** with `npm run build`
3. **Test changes** by opening `index.html`
4. **Commit changes** with descriptive messages

### Build Commands

```bash
# Build for production
npm run build

# Build and watch for changes
npm run dev
```

### Testing

Currently, testing is done manually through the demo page. Future versions will include automated tests.

## Contributing

### Code Style

- Use ES6+ features
- Follow existing code patterns
- Add comments for complex logic
- Keep functions small and focused

### Commit Messages

Use conventional commit format:

```
feat: add new toast type
fix: resolve positioning issue
docs: update README
style: format code
refactor: simplify toast creation
test: add unit tests
```

### Pull Request Process

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit with clear messages**
6. **Push to your fork**
7. **Create a pull request**

### Issue Reporting

When reporting issues, please include:

- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## Release Process

### Version Bumping

Update version in `package.json` following semantic versioning:

- **Patch** (1.0.1): Bug fixes
- **Minor** (1.1.0): New features, backward compatible
- **Major** (2.0.0): Breaking changes

### Publishing

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Test the build**
   ```bash
   npm pack
   ```

3. **Publish to npm**
   ```bash
   npm publish
   ```

## Architecture

### Core Components

- **Toster Class**: Main class handling toast creation and management
- **Toast Container**: DOM element containing all toasts
- **Toast Element**: Individual toast notification
- **Style Injection**: Dynamic CSS injection for styling

### Key Methods

- `init()`: Initialize the library
- `createToastContainer()`: Create the toast container
- `injectStyles()`: Inject required CSS
- `show(config)`: Show a toast with given configuration
- `close(toast)`: Close a specific toast

## Future Enhancements

- [ ] TypeScript support
- [ ] Unit tests
- [ ] Animation customization
- [ ] Multiple positions
- [ ] Queue management
- [ ] Accessibility improvements
- [ ] React/Vue components

## Questions?

Feel free to open an issue or start a discussion for any questions about development.
