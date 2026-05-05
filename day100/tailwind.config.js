/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#153E3A',
        route: '#2E5F7F',
        compass: '#D7A536',
        paper: '#F9FAF7',
        surface: '#FFFFFF',
        mist: '#EEF5F1',
        outline: '#D6DED8',
        sumi: '#17231F',
        kasumi: '#53635E',
        cta: '#C65A3A',
        success: '#2F7D5B',
        warning: '#B57A12',
        error: '#B6423A',
      },
      fontFamily: {
        sans: [
          'Noto Sans JP',
          'Hiragino Sans',
          'Hiragino Kaku Gothic ProN',
          'Yu Gothic',
          'Meiryo',
          'system-ui',
          'sans-serif',
        ],
        serif: ['Shippori Mincho', 'Noto Serif JP', 'Yu Mincho', 'serif'],
      },
      maxWidth: {
        container: '1120px',
      },
      spacing: {
        section: '88px',
        'section-md': '64px',
        'section-sm': '48px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '8px',
      },
      boxShadow: {
        paper: '0 8px 24px rgba(21, 62, 58, 0.08)',
        map: '0 16px 48px rgba(21, 62, 58, 0.12)',
        lift: '0 24px 72px rgba(21, 62, 58, 0.16)',
      },
      backgroundImage: {
        'paper-grid':
          'linear-gradient(rgba(214, 222, 216, 0.46) 1px, transparent 1px), linear-gradient(90deg, rgba(214, 222, 216, 0.38) 1px, transparent 1px)',
        'route-line':
          'linear-gradient(90deg, transparent 0, rgba(46, 95, 127, 0.18) 14%, rgba(46, 95, 127, 0.62) 52%, rgba(215, 165, 54, 0.72) 76%, transparent 100%)',
        'paper-fiber':
          'radial-gradient(circle at 18% 12%, rgba(215, 165, 54, 0.08), transparent 28%), radial-gradient(circle at 86% 20%, rgba(46, 95, 127, 0.08), transparent 24%)',
      },
    },
  },
  plugins: [],
};
