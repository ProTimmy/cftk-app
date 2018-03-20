import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking
} from 'react-native'
import Prompt from 'rn-prompt'
import AwesomeAlert from 'react-native-awesome-alerts'

import TitleText from '../components/TitleText'
import Colors from '../constants/Colors'
import { getDancerInfo, updatePersonalGoal, getPersonalPage } from '../api/Convio'
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
      fundraisingGoal: '0',
      showSuccess: false,
      showFail: false,
      updateGoalVisible: false
    }

    this.hideAlert = this.hideAlert.bind(this)
    this.updatePersonalFundraising = this.updatePersonalFundraising.bind(this)
  }

  componentWillMount () {
    let that = this
    getDancerInfo(this.state.consID, this.state.token).then(function (response) {
      var personal = response.info.getParticipantProgressResponse.personalProgress
      that.setState({
        fundraisingGoal: (that.parseMoney(personal.goal)).toString()
      })
    })
  }

  parseMoney (money) {
    // Adds decimal point
    var decimal = money.length - 2
    var parsedMoney = money.substr(0, decimal) + '.' + money.substr(decimal)

    // Adds commas
    return parsedMoney.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
  }

  hideAlert () {
    this.setState({
      showSuccess: false,
      showFail: false
    })
  }

  updatePersonalFundraising (goal) {
    goal = goal.replace('$', '')
    goal = parseFloat(goal).toFixed(2)
    var parsedGoal = goal
    if (!isNaN(goal)) {
      this.setState({
        updateGoalVisible: false
      }, () => {
        // Parsing for Convio
        goal = (goal * 100).toString()

        let that = this
        updatePersonalGoal(this.state.token, goal).then(function (response) {
          if (response.updateRegistrationResponse !== null) {
            that.setState({
              showSuccess: true,
              fundraisingGoal: parsedGoal
            })
          } else {
            that.setState({
              showFail: true
            })
          }
        })
      })
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <TitleText style={styles.title} titleText='Settings' />
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.button}
            onPress={() => {
              getPersonalPage(this.state.token).then(function (response) {
                Linking.openURL(response)
              })
            }}
          >
            <Text style={styles.buttonText}>View Personal Page</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={() => this.setState({updateGoalVisible: true})}
          >
            <Text style={styles.buttonText}>Change Fundraising Goal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={() => this.props.navigation.navigate('Roster')}
          >
            <Text style={styles.buttonText}>View Team Roster</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={() => Linking.openURL('mailto:technology@carolinaftk.org')}
          >
            <Text style={styles.buttonText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
        <Prompt
          title='Enter your new goal:'
          placeholder={this.state.fundraisingGoal}
          visible={this.state.updateGoalVisible}
          onCancel={() => this.setState({updateGoalVisible: false})}
          onSubmit={(value) => this.updatePersonalFundraising(value)} />
        <AwesomeAlert
          show={this.state.showSuccess}
          showProgress={false}
          title='Success!'
          closeOnTouchOutside
          closeOnHardwareBackPress
          showConfirmButton
          confirmText='OK'
          confirmButtonColor={Colors.carolinaBlue}
          onConfirmPressed={() => {
            this.hideAlert()
          }}
        />
        <AwesomeAlert
          show={this.state.showFail}
          showProgress={false}
          title='Could not update...'
          closeOnTouchOutside
          closeOnHardwareBackPress
          showConfirmButton
          confirmText='OK'
          confirmButtonColor={Colors.carolinaBlue}
          onConfirmPressed={() => {
            this.hideAlert()
          }}
        />
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
    borderRadius: 5,
    // Android only
    elevation: 5
  },
  buttonText: {
    color: 'whitesmoke',
    fontWeight: 'bold',
    fontSize: 16
  }
})
