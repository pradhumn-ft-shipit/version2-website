# Visual Design Guide — FastTrackr AI

_The full visual playbook. Light theme, dark green for primary action. This is the visually stunning, cutting-edge version — ambitious, dynamic, and spectacular._

---

# 1. The North Star

## 1.1 The one-line philosophy

**Stunningly dynamic. Effortlessly clear.**

We are leaving conservative restraint behind to deliver a highly interactive, animated, and visually spectacular experience, while maintaining the light theme and clarity needed for wealth management. The goal is to WOW the user on their first scroll.

## 1.2 What FastTrackr should *feel* like

| Should feel | Should NOT feel |
|---|---|
| Visually Stunning & Premium | Boringly conservative |
| Dynamic & Alive | Static & rigid |
| Fluid & Seamless | Clunky |
| Apple/Linear modern | Dated enterprise |

## 1.3 The three governing principles

**Principle 1 — Spectacular First Impression.**
Vibrant accents, rich micro-interactions, smooth glassmorphism, and seamless page transitions. 

**Principle 2 — Earned Complexity.**
Every animation must look incredible but also serve a narrative purpose. Framer Motion will drive smooth, performant scroll animations that reveal how the product works dynamically.

**Principle 3 — Light Theme with Dark Green Action.**
The base is light, clean, and spacious. The primary interaction color is the dark green from the FastTrackr logo, creating a sharp, striking contrast.

---

# 2. Design System Foundation

## 2.1 Color

### Core palette

| Token | Hex | Use |
|---|---|---|
| `--bg-primary` | `#FFFFFF` | Default page background |
| `--bg-canvas` | `#F8FAFC` | Subtle off-white for alternating sections |
| `--bg-tint` | `#F0F5F2` | Final CTA, emphasis blocks |
| `--bg-glass` | `rgba(255, 255, 255, 0.7)` | Glassmorphic card backgrounds with backdrop-blur |

### Brand & action

| Token | Hex | Use |
|---|---|---|
| `--brand-deep` | `#0A3D2E` | **Primary buttons. The defining brand color.** |
| `--brand-deep-hover` | `#15523E` | Primary button hover |
| `--brand-mint` | `#2DD4A0` | Logo accent, small icon strokes, dynamic highlights |
| `--brand-mint-glow` | `rgba(45,212,160,0.15)` | Atmospheric background tints, animated hero glows |

## 2.2 Typography
**Primary:** Inter
**Display:** General Sans or Outfit (for striking, modern headlines)

## 2.3 Motion & Animation (Framer Motion)
- **Scrollytelling:** Complex horizontal/vertical scroll reveals for "How It Works".
- **Hover States:** 3D tilt effects on Bento Grid tiles, glowing borders.
- **Hero Reveal:** Kinetic typography and staggered fade-ins for the hero section.

## 2.4 UI Elements
- **Glassmorphism:** Use `backdrop-blur-xl` and semi-transparent white backgrounds (`bg-white/70`) for floating headers, sticky navs, and some cards.
- **Borders:** Subtle animated gradient borders or clean thin borders with hover-glows.
- **Shadows:** Deep, soft multi-layered shadows to give elements a floating, premium feel.

# 3. Layout Patterns

## 3.1 The Bento Grid
- Use for the Pain section.
- Tiles should have hover scale and subtle 3D tilt.

## 3.2 Scrollytelling
- "How It Works" will feature a sticky container where scroll progress drives horizontal or cross-fading animations of product states.
