# Teknic Euchner — Screenshot Replica (Desktop Only)

This implementation is rebuilt from the supplied `public/ss` visual screenshots. The earlier `figmatask-main.zip` is treated only as an implementation/reference source.

## Run
Open `index.html` in a local static server. For example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Stack
- HTML5
- CSS3 (desktop-only fixed composition; no mobile/tablet layout)
- JavaScript
- Video.js for hero video playback
- Reveal.js for the interactive product detail overlay
- Smooth Scroll for navigation scrolling
- Intersection-free JS state handling for sticky navigation and active section tracking

## Notes
The page intentionally retains the desktop composition rather than introducing responsive breakpoints. At narrow viewport widths it remains a fixed desktop canvas.
