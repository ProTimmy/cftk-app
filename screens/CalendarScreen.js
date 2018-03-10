import React from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native'
import { getEvents } from '../api/Facebook'
import CalendarEvent from '../components/CalendarEvent'
import Colors from '../constants/Colors'

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
      <View style={styles.container}>
        <Text style={styles.title}>Upcoming Events</Text>
        <ScrollView style={styles.eventsContainer}>
          {this.state.events.map(event => <CalendarEvent key={event.name} event={event} />)}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 3,
    borderBottomColor: Colors.charcoal
  },
  eventsContainer: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
})
