# Themes

![type:video](/assets/css@cleverdevil.mp4)

Download: ['Webrcade Colorful Theme' by @cleverdevil](https://github.com/cleverdevil/webrcade-colorful-theme)

## Overview
Themes are planned for further down the line. We are trying to focus more on functionality and stability before we get too far into the fine details.

However, there is one option avaliable to you: custom [Cascading Style Sheets (CSS)](https://en.wikipedia.org/wiki/CSS)

### Learn More
- [W3 Schools - CSS Tutorial](https://www.w3schools.com/css/default.asp)
- [Webucator - How to Create a CSS Style Sheet](https://www.webucator.com/article/how-to-create-a-css-external-style-sheet/)

Try your hand at making some creative CSS files for webRcade and show us what you come up with on the project [GitHub discussions](https://github.com/webrcade/webrcade/discussions) or [Discord](https://discord.gg/C4gXN2HJAv)!

## Applying Custom CSS

Simply add the below section into your `feed.json` file and have it point to your custom css file.
See [feed props](/feeds/format/#properties)

```json
"props": {
    "css": [
      "http://localhost/example.css"
    ]
  }
```