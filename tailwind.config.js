module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      white: "#ffffff",
      grey: "#999999",
      modal: "#00000050",
      primary: "var(--color-bg-primary)",
      "primary-light": "var(--color-bg-primary-light)",
      compliment: "var(--color-bg-compliment)",
      accent: "var(--color-bg-accent)",
      "accent-light": "var(--color-bg-accent-light)",
      secondary: "var(--color-bg-secondary)",
      default: "var(--color-bg-default)",
      inverse: "var(--color-bg-inverse)",
    }),
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
      "9xl": "7rem",
    },
    textColor: {
      white: "#ffffff",
      grey: "#444444",
      black: "#111111",
      blue: "#067bc2",
      primary: "var(--color-text-primary)",
      secondary: "var(--color-text-secondary)",
      link: "var(--color-text-link)",
      default: "var(--color-text-default)",
      "default-soft": "var(--color-text-default-soft)",
      inverse: "var(--color-text-inverse)",
      "inverse-soft": "var(--color-text-inverse-soft)",
    },
    borderColor: {
      primary: "var(--color-bg-primary)",
      accent: "var(--color-bg-accent)",
      link: "var(--color-text-link)",
      secondary: "var(--color-bg-secondary)",
      default: "var(--color-bg-default)",
      inverse: "var(--color-bg-inverse)",
      "light-grey": "#00000015",
    },
    fontFamily: {
      display: "var(--font-display)",
      body: "var(--font-body)",
    },
    fontWeights: {
      normal: "var(--font-weight-normal)",
      display: "var(--font-weight-display)",
      btn: "var(--font-weight-btn)",
    },
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
}
