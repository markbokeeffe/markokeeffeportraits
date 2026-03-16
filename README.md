# Marko Keeffe Portraits

A responsive portrait photography and fine art portfolio website built with [Next.js](https://nextjs.org).

## Overview

This website showcases the work of Irish fine art portrait painter Marko Keeffe. It includes a full gallery of portraits and presentation moments, a client testimonials section, an about page, and a commission enquiry form.

## Features

- **Responsive Design** — Mobile-first layout with breakpoints for all screen sizes
- **Masonry Gallery** — CSS-columns masonry grid with hover overlays and click-to-enlarge modal
- **Parallax Hero** — Engaging gradient hero section on the homepage
- **Contact Form** — Commission enquiry form with client-side validation
- **Testimonials** — Client reviews and thank-you letters
- **Sticky Navigation** — Accessible sticky header with hamburger menu on mobile
- **Image Modal** — Keyboard-accessible modal for enlarged image viewing

## Project Structure

```
app/
├── components/
│   ├── Navigation.tsx       # Responsive sticky navigation
│   ├── Navigation.css
│   ├── ImageModal.tsx       # Accessible image modal
│   └── ImageModal.css
├── styles/
│   └── Gallery.css          # Masonry grid gallery styles
├── about/page.tsx           # Biography page
├── contact/page.tsx         # Commission enquiry form
├── portraits/page.tsx       # Portrait gallery
├── presentations/page.tsx   # Presentation moments gallery
├── testimonials/page.tsx    # Client testimonials
├── layout.tsx               # Root layout with navigation
└── page.tsx                 # Homepage

public/
└── data/
    ├── portraits.json       # Portrait metadata
    ├── presentations.json   # Presentation metadata
    └── testimonials.json    # Client testimonials data
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Real Images

1. Place portrait images in `public/images/portraits/`
2. Place presentation images in `public/images/presentations/`
3. Update `public/data/portraits.json` and `public/data/presentations.json` with the correct filenames
4. Replace the placeholder `<div>` elements in `ImageModal.tsx` and the gallery pages with `<Image />` from `next/image`

## Building for Production

```bash
npm run build
npm run start
```

## Deployment

The easiest way to deploy is via [Vercel](https://vercel.com). Connect your GitHub repository and Vercel will automatically build and deploy on every push to the main branch.

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more options.

## License

[MIT](LICENSE)

