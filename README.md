# We.js Evento free theme

**we-theme-event**

> Default we.js theme for events

Special thanks to shapebootstrap.net team for this free theme

## Installation

```js
ǹpm install --save we-theme-event
```

Add it in file: config/themes.js
```js
module.exports.themes = {
  enabled: [
    'we-theme-event', // event theme
    'we-theme-pratt', // others themes
    'we-theme-admin-default',
  ],
  app: 'we-theme-pratt',
  admin: 'we-theme-admin-default'
};
```

And add in config/event.js
```js
module.exports.event = {
  themes: ['we-theme-event'],
  defaultTheme: 'we-theme-event'
};
```


## Build with: 

Evento free theme: https://shapebootstrap.net/item/1524963-evento-free-music-event-template

## License

MIT
