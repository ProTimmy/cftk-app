import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
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
        <TitleText titleText={consID} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
