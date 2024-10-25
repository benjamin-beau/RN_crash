import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const StoryBookStack = createStackNavigator()

const client = new QueryClient()
export const storeQueryClientProviderDecorator = (story) => {
  const Screen = () => story()

  return (
    // eslint-disable-next-line prettier/prettier
    <QueryClientProvider client={client}>
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
    </QueryClientProvider>
  )
}
