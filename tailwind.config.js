/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundColor: {
        "theme-blue-500": "#1D5A84",
        "theme-blue-400": "#2A7BA5",
        "theme-blue-300": "#3495C8",
        "theme-blue-200": "#BFE2F3",
        "theme-blue-100": "#E0F1F9",
        "theme-gray-100": "#EFF8FB",
        "theme-gray-200": "#EAEAEA",
        "theme-gray-300": "#F1F1F1",
        "theme-yellow": "#F8BE14"
      },
      textColor: {
        "theme-blue-500": "#1D5A84",
        "theme-blue-400": "#2A7BA5",
        "theme-blue-300": "#3495C8",
        "theme-blue-200": "#BFE2F3",
        "theme-blue-100": "#E0F1F9",
        "theme-gray-100": "#EFF8FB",
        "theme-gray-200": "#EAEAEA",
        "theme-yellow": "#F8BE14"
      },
      borderColor: {
        "theme-gray-400": "#989898",
      }
    },
  },
  plugins: [],
}

