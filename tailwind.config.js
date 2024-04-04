/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#000000",
        "color-primary-light": "#0096ce",
        "color-primary-dark": "#001064",
        "color-secondary": "#00aeef",
        "color-accent": "#017e01",
        "color-gray": "#7f8d96",
        "color-yellow": "#bd9503",
        "color-light-gray": "#dadde2",
        "color-lighter-gray": "#e7e7e7",
        "color-danger": "#f20707",
        "color-background": "#f6faf8",
        "color-white": "#ffffff",
        "color-deep-black": "#1f2020",
        "color-dark-black": "#222222",
        "color-darker-black": "#232323",
        "color-black": "#262a31",
        "color-medium-black": "#2b2c2e",
        "color-light-black": "#2e3234",
        "color-soft-black": "#333333",
        "color-dim-gray": "#403f3f",
        "color-steel-gray": "#575757",
        "color-transparent": "rgba(0,0,0,0)",
        "color-white-transparent-60": "rgba(255,255,255,0.6)",
        "color-white-transparent-63": "rgba(255,255,255,0.63)",
        "color-overlay": "#363636"
      }

    },
    container: {
      center: true
    }
  },

  plugins: [],
}

