# AI Prompt Log - Sprint 01

In this sprint, I utilized AI tools to clarify CSS architecture and debug JavaScript logic. All outputs were verified, understood, and manually implemented.

1. **Grid Layout Logic:** "How to make a 3-column service section using CSS Grid that stacks on mobile?" 
   - I was stuck on mobile responsiveness, so I asked about `auto-fit` and `minmax` to avoid writing multiple `@media` queries for every screen size.

2. **Video Scaling:** "How to crop a background video to cover 100vh without showing white borders?"
   - Learned about `object-fit: cover` and using `transform: scale()` to mask video edges.

3. **Scroll Reveal Animation:** "How to trigger a CSS fade-in animation as I scroll down?"
   - I used `IntersectionObserver` to toggle a `.reveal` class. I needed help with the Observer API syntax because I hadn't used it before.

4. **Dark Mode State:** "How to save theme selection (dark/light) so it stays applied after page refresh?"
   - Implemented using `localStorage` logic; the AI helped explain the `if/else` flow for setting the theme attribute.