import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Reward from './Reward'

const { Navigator, Screen } = createNativeStackNavigator()

export default function BottomTabs3() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Reward" component={Reward} />
      </Navigator>
    </NavigationContainer>
  )
}
