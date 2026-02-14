# Modern Developer Portfolio

A professional, responsive, and dynamic portfolio website for a Computer Science student. Built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Modern UI**: Clean, minimal design with glassmorphism and smooth animations.
- **Dynamic Projects**: Fetches top GitHub repositories automatically.
- **Coding Stats**: Visual representation of LeetCode progress.
- **Responsive**: Optimised for mobile, tablet, and desktop.
- **Dark Mode**: Supports light/dark mode with a persistable toggle.
- **Contact Form**: Ready-to-integrate contact form.

## Tech Stack

- **Frontend**: Next.js (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts

## Setup Instructions

1. **Clone the repository**:
   ```bash
   # In the project directory
   npm install
   ```

2. **Environment Variables**:
   Create a `.env.local` file and add your GitHub username:
   ```env
   NEXT_PUBLIC_GITHUB_USERNAME=your_username
   ```

3. **Run Locally**:
   ```bash
   npm run dev
   ```

4. **Customization**:
   - Update `src/components/hero.tsx` for your bio and social links.
   - Update `src/components/about.tsx` with your education and skills.
   - Replace `/public/photo.jpg` with your profile picture.
   - Update `src/components/contact.tsx` with your email and social handles.

## Deployment

Ready for one-click deployment on [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
