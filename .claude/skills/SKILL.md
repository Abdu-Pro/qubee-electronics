# UI/UX Pro Max — Premium Frontend System Rules

## 1. System Philosophy (The Anti-AI Slop Guardrail)
- **Zero Generic Gradients**: Never use default "blue-to-purple" linear gradients.
- **Deep Slate Tech Vibe**: Dark-mode primary base using zinc (`bg-zinc-950`). Focus on high contrast, deep shadows, and crisp 1px borders (`border-zinc-800`).
- **Asymmetric Layouts**: Avoid standard, symmetrical "3-column grids" for everything. Prefer offset grids, bento-box layouts, and generous, intentional whitespace (`py-24` and `px-8` on grids) to let components breathe.

## 2. Typography & TypeUI Scale
- **Display Headings**: Use tracking-tight, extra-bold display fonts (`tracking-tight font-extrabold`). 
- **Scale**: Use a strict type scale: Headings (`text-4xl lg:text-6xl`), Subheadings (`text-lg lg:text-xl`), Body (`text-base text-zinc-400`), Labels (`text-xs uppercase tracking-widest font-semibold text-blue-500`).

## 3. Premium Interactive Tokens (Framer Motion)
- **Smooth Page Entrances**: Parent containers must use staggered children fade-ins:
  - Parent: `variants={{ show: { transition: { staggerChildren: 0.1 } } }}`
  - Child: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}`
- **Micro-interactions**: Hovering over cards, interactive features, or call-to-action buttons must scale smoothly and shift border colors cleanly (e.g., `whileHover={{ y: -4 }} className="transition-colors hover:border-zinc-700"`).

## 4. Component Patterns
- **Cards**: Dark glassmorphism (`bg-zinc-900/50 backdrop-blur-md border border-zinc-800/80 rounded-2xl`).
- **Call To Action Buttons**: High-contrast, energetic accents (`bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20`).