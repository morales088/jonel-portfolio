# Portfolio Website

A modern, interactive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Single-page interaction model**: Click navigation pills to reveal sections inline
- **Smooth transitions**: Content sections fade in and out smoothly
- **Mobile-first design**: Responsive layout that works on all devices
- **Project showcase**: Card-based project display with detail pages
- **Chat-style input**: Interactive input field for future functionality
- **Clean, modern UI**: Soft shadows, large border radius, and subtle gradients

## Getting Started

### Installation

1. Install dependencies:

```bash
npm install
```

2. Add your avatar image:
   - Place your avatar image as `public/assets/avatar.jpg`
   - Recommended size: 512x512px

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── page.tsx              # Main homepage
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   └── projects/[slug]/      # Dynamic project pages
├── components/
│   ├── Avatar.tsx            # Avatar component
│   ├── ChatInput.tsx         # Chat input component
│   ├── NavPill.tsx           # Navigation pill button
│   ├── ProjectCard.tsx       # Project card component
│   └── sections/             # Section components
│       ├── MeSection.tsx
│       ├── ProjectsSection.tsx
│       ├── SkillsSection.tsx
│       └── ContactSection.tsx
└── public/
    └── assets/               # Static assets (images, etc.)
```

## Customization

### Update Personal Information

1. **Contact Details**: Edit `components/sections/ContactSection.tsx`
2. **About Me**: Edit `components/sections/MeSection.tsx`
3. **Skills**: Edit `components/sections/SkillsSection.tsx`
4. **Projects**: Edit `components/sections/ProjectsSection.tsx` and `app/projects/[slug]/page.tsx`

### Update Branding

1. **Name & Title**: Edit `app/page.tsx` (Hero section)
2. **Avatar**: Replace `public/assets/avatar.jpg`
3. **Colors**: Modify Tailwind classes in components

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## License

MIT
