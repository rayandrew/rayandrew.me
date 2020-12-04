const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const withPreact = require('next-plugin-preact')
const withPWA = require('next-pwa')

module.exports = withPlugins(
  [
    [optimizedImages, {}],
    [withPreact],
    [
      withPWA,
      {
        pwa: {
          dest: 'public',
        },
      },
    ],
  ],
  {},
)
