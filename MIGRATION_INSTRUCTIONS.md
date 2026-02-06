# 🚀 Portfolio Next.js Migration Status

We have successfully scaffolded the Next.js application and ported your "Awwwards-level" design into a component-based architecture.

## 🛑 Action Required: Install Dependencies
During the setup, we encountered an **"ENOSPC" (No Space Left on Device)** error while installing dependencies. You need to:

1. **Free up some disk space** on your C: drive.
2. Open a terminal in the `portfolio-v2` folder.
3. Run the following command:
   ```bash
   npm install
   ```

## 📂 Project Structure
Your new portfolio is located in `portfolio-v2/`:
- **`src/app/page.tsx`**: The main landing page (Heroes, Skills, Projects, About, Footer all stitched together).
- **`src/components/`**: Modular components.
  - `Hero.tsx`: Massive Text Reveal animation.
  - `Projects.tsx`: The Asymmetric Grid layout.
  - `Navbar.tsx`: Sticky glassmorphism nav.
  - `SmoothScroll.tsx`: Lenis integration.
  - `CustomCursor.tsx`: Framer Motion cursor.

## 🎨 Features Implemented
- **Tailwind CSS v4**: Bleeding edge styling engine.
- **Framer Motion**: Complex layout animations (grid transitions, text reveals).
- **Lenis Scroll**: Butter smooth momentum scrolling.
- **Dynamic Grid**: Asymmetric layouts for your projects.

Once `npm install` completes, you can run:
```bash
npm run dev
```
and visit `http://localhost:3000` to see your next-gen portfolio!
