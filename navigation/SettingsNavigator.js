import React from 'react'
import { StackNavigator } from 'react-navigation'
import SettingsScreen from '../screens/SettingsScreen'

const SettingsNav = StackNavigator(
  {
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Settings'
  }
)

export default class SettingsNavigator extends React.Component {
  render () {
    return (
      <SettingsNav
        screenProps={this.props.navigation.state.params}
      />
    )
  }
}
