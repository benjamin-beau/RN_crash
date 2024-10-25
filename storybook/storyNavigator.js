// storybook/StoryNavigator.tsx
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

const StoryBookStack = createStackNavigator()

export const reactNavigationDecorator = (story) => {
  const Screen = () => story()

  return (
    // eslint-disable-next-line prettier/prettier
    <NavigationContainer independent={true}>
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
    </NavigationContainer>
  )
}
