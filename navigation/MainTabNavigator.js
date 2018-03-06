import React from 'react'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TabNavigator, TabBarBottom } from 'react-navigation'

import Colors from '../constants/Colors'

import HomeScreen from '../screens/HomeScreen'
import CalendarScreen from '../screens/CalendarScreen'
import SettingsScreen from '../screens/SettingsScreen'

export default TabNavigator(
  {
    Events: {
      screen: CalendarScreen
    },
    Home: {
      screen: HomeScreen
    },
    Settings: {
      screen: SettingsScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        let iconName
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle'
            break
          case 'Events':
            iconName = Platform.OS === 'ios' ? `ios-calendar${focused ? '' : '-outline'}` : 'md-calendar'
            break
          case 'Settings':
            iconName =
              Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        )
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    initialRouteName: 'Home'
  }
)
