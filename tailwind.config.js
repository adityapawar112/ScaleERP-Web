/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
        logo: ["var(--font-stack-sans-notch)", "'Stack Sans Notch'", "sans-serif"],
        notch: ["var(--font-stack-sans-notch)", "'Stack Sans Notch'", "sans-serif"],
        bauhaus: ["var(--font-stack-sans-notch)", "var(--font-outfit)", "sans-serif"],
        display: ["var(--font-stack-sans-notch)", "var(--font-outfit)", "sans-serif"],
      },
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        brand: {
          DEFAULT: "var(--brand-primary)",
          primary: "var(--brand-primary)",
          "tint-1": "var(--brand-primary-tint-1)",
          "tint-2": "var(--brand-primary-tint-2)",
          "tint-3": "var(--brand-primary-tint-3)",
          secondary: "var(--brand-secondary)",
          dark: "var(--brand-dark)",
          black: "var(--brand-black)",
          gray: "var(--brand-gray-slate)",
          silver: "var(--brand-gray-silver)",
          white: "var(--brand-white)",
        },
        terracotta: "var(--brand-primary)",
        navy: "var(--brand-dark)",
        dark: "var(--brand-dark)",
        light: "var(--brand-secondary)",
        active: "var(--brand-primary)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography")
  ],
}
