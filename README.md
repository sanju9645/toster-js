# Toster.js 🍞

A lightweight, customizable toast notification library with Tailwind CSS styling. Perfect for modern web applications that need beautiful, accessible toast notifications.

## Features

- 🎨 **Tailwind CSS Ready** - Works seamlessly with Tailwind CSS
- 🌙 **Dark Mode Support** - Built-in light and dark themes
- 📱 **Mobile Friendly** - Responsive design that works on all devices
- 🎯 **Zero Dependencies** - No external dependencies required
- ⚡ **Lightweight** - Only ~3KB minified
- 🎭 **Customizable** - Full control over styling and behavior
- 🔧 **Easy to Use** - Simple API with sensible defaults
- ♿ **Accessible** - Built with accessibility in mind

## Installation

```bash
npm install toster-js
```

## Quick Start

### 1. Include the library

```html
<!-- Include Font Awesome for icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">

<!-- Include Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Include Toster.js -->
<script src="node_modules/toster-js/dist/toster-js.js"></script>
```

### 2. Use the toast functions

```javascript
// Basic usage
toster.success('Operation completed successfully!');
toster.error('Something went wrong!');
toster.warning('Please check your input!');
toster.info('Here is some information!');
```

## API Reference

### Basic Methods

#### `toster.success(message, title, options)`
Shows a success toast with green styling.

```javascript
toster.success('Data saved successfully!');
toster.success('Profile updated!', 'Success');
```

#### `toster.error(message, title, options)`
Shows an error toast with red styling.

```javascript
toster.error('Failed to save data!');
toster.error('Network error occurred!', 'Error');
```

#### `toster.warning(message, title, options)`
Shows a warning toast with yellow styling.

```javascript
toster.warning('Please review your input!');
toster.warning('Session will expire soon!', 'Warning');
```

#### `toster.info(message, title, options)`
Shows an info toast with blue styling.

```javascript
toster.info('New features available!');
toster.info('System maintenance scheduled!', 'Info');
```

#### `toster.custom(config)`
Shows a custom toast with full control over styling.

```javascript
toster.custom({
  icon: 'fa-star',
  iconColor: 'text-purple-500',
  borderColor: 'border-purple-500',
  title: 'Custom Toast',
  message: 'This is a custom styled toast!',
  theme: 'dark'
});
```

### Configuration Options

All methods accept an `options` object as the last parameter:

```javascript
{
  autoClose: true,           // Auto-close the toast (default: true)
  autoCloseDelay: 8000,      // Delay in milliseconds (default: 8000)
  theme: 'light',            // 'light' or 'dark' (default: 'light')
  position: 'bottom-right'   // Toast position (default: 'bottom-right')
}
```

### Advanced Usage

#### Custom Styling

```javascript
toster.custom({
  icon: 'fa-heart',
  iconColor: 'text-pink-500',
  borderColor: 'border-pink-500',
  title: 'Custom Toast',
  message: 'This toast has custom styling!',
  autoClose: false,
  theme: 'dark'
});
```

#### HTML Content

```javascript
toster.info('This message contains <strong>HTML formatting</strong>!');
toster.success('Click <a href="#" onclick="doSomething()">here</a> to continue!');
```

#### Manual Close

```javascript
const toast = toster.warning('This toast must be closed manually!', 'Manual Close', {
  autoClose: false
});

// Close programmatically
toast.click(); // or use the close button
```

## Examples

### Basic Notifications

```javascript
// Success notification
toster.success('Your changes have been saved!');

// Error notification
toster.error('Failed to connect to server!');

// Warning notification
toster.warning('Your session will expire in 5 minutes!');

// Info notification
toster.info('New updates are available!');
```

### Custom Notifications

```javascript
// Custom success with different title
toster.success('Profile picture updated successfully!', 'Profile Updated');

// Custom error with longer auto-close delay
toster.error('Server maintenance in progress!', 'Maintenance', {
  autoCloseDelay: 15000
});

// Custom warning that doesn't auto-close
toster.warning('Please save your work before continuing!', 'Save Required', {
  autoClose: false
});
```

### Dark Theme

```javascript
// Dark theme notifications
toster.success('Dark theme success!', 'Success', { theme: 'dark' });
toster.error('Dark theme error!', 'Error', { theme: 'dark' });
toster.warning('Dark theme warning!', 'Warning', { theme: 'dark' });
toster.info('Dark theme info!', 'Info', { theme: 'dark' });
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please read our [Development Guide](DEVELOPMENT.md) for details on how to contribute.

## Support

- 📧 Issues: [GitHub Issues](https://github.com/sanju9645/toster-js/issues)
- 📖 Documentation: [GitHub Wiki](https://github.com/sanju9645/toster-js/wiki)
- 💬 Discussions: [GitHub Discussions](https://github.com/sanju9645/toster-js/discussions)

## Author

**Sanju** - [GitHub](https://github.com/sanju9645)

---

Made with ❤️ for the web development community
