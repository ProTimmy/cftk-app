import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking
} from 'react-native'
import Prompt from 'rn-prompt'

import TitleText from '../components/TitleText'
import Colors from '../constants/Colors'
import {} from '../api/Convio'
import Layout from '../constants/Layout'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor (props) {
    super(props)

    this.state = {
      // this.props.navigation.state.params
      consID: this.props.screenProps.id,
      token: this.props.screenProps.token,
      updateGoalVisible: false
    }

    this.showUpdateGoal = this.showUpdateGoal.bind(this)
  }

  showUpdateGoal () {
    this.setState({
      updateGoalVisible: true
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <TitleText style={styles.title} titleText='Settings' />
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.button}
            onPress={() => this.setState({updateGoalVisible: true})}
          >
            <Text style={styles.buttonText}>Change Fundraising Goal</Text>
          </TouchableOpacity>
          <Prompt
            title='Say something'
            placeholder='Start typing'
            defaultValue='Hello'
            visible={this.state.updateGoalVisible}
            onCancel={() => this.setState({updateGoalVisible: false})}
            onSubmit={(value) => this.setState({
              updateGoalVisible: false,
              text: `You said "${value}"`
            })} />
          <TouchableOpacity style={styles.button}
            onPress={() => this.setState({updateGoalVisible: true})}
          >
            <Text style={styles.buttonText}>Change Personal Message</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={() => this.setState({updateGoalVisible: true})}
          >
            <Text style={styles.buttonText}>View Team Roster</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={() => Linking.openURL('mailto:technology@carolinaftk.org')}
          >
            <Text style={styles.buttonText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  menuContainer: {
    flex: 1,
    marginTop: 50,
    marginBottom: 50,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    padding: 20,
    width: Layout.width - 75,
    alignItems: 'center',
    backgroundColor: Colors.coral,
    borderRadius: 5
  },
  buttonText: {
    color: 'whitesmoke',
    fontWeight: 'bold',
    fontSize: 16
  }
})
