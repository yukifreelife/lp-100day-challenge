/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        deep: '#05060A',
        graphite: '#0B0F17',
        carbon: '#111827',
        steel: '#263241',
        neon: {
          cyan: '#00E5FF',
          magenta: '#FF2BD6',
          lime: '#B6FF3B',
        },
        cta: {
          orange: '#FF5A1F',
        },
        text: {
          white: '#F5F7FA',
          mist: '#A6B0C3',
          muted: '#667085',
        },
      },
      fontFamily: {
        sans: [
          'Noto Sans JP',
          'Hiragino Kaku Gothic ProN',
          'Hiragino Sans',
          'Yu Gothic',
          'Meiryo',
          'system-ui',
          'sans-serif',
        ],
        tech: ['Rajdhani', 'Barlow Condensed', 'Arial Narrow', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neonCyan: '0 0 22px rgba(0, 229, 255, 0.38)',
        neonMagenta: '0 0 22px rgba(255, 43, 214, 0.3)',
        orangeGlow: '0 0 28px rgba(255, 90, 31, 0.42)',
        panel: '0 22px 80px rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: {
        cybergrid:
          'linear-gradient(rgba(0,229,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,43,214,0.07) 1px, transparent 1px)',
        carbon:
          'radial-gradient(circle at 20% 20%, rgba(0,229,255,0.08), transparent 28%), linear-gradient(135deg, rgba(255,255,255,0.05) 0 12%, transparent 12% 50%, rgba(255,255,255,0.035) 50% 62%, transparent 62%)',
        neonline:
          'linear-gradient(90deg, transparent, rgba(0,229,255,0.85), rgba(255,43,214,0.72), transparent)',
      },
      clipPath: {
        angular: 'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))',
      },
    },
  },
  plugins: [],
};
