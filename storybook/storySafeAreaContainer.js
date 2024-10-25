import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const StoryBookStack = createStackNavigator()

export const safeAreaProviderDecorator = (story) => {
  const Screen = () => story()

  return (
    // eslint-disable-next-line prettier/prettier
    <SafeAreaProvider>
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
    </SafeAreaProvider>
  )
}
