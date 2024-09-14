// reveal-splash plugin

// Create a WeakMap to store Reveal instances
const revealInstances = new WeakMap();

class Plugin {
  constructor(config = {}) {
    // Set default configurations and merge with user-provided config
    this.id = "Splash";

    this.config = {
      splashImage: false,
      backgroundColor: "#ffffff",
      text: "Loading...",
      fontOptions: {
        fontFamily: "Arial, sans-serif",
        fontSize: "18px",
        color: "#333"
      },
      minimumDisplay: 1,
      ...config // Merge user configurations
    };

    this.splash = null;
  }

  // Getter to safely access the Reveal instance using WeakMap
  get Reveal() {
    return revealInstances.get(this);
  }

  async init(Reveal) {
    // Store the Reveal instance in the WeakMap
    revealInstances.set(this, Reveal);

    // Access the Reveal instance through the getter
    const revealConfig = findConfig(
      this.Reveal.getConfig(),
      ['splash', 'revealsplash']
    );

    // Merge the Reveal.js configuration into the existing config
    this.config = {
      ...this.config,
      ...revealConfig
    };

    // Start the timer to track the initialization time
    const startTime = Date.now();

    // Draw the splash
    this.initializeSplash();

    // Set up a listener to remove the splash when Reveal is ready
    this.Reveal.on('ready', () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = this.config.minimumDisplay * 1000 - elapsedTime;

      if (remainingTime > 0) {
        // Wait for the remaining time before removing the splash
        setTimeout(() => {
          this.removeSplash();
        }, remainingTime);
      } else {
        // Minimum display time has already passed, remove the splash immediately
        this.removeSplash();
      }
    });
  }

  initializeSplash() {
    // Create the splash container
    this.splash = document.createElement('div');
    this.splash.id = 'reveal-splash';
    this.splash.style.position = 'fixed';
    this.splash.style.top = '0';
    this.splash.style.left = '0';
    this.splash.style.width = '100%';
    this.splash.style.height = '100%';
    this.splash.style.backgroundColor = this.config.backgroundColor;
    this.splash.style.zIndex = '1000';
    this.splash.style.display = 'flex';
    this.splash.style.justifyContent = 'center';
    this.splash.style.alignItems = 'center';
    this.splash.style.textAlign = 'center';
    this.splash.style.margin = 'auto';
    this.splash.style.padding = '0';

    // Create a wrapper to center both the image/spinner and the text
    const splashWrapper = document.createElement('div');
    splashWrapper.style.display = 'flex';
    splashWrapper.style.flexDirection = 'column';
    splashWrapper.style.alignItems = 'center';
    splashWrapper.style.justifyContent = 'center';

    // Create the splash graphic or splash image
    const splashGraphic = document.createElement('div');
    if (this.config.splashImage) {
      const splash = document.createElement('img');
      splash.src = this.config.splashImage;
      splash.style.maxWidth = '50%';
      splash.style.maxHeight = '50%';
      splash.style.marginBottom = '5px'; // Add margin to separate image from text
      splashGraphic.appendChild(splash);
    } else {
      splashGraphic.style.width = '50px';
      splashGraphic.style.height = '50px';
      splashGraphic.style.border = '5px solid #ccc';
      splashGraphic.style.borderTop = '5px solid #333';
      splashGraphic.style.borderRadius = '50%';
      splashGraphic.style.animation = 'spin 1s linear infinite';
      splashGraphic.style.marginBottom = '20px'; // Add margin to separate spinner from text
    }

    // Create the splash text
    let splashText;
    if (this.isHtmlString(this.config.text)) {
      splashText = document.createElement('div');
      splashText.innerHTML = this.config.text;
    } else {
      splashText = document.createElement('p');
      splashText.textContent = this.config.text;
    }
    // append the styles to the element
    Object.assign(splashText.style, this.config.fontOptions);

    // Append graphic and text to splash wrapper
    splashWrapper.appendChild(splashGraphic);
    splashWrapper.appendChild(splashText);

    // Append the wrapper to the splash container
    this.splash.appendChild(splashWrapper);

    // Append the splash to the body
    document.body.appendChild(this.splash);

    // Add a custom CSS keyframe animation for spinning if no splash image is used
    if (!this.config.splashImage) {
      const styleSheet = document.createElement('style');
      styleSheet.innerText = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
      this.splash.appendChild(styleSheet);
    }
  }


  isHtmlString(str) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    return Array.from(doc.body.childNodes).some(node => node.nodeType === 1);
  }

  removeSplash() {
    if (this.splash) {
      this.splash.style.opacity = '0';
      setTimeout(() => {
        this.splash.remove();
      }, 500);
    }
  }

  destroy() {
    // Clean up if necessary
    this.removeSplash();
  }
}

// Helper
function findConfig(configs, keys) {
  for (let key of keys) {
    for (let configKey in configs) {
      if (configKey.toLowerCase() === key.toLowerCase()) {
        return configs[configKey];
      }
    }
  }
  return {}; // Return an empty object if no matching config is found
}

// Export the plugin instance
const Splash = new Plugin();
export default Splash;