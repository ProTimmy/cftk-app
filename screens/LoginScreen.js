import React from 'react'
import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform
} from 'react-native'
import { login } from '../api/Convio'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

const IMAGE_HEIGHT = Layout.width / 3
const IMAGE_HEIGHT_SMALL = Layout.width / 5

export default class LoginScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      errorMessage: '',
      // Intial width of logo
      widthAnim: new Animated.Value(Layout.width)
    }

    this.imageHeight = new Animated.Value(IMAGE_HEIGHT)

    this.someFunction = this.someFunction.bind(this)
  }

  componentWillMount () {
    if (Platform.OS === 'ios') {
      this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
      this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
    } else {
      this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
      this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
    }
  }

  componentWillUnmount () {
    this.keyboardWillShowSub.remove()
    this.keyboardWillHideSub.remove()
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL
    }).start()
  }

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT
    }).start()
  }

  keyboardDidShow = (event) => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT_SMALL
    }).start()
  }

  keyboardDidHide = (event) => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT
    }).start()
  }

  someFunction () {
    Keyboard.dismiss()
    if (this.state.username !== '') {
      if (this.state.password !== '') {
        Animated.timing(
          this.state.widthAnim,
          {
            toValue: 100,
            duration: 500
          }
        ).start()

        login(this.state.username, this.state.password).then(response => {
          if (response.status) {
            this.props.navigation.navigate('Main', {
              consID: response.id
            })
          } else {
            this.setState({
              errorMessage: response.code
            })
          }
        })
      }
    }
  }

  render () {
    return (
      <View style={{flexGrow: 1, flexDirection: 'column', justifyContent: 'center'}}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior='padding'
          keyboardVerticalOffset={100}
        >
          <View style={{flex: 2, justifyContent: 'center'}}>
            <Animated.Image
              source={require('../assets/images/carolinaftk_logo.png')}
              style={[styles.logo, {height: this.imageHeight}]}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.error}>{this.state.errorMessage}</Text>
            <TextInput
              value={this.state.username}
              placeholder='Username'
              onChangeText={(username) => this.setState({username})}
              style={styles.formInput}
              autoCorrect={false}
              returnKeyType='next'
              autoCapitalize='none'
              maxLength={30}
              underlineColorAndroid='#fff'
              onSubmitEditing={(event => {
                this.refs.Password.focus()
              })}
            />
            <TextInput
              ref='Password'
              value={this.state.password}
              placeholder='Password'
              secureTextEntry
              onChangeText={(password) => this.setState({password})}
              style={styles.formInput}
              autoCorrect={false}
              returnKeyType='done'
              autoCapitalize='none'
              maxLength={30}
              underlineColorAndroid='#fff'
            />
            <TouchableOpacity style={styles.register} onPress={this.someFunction}>
              <Text style={{color: 'white'}}>Login</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formInput: {
    height: 50,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 5,
    width: Layout.width - 50
  },
  logo: {
    height: IMAGE_HEIGHT,
    resizeMode: 'contain',
    width: Layout.width,
    marginBottom: 20,
    padding: 10,
    marginTop: 20
  },
  register: {
    marginBottom: 20,
    width: Layout.width - 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: Colors.carolinaBlue
  }
})
