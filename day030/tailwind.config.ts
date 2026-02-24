import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lp: {
          bg: 'var(--lp-color-bg)',
          surface: 'var(--lp-color-surface)',
          'surface-alt': 'var(--lp-color-surface-alt)',
          panel: 'var(--lp-color-panel)',
          text: 'var(--lp-color-text)',
          muted: 'var(--lp-color-muted)',
          border: 'var(--lp-color-border)',
          pink: 'var(--lp-color-pink)',
          'pink-soft': 'var(--lp-color-pink-soft)',
          sage: 'var(--lp-color-sage)',
          'sage-soft': 'var(--lp-color-sage-soft)',
          ivory: 'var(--lp-color-ivory)',
          brown: 'var(--lp-color-brown)',
          white: 'var(--lp-color-white)',
          accent: 'var(--lp-color-accent)',
        },
      },
      fontFamily: {
        sans: ['var(--lp-font-sans)'],
      },
      fontWeight: {
        'lp-regular': '400',
        'lp-medium': '500',
        'lp-bold': '700',
        'lp-black': '800',
      },
      fontSize: {
        'lp-display': [
          'var(--lp-text-display)',
          { lineHeight: 'var(--lp-leading-tight)', letterSpacing: 'var(--lp-tracking-tight)' },
        ],
        'lp-h2': ['var(--lp-text-h2)', { lineHeight: 'var(--lp-leading-tight)' }],
        'lp-h3': ['var(--lp-text-h3)', { lineHeight: 'var(--lp-leading-snug)' }],
        'lp-lead': ['var(--lp-text-lead)', { lineHeight: 'var(--lp-leading-normal)' }],
        'lp-body': ['var(--lp-text-body)', { lineHeight: 'var(--lp-leading-relaxed)' }],
        'lp-small': ['var(--lp-text-small)', { lineHeight: 'var(--lp-leading-normal)' }],
        'lp-caption': ['var(--lp-text-caption)', { lineHeight: 'var(--lp-leading-normal)' }],
        'lp-stat': ['var(--lp-text-stat)', { lineHeight: '1' }],
        'lp-button': ['var(--lp-text-button)', { lineHeight: 'var(--lp-leading-snug)' }],
        'lp-nav': ['var(--lp-text-nav)', { lineHeight: 'var(--lp-leading-snug)' }],
      },
      lineHeight: {
        'lp-tight': 'var(--lp-leading-tight)',
        'lp-snug': 'var(--lp-leading-snug)',
        'lp-normal': 'var(--lp-leading-normal)',
        'lp-relaxed': 'var(--lp-leading-relaxed)',
      },
      spacing: {
        'lp-page-x': 'var(--lp-space-page-x)',
        'lp-header-y': 'var(--lp-space-header-y)',
        'lp-section': 'var(--lp-space-section)',
        'lp-section-tight': 'var(--lp-space-section-tight)',
        'lp-2xs': 'var(--lp-space-2xs)',
        'lp-xs': 'var(--lp-space-xs)',
        'lp-sm': 'var(--lp-space-sm)',
        'lp-md': 'var(--lp-space-md)',
        'lp-lg': 'var(--lp-space-lg)',
        'lp-xl': 'var(--lp-space-xl)',
        'lp-2xl': 'var(--lp-space-2xl)',
        'lp-3xl': 'var(--lp-space-3xl)',
        'lp-card': 'var(--lp-space-card)',
        'lp-btn-x': 'var(--lp-space-btn-x)',
        'lp-btn-y': 'var(--lp-space-btn-y)',
        'lp-logo': 'var(--lp-space-logo)',
        'lp-icon': 'var(--lp-space-icon)',
        'lp-icon-sm': 'var(--lp-space-icon-sm)',
        'lp-step-icon': 'var(--lp-space-step-icon)',
        'lp-dot': 'var(--lp-space-dot)',
      },
      borderRadius: {
        'lp-pill': 'var(--lp-radius-pill)',
        'lp-card': 'var(--lp-radius-card)',
        'lp-panel': 'var(--lp-radius-panel)',
        'lp-soft': 'var(--lp-radius-soft)',
      },
      boxShadow: {
        'lp-card': 'var(--lp-shadow-card)',
        'lp-lift': 'var(--lp-shadow-lift)',
      },
      maxWidth: {
        'lp-content': 'var(--lp-max-content)',
        'lp-wide': 'var(--lp-max-wide)',
      },
      transitionDuration: {
        lp: 'var(--lp-duration)',
      },
      screens: {
        'lp-desktop': '1440px',
      },
    },
  },
  plugins: [],
};

export default config;
