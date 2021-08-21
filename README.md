# Gia-Callista

It is a javascript utility package for coding fast, and we are making it tasty day by day.

# Instalation

1. Using node package manager:
   ```shell
   npm i gia-callista
   ```
2. Using yarn
   ```shell
   yarn add gia-callista
   ```

## Then

```javascript
// You can import simply the Gia object or one by one ->
import Gia, { logger } from "gia-callista";

// Simple logger
logger("Gia Rocked🤘");

// Getting viewport's height & width
const { x: height, y: width } = Gia.getViewportSizes();
```

## Sync between Locomotive-scroll & Gsap

Believe me, creating a relation between locomotive scroll & gsap is really a tough job and hard to understand. While building one of our client's sites, I discovered this solution which was really hard to understand for a beginner. We build this function so that every single one can create a sync process between locomotive scroll & gsap. Btw it's easy to use. Just follow the following code:

```javascript
// Import the css file of locomotive from their github.
import "./locomotive-scroll.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { getLocoScroll } from "gia-callista";

gsap.registerPlugin(ScrollTrigger);

/*
 * 00. getLocoScroll receives a object as parameters {element, speed}
 * 01. Element - your main scroll container, if you don't wanna pass anything just put a className as 'smooth-scroll' in your main body/section.
 * 02. Speed - It's the speed or sensitivity of the scroll.
 */
const locoScroll = getLocoScroll({
  speed: 0.5, // default 1
});

// Your remaining animation and code here
// Create magic here.

// Finally at the last
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
```

## For React

For react, you must use them inside useEffect hook, cause components have to be rendered first.

```jsx
import "./styles.css";
import "./locomotive-scroll.css";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import getLocoScroll from "./getLoco";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const locoScroll = getLocoScroll({
      speed: 0.1,
    });

    // Create magic here

    // Last part
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  });
}
```

Thank you, Good Luck :)
