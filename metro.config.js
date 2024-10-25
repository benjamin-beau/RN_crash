const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')

const {
  withSentryConfig
} = require("@sentry/react-native/metro");

// react-native-svg-transformer
const defaultConfig = getDefaultConfig(__dirname)
const { assetExts, sourceExts } = defaultConfig.resolver

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  // react-native-svg-transformer
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
}

module.exports = withSentryConfig(mergeConfig(defaultConfig, config))