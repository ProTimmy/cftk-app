import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
import Colors from '../constants/Colors'

import { getPersonalPage } from '../api/Convio'

export default class PersonalMessage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      titleBorder: 'black',
      bodyBorder: 'black',
      consID: this.props.screenProps.id,
      token: this.props.screenProps.token,
      title: '',
      body: ''
    }
  }

  componentWillMount () {
    var that = this
    getPersonalPage(this.state.consID, this.state.token).then(function (response) {
      that.setState({
        title: response.getPersonalPageResponse.personalPage.pageTitle,
        body: response.getPersonalPageResponse.personalPage.richText
      })
    })
  }

  render () {
    return (
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}
      >
        <View style={styles.container}>
          <View style={[styles.title, {borderColor: this.state.titleBorder}]}>
            <TextInput
              style={styles.titleText}
              value={this.state.title}
              onChangeText={(title) => this.setState({title})}
              onFocus={() => this.setState({titleBorder: Colors.coral})}
              onBlur={() => this.setState({titleBorder: 'black'})}
              multiline={false}
              underlineColorAndroid={'transparent'}
            />
          </View>
          {/* <View style={[styles.body, {borderColor: this.state.bodyBorder}]}>

          </View> */}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    backgroundColor: 'whitesmoke',
    margin: 20,
    padding: 20,
    borderRadius: 5,
    borderWidth: 1,
    // Android styles only
    elevation: 5
  },
  titleText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  body: {
    flex: 1,
    margin: 20,
    borderWidth: 1,
    // Android styles only
    elevation: 5
  },
  bodyText: {
    fontSize: 16
  }
})
