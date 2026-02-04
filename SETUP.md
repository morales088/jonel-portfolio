# Portfolio Setup Guide

## ✅ Installation Complete!

Your portfolio is now set up and running on **http://localhost:3000**

## 🎨 What's Included

### Components
- ✅ **Hero Section** with greeting and role title
- ✅ **Chat Input** styled like the inspiration
- ✅ **Navigation Pills** (Me, Projects, Skills, Contact)
- ✅ **Animated Sections** that appear on pill click
- ✅ **Project Cards** with hover effects
- ✅ **Project Detail Pages** with routing
- ✅ **Responsive Design** mobile-first approach

### Features Matching the Inspiration
- ✅ Single-page experience with section reveals
- ✅ Large avatar at top (placeholder gradient)
- ✅ Soft gradient background (purple/pink/blue)
- ✅ Rounded-xl navigation pills with active states
- ✅ Smooth transitions and animations
- ✅ Card-based project layout
- ✅ Clean, modern design with soft shadows
- ✅ No carousels, no animation libraries

## 📝 Next Steps

### 1. Add Your Avatar Image
Place your photo at: `public/assets/avatar.jpg`
- Recommended size: 512x512px
- Format: JPG or PNG
- Will automatically replace the placeholder

### 2. Customize Content

**Personal Info:**
- Edit `app/page.tsx` - Update name and title
- Edit `components/sections/ContactSection.tsx` - Update contact details
- Edit `components/sections/MeSection.tsx` - Update bio

**Projects:**
- Edit `components/sections/ProjectsSection.tsx` - Add/remove projects
- Edit `app/projects/[slug]/page.tsx` - Update project details

**Skills:**
- Edit `components/sections/SkillsSection.tsx` - Update skills list

### 3. Test the Application

Open your browser to **http://localhost:3000** and test:
- Click each navigation pill (Me, Projects, Skills, Contact)
- Verify smooth section transitions
- Click project cards to view details
- Test on mobile (resize browser window)

### 4. Deploy

When ready to deploy:

```bash
npm run build
```

Deploy to Vercel (recommended):
```bash
npx vercel
```

## 🎯 Design Decisions

### Layout Structure
- Centered content column (max-w-4xl for main, max-w-6xl for projects)
- Gradient background: purple-100 → pink-50 → blue-50
- Sections appear inline, not via scrolling

### Color Scheme
- Primary gradient: purple-400 → pink-400
- Background: Soft purple/pink/blue gradient
- Cards: White with shadow-xl
- Text: Gray-900 for headings, gray-700 for body

### Typography
- Headings: Bold, 4xl to 7xl sizes
- Body: lg (18px), relaxed line-height
- System font stack for fast loading

### Interactions
- Pills: Active state uses gradient background
- Cards: Hover scale (105%) + shadow increase
- Sections: Fade in from bottom (0.5s)
- All transitions: smooth, no jarring effects

## 🔧 Troubleshooting

**Avatar not showing?**
- Make sure the file is named exactly `avatar.jpg`
- Place it in `public/assets/` directory
- The placeholder will show if image is missing

**Port 3000 already in use?**
- Stop other Next.js apps
- Or edit `package.json` to use different port: `"dev": "next dev -p 3001"`

**Need to restart?**
- Press Ctrl+C in the terminal
- Run `npm run dev` again

## 📚 Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- No external dependencies for UI

## 🎨 Customization Tips

**Change gradient colors:**
Look for `from-purple-400 to-pink-400` in files and replace with your colors.

**Change background:**
Edit `app/page.tsx` - look for `bg-gradient-to-br` class.

**Add more sections:**
1. Create new file in `components/sections/`
2. Add new pill in `app/page.tsx`
3. Add section to activeSection state

**Adjust spacing:**
Tailwind classes used: `px-6`, `py-12`, `gap-4`, etc.
Increase/decrease numbers to adjust spacing.

---

Need help? Check the README.md file for more details!
