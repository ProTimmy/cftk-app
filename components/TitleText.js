import React from 'react'
import {
  Text
} from 'react-native'
import Colors from '../constants/Colors'

export default class TitleText extends React.Component {
  render () {
    // this.props.style will override the styles declared here
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
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 3,
    borderBottomColor: Colors.charcoal
  }
}
