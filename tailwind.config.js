module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
    content: [
      './layout/*.liquid',
      './templates/*.liquid',
      './sections/*.liquid',
      './snippets/*.liquid',
    ],
  },
  theme: {
    extend: {
    },
  },
  variants: {
    animation: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
