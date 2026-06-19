# Prodesk IT - Corporate Landing Page

A professional, high-performance landing page for Prodesk IT, developed to meet the strict architectural standards of Sprint 01. The project focuses on "pixel-perfect" UI, responsive design, and clean, modular code using raw CSS architecture.

##  Live Demo
https://prodesk-it-sprint1-ten.vercel.app

## Sprint Objective
The primary objective of this sprint was to validate foundational web architecture skills using **Raw CSS (Flexbox/Grid)** and **Vanilla JavaScript** without relying on external CSS frameworks like Tailwind or Bootstrap.

##  Technical Implementation
* **Architecture:** Component-based structure using semantic HTML5.
* **Layouts:** Implemented CSS Grid for the service module (`repeat(auto-fit)`) and Flexbox for the hero/navbar sections.
* **JavaScript:** * Implemented a `Theme Controller` for Dark/Light mode persistence via `localStorage`.
    * Utilized `IntersectionObserver` API for scroll-triggered reveal animations.
    * Built custom `scroll-lock` logic for a premium mobile-navigation experience.
* **Performance:** Optimized for speed with lazy-loading assets and optimized DOM rendering.

##  Core Features
- **Responsive Design:** Fluid layout across mobile, tablet, and desktop viewports.
- **Sticky Navigation:** Scroll-aware navbar that adapts visibility on scroll.
- **Micro-interactions:** Hover effects and z-axis depth transitions on all call-to-action components.
- **Accessibility:** Semantic structure and aria-labels for improved screen reader support.

## 📂 Project Structure
```text
PRODESK-IT/
├── assets/
│   └── images/          # Images and video assets
├── index.html           # Primary structure
├── style.css            # Vanilla CSS (Flexbox/Grid/Animations)
├── script.js            # UI Logic, Theme, and Observers
├── Prompts.md           # Documentation of AI assistance
└── README.md            # Project documentation