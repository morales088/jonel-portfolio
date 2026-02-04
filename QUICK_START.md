# 🚀 Quick Start Guide

## Your Portfolio is Ready!

The dev server is already running at: **http://localhost:3000**

---

## 1️⃣ View Your Portfolio (30 seconds)

Open your browser and navigate to:
```
http://localhost:3000
```

Try these interactions:
- ✅ Click on "Me" pill → See your bio
- ✅ Click on "Projects" pill → See project cards
- ✅ Click on "Skills" pill → See your skills
- ✅ Click on "Contact" pill → See contact info
- ✅ Click any project card → View project details
- ✅ Scroll down → See scroll-to-top button appear

---

## 2️⃣ Add Your Avatar (2 minutes)

### Option A: Copy from screenshots folder
I noticed there are avatar images in the screenshots. To extract one:

1. Open the contact page screenshot in an image editor
2. Crop just the circular avatar
3. Save as `avatar.jpg`
4. Place in: `public/assets/avatar.jpg`

### Option B: Use your own photo
1. Find a good photo of yourself
2. Resize to 512x512px (square)
3. Save as `avatar.jpg`
4. Place in: `public/assets/avatar.jpg`

### Option C: Use a placeholder for now
The current gradient placeholder works fine! You can add the real photo later.

---

## 3️⃣ Customize Text (5 minutes)

### Update Your Name & Title
Edit: `app/page.tsx` (lines 25-28)
```typescript
<h2 className="text-2xl md:text-3xl text-gray-700 mb-2">
  Hey, I'm YOUR_NAME 👋
</h2>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
  YOUR TITLE HERE
</h1>
```

### Update Your Bio
Edit: `components/sections/MeSection.tsx`
- Change the paragraphs to describe yourself
- Keep it casual and friendly

### Update Contact Details
Edit: `components/sections/ContactSection.tsx`
- Email, phone, location are already set from your CV
- Update LinkedIn URL if needed

---

## 4️⃣ Test on Mobile (2 minutes)

1. Open http://localhost:3000 in your browser
2. Open DevTools (F12)
3. Click the mobile device icon
4. Test different screen sizes
5. Verify everything looks good

---

## 5️⃣ Deploy to Production (5 minutes)

### Deploy to Vercel (Recommended)

1. Create account at https://vercel.com
2. Install Vercel CLI:
```bash
npm install -g vercel
```

3. Deploy:
```bash
npm run build
vercel
```

4. Follow the prompts
5. Get your live URL!

### Alternative: Deploy to Netlify

1. Create account at https://netlify.com
2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Build and deploy:
```bash
npm run build
netlify deploy --prod
```

---

## 🎨 Optional Customizations

### Enable the "Unpublished" Banner
Edit: `app/page.tsx` (line 22)

Uncomment these lines:
```typescript
<Banner 
  message="This portfolio is unpublished - only you can see it" 
  actionText="Back to Dashboard"
  actionHref="/"
/>
```

### Change Color Scheme
Search and replace in all files:
- `from-purple-400 to-pink-400` → Your colors
- `from-purple-100 via-pink-50 to-blue-50` → Your background

### Add More Projects
Edit: `components/sections/ProjectsSection.tsx`

Add to the projects array:
```typescript
{
  title: "Project Name",
  label: "Project Type",
  slug: "project-slug",
  gradient: "from-color-600 to-color-600",
}
```

Then edit: `app/projects/[slug]/page.tsx`

Add to the projectData object:
```typescript
"project-slug": {
  title: "Project Name",
  description: "Short description",
  longDescription: "Detailed description...",
  tools: ["Tool1", "Tool2"],
  link: "https://example.com",
  gradient: "from-color-600 to-color-600",
}
```

---

## 📋 Common Tasks

### Restart Dev Server
```bash
# Stop: Press Ctrl+C in terminal
# Start: Run this
npm run dev
```

### Install New Package
```bash
npm install package-name
```

### Build for Production
```bash
npm run build
npm start
```

### Check for Errors
```bash
npm run lint
```

---

## 🐛 Troubleshooting

### Port 3000 already in use?
Kill the process or change port:
```bash
# Change port in package.json
"dev": "next dev -p 3001"
```

### Avatar not showing?
- Check file name: Must be exactly `avatar.jpg`
- Check location: Must be in `public/assets/`
- Check format: JPG or PNG
- Try refreshing browser (Ctrl+Shift+R)

### Styles not updating?
- Clear browser cache (Ctrl+Shift+R)
- Restart dev server
- Check for console errors (F12)

### Build errors?
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📚 Learn More

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

---

## ✅ Checklist Before Going Live

- [ ] Added real avatar image
- [ ] Updated name and title
- [ ] Customized bio text
- [ ] Verified contact information
- [ ] Updated LinkedIn URL
- [ ] Added/removed projects as needed
- [ ] Tested on mobile
- [ ] Tested all navigation pills
- [ ] Tested all project links
- [ ] Checked for typos
- [ ] Built without errors (`npm run build`)

---

## 🎉 You're All Set!

Your portfolio is modern, professional, and ready to impress. 

**Current Status:**
- ✅ Server running at http://localhost:3000
- ✅ All features implemented
- ✅ Responsive design
- ✅ Production ready

**What to do now:**
1. Open http://localhost:3000
2. Click around and explore
3. Make it yours with custom content
4. Deploy and share!

Need more details? Check:
- `README.md` - Project overview
- `SETUP.md` - Detailed instructions
- `PROJECT_SUMMARY.md` - Complete feature list

Happy building! 🚀
