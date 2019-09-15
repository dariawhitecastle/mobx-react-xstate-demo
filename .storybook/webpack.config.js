module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          prettierConfig: {
            semi: false,
            singleQuote: true,
            tabWidth: 2,
            trailingComma: 'all',
            useTabs: false,
            printWidth: 99,
          },
        },
      },
    ],
    enforce: 'pre',
  })

  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto',
  })

  return config
}
