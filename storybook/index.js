// if you use expo remove this line
import AsyncStorage from '@react-native-async-storage/async-storage'
import { withKnobs } from '@storybook/addon-knobs'
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds'
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native'
import 'react-native-reanimated'
import SplashScreen from 'react-native-splash-screen'

import './rn-addons'
import { loadStories } from './storyLoader'
import { reactNavigationDecorator } from './storyNavigator'

// enables knobs for all stories
addDecorator(withKnobs)
addDecorator(withBackgrounds)
addDecorator(reactNavigationDecorator)

// import stories
configure(() => {
  loadStories()
  setTimeout(() => SplashScreen.hide(), 500)
}, module)
// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: AsyncStorage,
  host: 'localhost',
  port: 7007,
})

export default StorybookUIRoot
