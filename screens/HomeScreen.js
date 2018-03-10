import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import Colors from '../constants/Colors'
import TitleText from '../components/TitleText'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  render () {
    const { params } = this.props.navigation.state
    const consID = params.consID
    return (
      <View style={styles.container}>
        <TitleText style={styles.title}>2018 UNC Dance Marathon</TitleText>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  }
})
