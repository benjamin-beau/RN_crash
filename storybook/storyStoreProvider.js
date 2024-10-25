import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Provider } from 'react-redux'

import store from '../src/store'

const StoryBookStack = createStackNavigator()

export const storeProviderDecorator = (story) => {
  const Screen = () => story()

  return (
    // eslint-disable-next-line prettier/prettier
    <Provider store={store}>
      <StoryBookStack.Navigator
        screenOptions={{
          cardStyle: { padding: 40 },
        }}
      >
        <StoryBookStack.Screen
          name="MyStorybookScreen"
          component={Screen}
          options={{ header: () => null }}
        />
      </StoryBookStack.Navigator>
    </Provider>
  )
}
