# reveal-splash Plugin

**Effortlessly elevate your Reveal.js presentations with a sleek, customizable splash screen.**

## Motivation

When using Reveal.js to write extensive lectures, I encountered long load times as the presentations grew larger. To improve the user experience, I wanted a splash screen that would display while the content loaded. The `reveal-splash` plugin was created to address this need, offering flexibility and customization to suit any presentation style.

## Installation

### Option 1: Direct HTML Include

Include the plugin directly in your HTML file:

```html
<script type="module">
    import Splash from './path/to/reveal-splash.esm.js';
</script>
```

### Option 2: Install via npm

If you’re using a Node.js environment, install the plugin via npm:

```sh
npm install reveal-splash
```

Then, import the plugin in your JavaScript file:

```javascript
import Splash from 'reveal-splash-plugin';
```

## Basic Usage

To use the `reveal-splash` plugin, include it in the `Reveal.initialize` function and configure it according to your needs:

```javascript
Reveal.initialize({
    plugins: [Splash],
    splash: {
        splashImage: false,
        backgroundColor: "#33aa33",
        text: "Loading presentation, please wait...",
        fontOptions: {
            fontFamily: "Verdana, sans-serif",
            fontSize: "20px",
            color: "#ffffff",
        },
        minimumDisplay: 2
    }
});
```

_Note: If I'm not mistaken, reveal.js will load each plugin asynchronously, so you may see other plugins at work before this kicks in._

## Configuration

The plugin offers several configuration options to help you create the perfect splash screen:

| Option             | Type            | Default                                         | Description                                                                                 |
|--------------------|-----------------|-------------------------------------------------|---------------------------------------------------------------------------------------------|
| `splashImage`      | Boolean/String  | `false`                                         | Specifies the image to display on the splash screen. If false, a spinner will be used.      |
| `backgroundColor`  | String          | `"#ffffff"`                                     | The background color of the splash screen. Accepts any valid CSS color.                     |
| `text`             | String          | `"Loading..."`                                  | The text to display on the splash screen. Can be a plain string or HTML.                    |
| `fontOptions`      | Object          | `{ fontFamily: "Arial, sans-serif", fontSize: "18px", color: "#333" }` | An object defining the font properties of the splash text. Supports standard CSS font properties. |
| `minimumDisplay`   | Number          | `1`                                             | The minimum time (in seconds) that the splash screen should be displayed.                   |

### Example Configuration Snippet

Here’s a snippet showing how to configure the splash screen with a custom image, HTML text, and styling:

```javascript
Reveal.initialize({
    plugins: [Splash],
    splash: {
        splashImage: 'img/splash-logo.png',
        backgroundColor: '#444',
        text: '<p>Loading <code>reveal-splash</code> demo...</p>',
        fontOptions: { color: "#ffffff", fontSize: "36px" },
        minimumDisplay: 5
    }
});
```

## Advanced Customization

You can further enhance the splash screen by using custom HTML and CSS animations. Here’s an example of how to create a neon glow effect for the splash screen text:

*In your splash configuration:*

```javascript
...
text: '<p class="neon-glow">Make a Splash with reveal-splash!</p>',
...
```

*In the head of your presentation, or in an imported css file:*

```css
.neon-glow {
    color: #00FFFF;
    text-shadow: 
        0 0 5px #00FFFF,
        0 0 10px #00FFFF,
        0 0 20px #00FFFF,
        0 0 30px #00FFFF,
        0 0 40px #00FFFF,
        0 0 50px #00FFFF,
        0 0 75px #00FFFF;
    animation: pulse 1.5s infinite alternate, flicker 2s infinite;
}
```

## Issues and Contributing

If you encounter any issues or have suggestions for improvements, please [open an issue](https://github.com/yourprofile/reveal-splash/issues) on GitHub. Contributions are welcome!

## Acknowledgements

Special thanks to the authors of Reveal.js for their incredible work on such a versatile and powerful presentation framework. This plugin was created and tested with Reveal.js version 5.1.0.

## Notes

- This plugin is designed to work seamlessly with Reveal.js.
- Ensure that your splash screen configurations match the overall theme and style of your presentation for the best user experience.
