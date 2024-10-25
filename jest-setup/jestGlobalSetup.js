// This will be run before all tests
import { NativeModules as RNNativeModules } from 'react-native'

RNNativeModules.UIManager = RNNativeModules.UIManager || {}
RNNativeModules.UIManager.RCTView = RNNativeModules.UIManager.RCTView || {}
RNNativeModules.RNGestureHandlerModule = RNNativeModules.RNGestureHandlerModule || {
  State: { BEGAN: 'BEGAN', FAILED: 'FAILED', ACTIVE: 'ACTIVE', END: 'END' },
  attachGestureHandler: jest.fn(),
  createGestureHandler: jest.fn(),
  dropGestureHandler: jest.fn(),
  updateGestureHandler: jest.fn(),
}
RNNativeModules.PlatformConstants = RNNativeModules.PlatformConstants || {
  forceTouchAvailable: false,
}

jest.doMock('react-native-branch', () => {
  return {
    AddToCartEvent: 'Add To Cart',
    // etc.

    subscribe: (cb) => {
      cb({ params: {}, error: null })
    },
    // and for createBranchUniversalObject, etc.
  }
})

jest.doMock('invariant', () => {
  return () => {}
})

jest.doMock('react-native-device-info', () => {
  return {
    getIPAddress: () => {},
    getVersion: () => {},
    getBuildNumber: () => {},
    getDeviceId: () => {},
    getSystemName: () => {},
    getSystemVersion: () => '',
    getModel: () => {},
    getManufacturer: () => {},
    getFreeDiskStorage: () => {},
  }
})

jest.doMock('@react-native-async-storage/async-storage', () => {
  return {
    getItem: async () => '',
    setItem: async () => {},
  }
})

jest.doMock('react-native-localize', () => {
  return {
    findBestAvailableLanguage: () => '',
  }
})

jest.doMock('react-native-reanimated', () => {
  const View = require('react-native').View
  return {
    Value: jest.fn(),
    event: jest.fn(),
    add: jest.fn(),
    eq: jest.fn(),
    set: jest.fn(),
    cond: jest.fn(),
    interpolate: jest.fn(),
    sub: jest.fn(),
    multiply: jest.fn(),
    sqrt: jest.fn(),
    max: jest.fn(),
    diff: jest.fn(),
    onChange: jest.fn(),
    View: View,
    Extrapolate: { CLAMP: jest.fn() },
    Clock: jest.fn(),
    greaterThan: jest.fn(),
    lessThan: jest.fn(),
    startClock: jest.fn(),
    stopClock: jest.fn(),
    clockRunning: jest.fn(),
    not: jest.fn(),
    or: jest.fn(),
    and: jest.fn(),
    spring: jest.fn(),
    decay: jest.fn(),
    defined: jest.fn(),
    call: jest.fn(),
    block: jest.fn(),
    abs: jest.fn(),
    greaterOrEq: jest.fn(),
    lessOrEq: jest.fn(),
    debug: jest.fn(),
    Transition: {
      Together: 'Together',
      Out: 'Out',
      In: 'In',
    },
  }
})

jest.doMock('react-native-image-crop-picker', () => {
  return {
    openPicker: jest.fn().mockImplementation(() => Promise.resolve()),
    openCamera: jest.fn().mockImplementation(() => Promise.resolve()),
  }
})

jest.doMock('@react-native-community/netinfo', () => {
  return {
    addEventListener: jest.fn(),
  }
})
