import React from 'react'
import {
  View,
  Text
} from 'react-native'
import QRScanner from '../components/QRScanner'

export default class ActivitiesScreen extends React.Component {
  constructor (props) {
    super(props)

    this.finishTimer = this.finishTimer.bind(this)
  }

  finishTimer () {
    window.alert('something')
  }

  render () {
    return (
      <QRScanner />
    )
  }
}
