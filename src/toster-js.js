/**
 * Toster.js - A lightweight toast notification library
 * @author Sanju
 * @version 1.0.0
 */

class Toster {
  constructor() {
    this.toastContainer = null;
    this.defaultConfig = {
      icon: 'fa-info-circle',
      iconColor: 'text-blue-500',
      borderColor: 'border-blue-500',
      title: 'Notification',
      message: 'This is a notification message',
      autoClose: true,
      autoCloseDelay: 8000,
      theme: 'light', // 'light' or 'dark'
      position: 'bottom-right' // 'top-right', 'top-left', 'bottom-right', 'bottom-left'
    };
    this.init();
  }

  init() {
    this.loadDependencies();
    this.createToastContainer();
    this.injectStyles();
  }

  loadDependencies() {
    // Check and load Font Awesome if not present
    this.loadFontAwesome();
    
    // Check and load Tailwind CSS if not present
    this.loadTailwindCSS();
  }

  loadFontAwesome() {
    // Check if Font Awesome is already loaded
    const existingFA = document.querySelector('link[href*="font-awesome"]') || 
                      document.querySelector('link[href*="fontawesome"]') ||
                      document.querySelector('link[href*="all.min.css"]');
    
    if (!existingFA) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css';
      link.integrity = 'sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==';
      link.crossOrigin = 'anonymous';
      link.referrerPolicy = 'no-referrer';
      document.head.appendChild(link);
    }
  }

  loadTailwindCSS() {
    // Check if Tailwind CSS is already loaded
    const existingTailwind = document.querySelector('script[src*="tailwindcss"]') ||
                            document.querySelector('link[href*="tailwind"]') ||
                            window.tailwind;
    
    if (!existingTailwind) {
      const script = document.createElement('script');
      script.src = 'https://cdn.tailwindcss.com';
      script.async = true;
      document.head.appendChild(script);
    }
  }

  waitForDependencies() {
    return new Promise((resolve) => {
      // Check if Font Awesome is loaded
      const checkFontAwesome = () => {
        const faLoaded = document.querySelector('link[href*="font-awesome"]') || 
                        document.querySelector('link[href*="fontawesome"]') ||
                        document.querySelector('link[href*="all.min.css"]');
        return faLoaded && faLoaded.sheet;
      };

      // Check if Tailwind is loaded
      const checkTailwind = () => {
        return window.tailwind || document.querySelector('script[src*="tailwindcss"]');
      };

      // If both are already loaded, resolve immediately
      if (checkFontAwesome() && checkTailwind()) {
        resolve();
        return;
      }

      // Otherwise, wait for them to load
      let attempts = 0;
      const maxAttempts = 50; // 5 seconds max wait
      
      const checkInterval = setInterval(() => {
        attempts++;
        
        if (checkFontAwesome() && checkTailwind()) {
          clearInterval(checkInterval);
          resolve();
        } else if (attempts >= maxAttempts) {
          clearInterval(checkInterval);
          resolve(); // Resolve anyway to prevent infinite waiting
        }
      }, 100);
    });
  }

  createToastContainer() {
    // Remove existing container if any
    const existingContainer = document.getElementById('toster-container');
    if (existingContainer) {
      existingContainer.remove();
    }

    this.toastContainer = document.createElement('div');
    this.toastContainer.id = 'toster-container';
    this.toastContainer.className = 'toster-wrapper fixed z-50 overflow-hidden';
    this.toastContainer.style.cssText = `
      bottom: 3rem;
      right: 0;
      margin: 0;
      padding: 2rem 1.25rem;
    `;
    document.body.appendChild(this.toastContainer);
  }

  injectStyles() {
    const styleId = 'toster-styles';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .toster-wrapper {
        width: max-content;
      }
      
      .toster-toast {
        transform: translateX(600px);
        transition: transform 1s ease-in-out;
        width: 20rem;
        height: 5rem;
        padding: 0.5rem 0 0.5rem 1.25rem;
        background-color: white;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        border-radius: 0.5rem;
        display: grid;
        grid-template-columns: 1.2fr 6fr 0.5fr;
        align-content: space-around;
        position: relative;
        border-left: 8px solid #3b82f6;
        border-top-left-radius: 0.75rem;
        border-bottom-left-radius: 0.75rem;
        margin-bottom: 0.5rem;
      }
      
      .toster-toast.show {
        transform: translateX(0);
      }
      
      .toster-toast .toster-icon {
        align-self: center;
      }
      
      .toster-toast .toster-content {
        align-self: center;
      }
      
      .toster-toast .toster-title {
        color: #111827;
        font-weight: 600;
        font-size: 0.875rem;
        margin: 0;
      }
      
      .toster-toast .toster-message {
        color: #6b7280;
        font-weight: 200;
        font-size: 0.75rem;
        margin: 0;
      }
      
      .toster-toast .toster-close {
        align-self: start;
        background: transparent;
        font-size: 1.5rem;
        line-height: 1;
        color: #6b7280;
        cursor: pointer;
        border: 0;
        padding: 0;
      }
      
      .toster-toast .toster-close:hover {
        color: #374151;
      }
      
      /* Dark theme styles */
      .toster-toast.dark {
        background-color: #1f2937;
      }
      
      .toster-toast.dark .toster-title {
        color: #f9fafb;
      }
      
      .toster-toast.dark .toster-message {
        color: #d1d5db;
      }
      
      .toster-toast.dark .toster-close {
        color: #9ca3af;
      }
      
      .toster-toast.dark .toster-close:hover {
        color: #d1d5db;
      }
    `;
    document.head.appendChild(style);
  }

  trimMessage(message, maxLength = 80) {
    if (!message) return '';
    
    // Remove HTML tags for length calculation
    const textContent = message.replace(/<[^>]*>/g, '');
    
    if (textContent.length <= maxLength) {
      return message;
    }
    
    // If message contains HTML, we need to be more careful
    if (message.includes('<')) {
      // For HTML content, truncate the text content and preserve basic HTML structure
      const truncatedText = textContent.substring(0, maxLength - 3) + '...';
      return truncatedText;
    } else {
      // For plain text, simple truncation
      return message.substring(0, maxLength - 3) + '...';
    }
  }

  async show(config = {}) {
    // Wait for dependencies to load if they were just added
    await this.waitForDependencies();
    
    const finalConfig = { ...this.defaultConfig, ...config };
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toster-toast';
    if (finalConfig.theme === 'dark') {
      toast.classList.add('dark');
    }
    
    // Color mapping for border
    const colorMap = {
      'border-blue-500': '#3b82f6',
      'border-green-500': '#10b981',
      'border-red-500': '#ef4444',
      'border-yellow-500': '#f59e0b',
      'border-purple-500': '#8b5cf6',
      'border-gray-500': '#6b7280'
    };
    
    const borderColor = colorMap[finalConfig.borderColor] || '#3b82f6';
    toast.style.borderLeft = `8px solid ${borderColor}`;
    
    // Create icon element
    const iconElement = document.createElement('div');
    iconElement.className = 'toster-icon';
    const icon = document.createElement('i');
    icon.className = `fa ${finalConfig.icon} text-4xl ${finalConfig.iconColor}`;
    icon.setAttribute('aria-hidden', 'true');
    iconElement.appendChild(icon);
    
    // Create content element
    const contentElement = document.createElement('div');
    contentElement.className = 'toster-content';
    
    const titleElement = document.createElement('p');
    titleElement.className = 'toster-title';
    titleElement.textContent = finalConfig.title;
    
    const messageElement = document.createElement('p');
    messageElement.className = 'toster-message';
    const trimmedMessage = this.trimMessage(finalConfig.message);
    messageElement.innerHTML = trimmedMessage;
    
    contentElement.appendChild(titleElement);
    contentElement.appendChild(messageElement);
    
    // Create close button
    const closeButton = document.createElement('button');
    closeButton.className = 'toster-close';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = () => this.close(toast);
    
    // Assemble toast
    toast.appendChild(iconElement);
    toast.appendChild(contentElement);
    toast.appendChild(closeButton);
    
    // Add to container
    this.toastContainer.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);
    
    // Auto close if enabled
    if (finalConfig.autoClose) {
      setTimeout(() => {
        this.close(toast);
      }, finalConfig.autoCloseDelay);
    }
    
    return toast;
  }

  close(toast) {
    if (toast && toast.parentNode) {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 1000); // Wait for animation to complete
    }
  }

  // Convenience methods
  async success(message, title = 'Success!', options = {}) {
    return await this.show({
      icon: 'fa-check-circle',
      iconColor: 'text-green-500',
      borderColor: 'border-green-500',
      title,
      message,
      ...options
    });
  }

  async error(message, title = 'Error!', options = {}) {
    return await this.show({
      icon: 'fa-exclamation-triangle',
      iconColor: 'text-red-500',
      borderColor: 'border-red-500',
      title,
      message,
      ...options
    });
  }

  async warning(message, title = 'Warning!', options = {}) {
    return await this.show({
      icon: 'fa-exclamation-circle',
      iconColor: 'text-yellow-500',
      borderColor: 'border-yellow-500',
      title,
      message,
      ...options
    });
  }

  async info(message, title = 'Info', options = {}) {
    return await this.show({
      icon: 'fa-info-circle',
      iconColor: 'text-blue-500',
      borderColor: 'border-blue-500',
      title,
      message,
      ...options
    });
  }

  async custom(config) {
    return await this.show(config);
  }
}

// Create global instance
const toster = new Toster();

// Export for different module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Toster, toster };
} else if (typeof define === 'function' && define.amd) {
  define([], function() {
    return { Toster, toster };
  });
} else {
  window.Toster = Toster;
  window.toster = toster;
}
