const production = process.env.NODE_ENV === 'production'

const prodPlugins = []

if (production) {
  prodPlugins.push([
    'cssnano',
    {
      preset: ['default', { discardComments: { removeAll: true } }],
    },
  ])
}

module.exports = {
  plugins: [
    'lost',
    'tailwindcss',
    'postcss-nested',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        // autoprefixer: {
        //   flexbox: 'no-2009',
        //   grid: 'autoplace',
        // },
        stage: 1,
        // features: {
        //   'custom-properties': false,
        // },
      },
    ],
    ...prodPlugins,
  ],
}
