export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        slowPulse: {
          '0%, 100%': { opacity: '0.15', transform: 'scale(1)' },
          '50%': { opacity: '0.25', transform: 'scale(1.05)' },
        },
      },
      animation: {
        slowPulse: 'slowPulse 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
