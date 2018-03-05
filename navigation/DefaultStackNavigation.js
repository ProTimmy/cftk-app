import { StackNavigator } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'

export default StackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    Main: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'screen'
  }
)
