# Copilot Instructions for Global Dreams Connect

## Project Overview
This is a **Next.js 16 landing page** for Global Dreams Connect (GDC), a platform connecting students with mentors and university professors. The application uses **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Radix UI components**.

## Architecture & Key Components

### Component Structure
- **Page Composition** (`app/page.tsx`): Orchestrates the landing page layout by importing and composing six major sections in sequence:
  ```tsx
  <Header /> → <Hero /> → <Explore /> → <Testimonial /> → <Stats /> → <Footer />
  ```
- **Header** (`components/Header.tsx`): "Use client" component with mobile menu toggle state. Logo features branded SVG + text tagline. Mobile-first responsive design (hidden menu on mobile, visible on md+).
- **Hero** (`components/Hero.tsx`): Two-column layout (text left, image right) with CTA button, stats badges, and responsive typography. Uses `<Banner />` component for visual hierarchy.
- **UI Components** (`components/ui/button.tsx`): Shadcn-style button using `class-variance-authority` for variant management (default, destructive, outline, secondary, ghost, link). Exports `buttonVariants` for styling without Button component.

### Utility Patterns
- **CSS Class Merging** (`lib/utils.ts`): `cn()` function combines clsx + tailwind-merge. Use this when composing conditional Tailwind classes to prevent specificity conflicts.
- **Custom Buttons** (`components/utils/BlueBtn.tsx`): Brand-specific button with hardcoded `#070750` (dark blue) background, arrow icon, and hardcoded href. Consider parameterizing href when adding links.

## Styling Conventions

### Tailwind + Custom Colors
- **Brand Colors**: 
  - Primary: `#070750` (dark blue) - used in Header logo, buttons, text
  - Accent: `#FFE953` (yellow), `#8A38F5` (purple) - used for stat highlights
  - Neutral: `#767676` (gray), `#333333` (dark gray)
- **Responsive Breakpoints**: Mobile-first approach using `md:` (768px), `lg:` (1024px)
- **Spacing**: Uses explicit px values (e.g., `px-[8px]`, `ml-10`, `py-[16px]`) alongside standard Tailwind scale
- **Typography**: Poppins font loaded via Next.js Google Fonts in `layout.tsx`, applied to entire app via `${poppins.className}`

### Inline vs. Custom Styles
- Prefer **inline Tailwind** over global CSS unless applying to multiple components
- `globals.css` exists for base resets and animations
- Use `class-variance-authority` (CVA) patterns (see `button.tsx`) for components with multiple style variants

## Development Workflow

### Commands
- `pnpm dev` - Start dev server (HMR enabled, port 3000)
- `pnpm build` - Production build
- `pnpm start` - Run production server
- `pnpm lint` - Run ESLint (uses Next.js + TypeScript rules)

### Package Manager
- **pnpm** is configured (see `pnpm-lock.yaml`). Use `pnpm add` for dependencies, not npm/yarn.

### TypeScript Configuration
- Target: **ES2017**, Module: **esnext**, strict mode **enabled**
- Path alias: `@/*` maps to project root (enables `import { Header } from '@/components/Header'`)
- Includes `.next/types` for Next.js type generation

## Component Development Patterns

### Client vs. Server Components
- **Client Components**: Use `"use client"` directive when managing state (e.g., `Header.tsx` for mobile menu toggle)
- **Server Components**: Default for page composition and layout. Use for data fetching if backend is added.
- **Images**: Always use Next.js `<Image />` component (not `<img />`), import from `'next/image'`

### Responsive Design
- Mobile-first: write mobile classes first, then add `md:` / `lg:` overrides
- Example from Header: `className='text-[18px] md:text-[20px] lg:text-[24px]'`
- Hide/show elements: `md:hidden`, `hidden md:block`, `sm:hidden`

### Component Props
- Use TypeScript interfaces for props (not optional `any` types)
- Example: `BlueBtn` currently lacks prop typing (accepts `{text}` without type). Improve by adding `interface Props { text: string }`

## Integration Points & Dependencies

### External Libraries
- **Radix UI** (`@radix-ui/react-slot`): Headless primitive components. Button component uses Radix Slot for flexible rendering.
- **lucide-react**: Icon library. Hero uses `<ArrowRight />` icon. Import icons directly: `import { ArrowRight } from 'lucide-react'`
- **class-variance-authority**: CSS variant generator. Used in button for size/variant combinations.
- **tailwind-merge**: Merges conflicting Tailwind classes (prevents `mx-auto` from being overridden by `ml-10`).

### Assets
- **Images**: Located in `public/Images/`. Use relative paths (`src="Images/Logo.svg"`) in Image component.
- **Fonts**: Poppins loaded via Next.js Google Fonts (already configured in `layout.tsx`)

## Code Quality

### ESLint Configuration
- Uses ESLint v9 with Next.js core-web-vitals and TypeScript rules
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`
- Run `pnpm lint` before committing

### Convention Deviations to Avoid
- **Don't use `<img />`**: Use `<Image />` for Next.js optimization
- **Don't hardcode values in reusable components**: Parameterize colors/hrefs (e.g., `BlueBtn` should accept `href` and `bgColor` props)
- **Don't write untyped props**: Always use TypeScript interfaces

## Adding New Features

### Adding a New Section Component
1. Create file in `components/SectionName.tsx`
2. Import in `app/page.tsx` and add to component composition
3. Use responsive Tailwind classes and `cn()` for style composition
4. If stateful (forms, toggles), add `"use client"` directive

### Adding a New Button Style
1. Update `components/ui/button.tsx` buttonVariants CVA definition
2. Add new variant name and associated styles
3. Test with different size + variant combinations

### Consuming External Data (future enhancement)
- If backend is added, consider:
  - Server components for data fetching (move logic to `app/layout.tsx` or page-level components)
  - React Query/SWR for client-side data fetching (not currently installed)
  - Environment variables via `.env.local` for API URLs

## Branch & Deployment Context
- **Current Branch**: `my-changes`
- **Default Branch**: `main`
- **Deployment**: Ready for Vercel (Next.js native support)
