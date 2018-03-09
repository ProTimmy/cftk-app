import React from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native'
import { getEvents } from '../api/Facebook'
import CalendarEvent from '../components/CalendarEvent'

export default class CalendarScreen extends React.Component {
  static navigationOptions = {
    title: 'Events'
  }

  constructor (props) {
    super(props)

    this.state = {
      events: []
    }
  }

  componentWillMount () {
    let that = this
    getEvents().then(function (response) {
      let events = []
      for (var i = 0; i < response.length; i++) {
        let event = response[i]
        events = [event].concat(events)
      }

      that.setState({
        events: events
      })
    })
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        {this.state.events.map(event => <CalendarEvent key={event.name} event={event} />)}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
})
