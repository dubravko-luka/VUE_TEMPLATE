/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navigator: '#4a4a4a',
        sidebar: '#4a4a4a',
        main: '#4a4a4a',
        footer: '#1f2937 '
      },
      padding: {
        navigator: '10px',
        breadcrumb: '54px',
        main: '10px'
      },
      height: {
        navigator: '68px',
        footer: '50px',
        breadcrumb: '62px',
        'minus-navigator': 'calc(100vh - 68px)',
        'minus-footer': 'calc(100% - 50px)'
      },
      spacing: {
        'navigator-half': '34px'
      },
      minWidth: {
        sidebar: '224px'
      },
      backgroundColor: ['active', 'hover'],
      textColor: ['active', 'hover']
    },
    screens: {
      992: '992px'
    }
  },
  plugins: []
};
