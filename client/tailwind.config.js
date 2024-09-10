import animatePlugin from 'tailwindcss-animate';
import { plugin as flowbitePlugin, content as flowbiteContent } from 'flowbite-react/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"], // Enable dark mode based on class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/**/*.js",
    flowbiteContent(),
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        palette: {
          softCyan: "#BEE9E8",
          skyBlue: "#62B6CB",
          deepNavy: "#1B4965",
          paleSky: "#CAE9FF",
          oceanBlue: "#5FA8D3",
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      fontSize: {
        'dynamic': 'calc(16px + (24 - 16) * (100vw - 320px) / (1280 - 320))',
      },
      keyframes: {
        worm1: {
          '0%': { strokeDashoffset: '0' },
          '50%': { strokeDashoffset: '-358', animationTimingFunction: 'steps(1)' },
          '50.01%': { strokeDashoffset: '358', animationTimingFunction: 'linear' },
          '100%': { strokeDashoffset: '0' },
        },
        worm2: {
          '0%': { strokeDashoffset: '358' },
          '50%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-358' },
        },
      },
      animation: {
        worm1: 'worm1 2s linear infinite',
        worm2: 'worm2 2s linear infinite',
      },
    },
  },
  plugins: [animatePlugin, flowbitePlugin()],
};
