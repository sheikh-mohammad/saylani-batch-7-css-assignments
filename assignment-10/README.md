# Foodfun (Assignment 10 CSS)

A modern, responsive landing page for a restaurant/food brand, built using HTML and CSS. The project demonstrates clean UI design, responsive layouts, and organized asset management.

### Live Demo
Add your live link here if deployed: [Foodfun Live Demo](https://sheikh-mohammad.github.io/Assignment-10-CSS/)

### Features
- **Responsive Layout** — fluid typography, stacked layouts for tablet/phone
- **Navigation Bar** — logo and primary links
- **Hero Section** — headline with highlighted keywords
- **Welcome Section** — intro content with supporting image
- **Food Items Grid** — menu cards with price and hover effects
- **Promotional Banner** — CTA for reservation
- **Special Dishes** — two-feature layout with description and price
- **Customer Banner** — themed background with overlay
- **Food Updates/Blog** — three cards with meta, title, excerpt, and link
- **Order Section** — booking inputs for date, time, and guests
- **Footer** — about, contact details, opening hours, and social links

### Technology Stack
- **HTML5** — semantic page structure
- **CSS3** — layout, styling, and responsive design (media queries)
- **Font Awesome** — icons via CDN
- **Custom Fonts** — Playfair Display, Roboto

### File Structure
```
Assignment 10/
├── assets/
│   ├── fonts/
│   │   ├── PlayfairDisplay-Regular.ttf
│   │   └── Roboto-Regular.ttf
│   └── imgs/
│       ├── banner/
│       ├── customer/
│       ├── dishes/
│       ├── food items/
│       ├── logo/
│       ├── order/
│       └── updates/
├── index.html   # Main HTML file
├── style.css    # Styling and responsive layout
└── README.md    # Project documentation
```

### How to View
1) Clone or download the project
```bash
git clone https://github.com/sheikh-mohammad/Assignment-10-CSS
cd Assignment-10-CSS
```
2) Open `index.html` in your browser.

### Customization
- **Images**: replace visuals in `assets/imgs/` with your own
- **Content**: update text in `index.html`
- **Styling**: adjust fonts, colors, and spacing in `style.css`

### Contributing
Contributions are welcome.

1) Fork the repository
2) Create a new branch
```bash
git checkout -b feature-name
```
3) Commit your changes
```bash
git commit -m "feat: add improvement"
```
4) Push and open a Pull Request with a clear description

### Optional: Deploy via GitHub Pages
```bash
mkdir -p docs
mv index.html style.css assets docs/
git add . && git commit -m "chore: move site to docs for Pages"
git push
```
