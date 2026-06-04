/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0F2554',
          50: '#EEF1FB',
          100: '#C8D2EE',
          200: '#9DB5DF',
          300: '#6D8DCF',
          400: '#4066BF',
          500: '#2B4BAF',
          600: '#1B3A8F',
          700: '#0F2554',
          800: '#091A3D',
          900: '#04102A',
          950: '#020A18',
        },
        aqua: {
          DEFAULT: '#0ECFB4',
          50: '#E0FBF8',
          100: '#B3F5EC',
          200: '#7AEEDD',
          300: '#38E4CB',
          400: '#0ECFB4',
          500: '#00B79C',
          600: '#009A81',
          700: '#007C67',
          800: '#005F4E',
          900: '#004135',
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #04102A 0%, #0F2554 50%, #1B3A8F 80%, #0A5C7A 100%)',
        'aqua-gradient': 'linear-gradient(135deg, #0ECFB4 0%, #0094FF 100%)',
        'card-gradient': 'linear-gradient(135deg, #F0F7FF 0%, #E8F4FF 100%)',
      },
      boxShadow: {
        'aqua': '0 4px 24px rgba(14, 207, 180, 0.3)',
        'aqua-lg': '0 8px 40px rgba(14, 207, 180, 0.4)',
        'navy': '0 4px 24px rgba(15, 37, 84, 0.2)',
        'card': '0 2px 20px rgba(15, 37, 84, 0.08)',
        'card-hover': '0 12px 40px rgba(15, 37, 84, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
    }
  },
  darkMode: "class",
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-gradient-aqua': {
          'background': 'linear-gradient(135deg, #0ECFB4, #38BDF8)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.bg-gradient-aqua': {
          'background': 'linear-gradient(135deg, #0ECFB4, #0094FF)',
        },
      })
    }
  ]
}
