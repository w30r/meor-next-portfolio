# Smooth Scroll via Lenis (wheel + touch + anchor links)

## Goal
Replace the janky default scroll with buttery-smooth scrolling on **wheel, trackpad, touch, keyboard, and anchor clicks** across the entire app. The current `scroll-smooth` Tailwind class only smooths anchor-link clicks — it does nothing for the scroll wheel, which is the actual complaint.

## Approach
Adopt **[Lenis](https://github.com/darkroomengineering/lenis)** v1.x (the modern successor to Locomotive Scroll). It is:
- ~4 KB gzipped, zero-config smooth scroll engine
- Built on `requestAnimationFrame` + CSS transforms (GPU-accelerated)
- Native to wheel / touch / keyboard input
- Comes with a `useLenis` hook for React
- Plays nicely with the `framer-motion` already in `package.json`

Installed once at the app root in `src/pages/_app.js`, with the existing `ScrollToTop` button updated to use Lenis for consistency. No other components need to change.

---

## Changes

### 1. Install dependency
```bash
npm install lenis
```
Single package. No GSAP / ScrollTrigger / Locomotive needed.

### 2. Create `src/pages/components/SmoothScroll.js` (new file)
A client-only provider that owns the Lenis instance and the rAF loop. Component file because `_app.js` is the root and we want SSR-safe init.

```js
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,        // animation length (s)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expoOut
      smoothWheel: true,    // <-- the key flag: smooths wheel + touch
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    // Anchor link interception: any <a href="#..."> uses Lenis instead of native jump
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href").slice(1);
      const target = id ? document.getElementById(id) : null;
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: -80 }); // offset for fixed TopBar
      }
    };
    document.addEventListener("click", onClick);

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return children;
}
```

### 3. Wire it into `src/pages/_app.js`
Wrap the existing tree. Keeps the current `<ScrollToTop />` working.

```js
import "@/styles/globals.css";
import SmoothScroll from "./components/SmoothScroll";
import ScrollToTop from "./components/ScrollToTop";

export default function App({ Component, pageProps }) {
  return (
    <SmoothScroll>
      <ScrollToTop />
      <Component {...pageProps} />
    </SmoothScroll>
  );
}
```

### 4. Update `src/pages/components/ScrollToTop.js`
Swap the native `window.scrollTo` for Lenis so the button's animation matches the wheel experience.

```diff
- const scrollToTop = () => {
-   window.scrollTo({ top: 0, behavior: "smooth" });
- };
+ const lenis = useLenis();          // from "lenis" v1+
+ const scrollToTop = () => lenis?.scrollTo(0, { duration: 1.2 });
```

Add to imports:
```js
import { useLenis } from "lenis";
```

### 5. Minor CSS touch-up in `src/styles/globals.css`
Keep the hidden native scrollbar, but let Lenis drive the body. Add at the bottom of the file:

```css
html.lenis,
html.lenis body {
  height: auto;
}
.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}
.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}
.lenis.lenis-stopped {
  overflow: hidden;
}
```

These are the official companion rules — they prevent edge cases where a `scroll-behavior: smooth` rule or fixed-height html/body fights Lenis.

### 6. (Optional, only if a page breaks) `data-lenis-prevent`
If any scrollable child (e.g. the `.carousel` and the horizontal scroller in `airbnb.js`) misbehaves, add `data-lenis-prevent` to that element and Lenis will skip intercepting it.

---

## Why not the other options
- **Locomotive Scroll** — unmaintained, heavier, framer-motion integration is now broken since its deprecation. No reason to introduce it.
- **Custom rAF + lerp** — works, but re-implements Lenis poorly. Adds maintenance and misses edge cases (resize, anchors, prefers-reduced-motion).
- **CSS `scroll-behavior: smooth`** — already what `scroll-smooth` does. Doesn't touch wheel events, so it doesn't fix the problem.

## Files touched
| File | Change |
|---|---|
| `package.json` / `package-lock.json` | +`lenis` dep |
| `src/pages/components/SmoothScroll.js` | **new** provider component |
| `src/pages/_app.js` | wrap tree in `<SmoothScroll>` |
| `src/pages/components/ScrollToTop.js` | use `useLenis().scrollTo` instead of native |
| `src/styles/globals.css` | append Lenis companion rules |

No changes to `index.js`, `airbnb.js`, `kereta.js`, `resume.js`, `projects/*`, or any other page — the Lenis root covers them all.

## Verification
1. `npm run dev`, open `http://localhost:3000`.
2. Scroll the wheel — motion should be eased, not 1:1.
3. Trackpad two-finger scroll — same easing.
4. Click any in-page nav anchor (TopBar) — should glide, not jump.
5. Click the floating Scroll-to-Top button — should glide, matching wheel feel.
6. Visit `/airbnb` — the horizontal carousel arrows (`scrollToLeft`/`scrollToRight`) still work because they call `container.scrollLeft`, which Lenis doesn't intercept.
7. `npm run lint` and `npm run build` pass.
