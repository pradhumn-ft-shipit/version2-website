/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#FFFFFF',
        bgCanvas: '#F8FAFC',
        bgTint: '#F0F5F2',
        bgGlass: 'rgba(255, 255, 255, 0.7)',
        brandDeep: '#0A3D2E',
        brandDeepHover: '#15523E',
        brandMint: '#2DD4A0',
        brandMintGlow: 'rgba(45,212,160,0.15)',
        textPrimary: '#0B1220',
        textSecondary: '#475569',
        textTertiary: '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-mint': '0 0 0 1px rgba(45,212,160,0.4), 0 0 24px rgba(45,212,160,0.15)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-hover': '0 12px 48px 0 rgba(31, 38, 135, 0.15)',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'spin-slow': 'spin 6s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
