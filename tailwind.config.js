module.exports = {
  content: ['./src/**/*.{vue,js,ts}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        serika: {
        "primary": "#e2b714",
        "secondary": "#646669",
        "accent": "#2c2e31",
        "neutral": "#646669",
        "base-100": "#323437",
        "info": "#3ABFF8",
        "success": "#36D399",                    
        "warning": "#e2b714",   
        "error": "#ca4754",
        "base-content": "#d1d0c5"
        },
      },
    ],
  },
};
