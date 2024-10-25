declare module 'react-native-config' {
  type FeatureFlag = 'true' | 'false'

  interface Env {
    ENV: string
    SENTRY_DSN: string
    UPLOAD_KEY_ALIAS: string
    UPLOAD_KEY_PASSWORD: string
    UPLOAD_STORE_PASSWORD: string
    UPLOAD_STORE_FILE: string
    API_URL: string
    SECOND_API_URL: string
    INTERNAL_AUTHENTICATED_API_URL: string
    LOG_LEVEL?: 'debug' | 'info' | 'warning' | 'error'
    MAPBOX_ACCESS_TOKEN: string
    FEATURE_DEV_TOOLS?: string
    TRACKERS_ADMINISTRATION_LINK: string
    GLASSFY_API_KEY: string
    GLASSFY_DISABLED_SUBSCRIPTIONS: string
  }

  const BuildConfig: Env

  export default BuildConfig
}
