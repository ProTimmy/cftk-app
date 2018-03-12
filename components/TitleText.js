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
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: Colors.carolinaBlue,
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  }
}
