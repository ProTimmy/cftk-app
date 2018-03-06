import React from 'react'
import {
  Text
} from 'react-native'

export default class TitleText extends React.Component {
  render () {
    // this.props.style will override the styles declared here
    return (
      <Text style={[styles.titleText, this.props.style]}>{this.props.titleText}</Text>
    )
  }
}

const styles = {
  titleText: {
    fontSize: 40,
    fontWeight: 'bold'
  }
}
