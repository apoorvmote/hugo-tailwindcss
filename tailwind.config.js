module.exports = {
  purge: {
    content: ["./hugo_stats.json", "./layouts/**/*.html"],
    extractors: [
      {
        extractor: (content) => {

          let els = JSON.parse(content).htmlElements

          return els.tags.concat(els.classes, els.ids)
        }
      }
    ],
    mode: 'all',
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    options: {
      keyframes: true,
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
