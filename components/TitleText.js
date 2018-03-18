import React from 'react'
import {
  Text
} from 'react-native'
import Colors from '../constants/Colors'

export default class TitleText extends React.Component {
  render () {
    return (
      <Text style={styles.title}>{this.props.titleText}</Text>
    )
  }
}

const styles = {
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    justifyContent: 'center',
    padding: 30,
    paddingTop: 45,
    backgroundColor: Colors.carolinaBlue,
    // Android styles only
    elevation: 5
  }
}
