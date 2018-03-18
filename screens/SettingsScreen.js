import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import TitleText from '../components/TitleText'

const MenuItem = ({title, onPress}) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Text>{title}</Text>
  </TouchableOpacity>
)

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor (props) {
    super(props)

    this.state = {
      consID: this.props.navigation.state.params.id,
      token: this.props.navigation.state.params.token
    }
  }

  pressed () {
    console.log('somethin')
  }

  render () {
    return (
      <View style={styles.container}>
        <TitleText style={styles.title} titleText='Social Media' />
        <View style={styles.menuContainer}>
          <MenuItem title='Change fundraising goal' onPress={this.pressed} />
          <MenuItem title='Change personal page URL' />
          <MenuItem title='Change personal message' />
          <MenuItem title='Change personal page privacy' />
          <MenuItem title='Logout' />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
