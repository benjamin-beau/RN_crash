module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  overrides: [
    {
      plugins: [
        [
          '@babel/plugin-transform-private-methods',
          {
            loose: true,
          },
        ],
      ],
    },
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@internals/api': './src/api',
          '@internals/assets': './src/assets',
          '@internals/components': './src/components',
          '@internals/constants': './src/constants',
          '@internals/helpers': './src/helpers',
          '@internals/hooks': './src/hooks',
          '@internals/i18n': './src/i18n',
          '@internals/mocks': './src/mocks',
          '@internals/navigators': './src/navigators',
          '@internals/models': './src/models',
          '@internals/screens': './src/screens',
          '@internals/store': './src/store',
          '@internals/styles': './src/styles',
          '@internals/theme': './src/theme',
          '@internals/types': './src/types',
          '@internals/storybook': './storybook',
          '@internals/errors': './src/errors',
          '@internals/contexts': './src/contexts',
          '@internals/services': './src/services',
          '@internals/view_model': './src/view_model',
          '@internals/dto': './src/dto',
        },
      },
    ],
    '@babel/plugin-transform-export-namespace-from',
    'react-native-reanimated/plugin',
  ],
}
