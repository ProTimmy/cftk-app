import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import Colors from '../constants/Colors'

export default class CalendarEvent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      date: this.parseDate(this.props.event.start_time),
      start: 0,
      end: 0,
      name: this.props.event.name,
      place: this.props.event.place
    }
  }

  parseDate (date) {
    var position = date.length - 2
    date = date.substr(0, position) + ':' + date.substr(position)
    var newDate = (new Date(date))
    // For some reason, months are zero indexed...
    var month = newDate.getMonth() + 1
    var day = newDate.getDate()

    var parsedDate = month + '/' + day

    return parsedDate
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.date}>{this.state.date}</Text>
        <View style={styles.eventInfo}>
          <Text style={styles.eventName}>{this.state.name}</Text>
          <Text>{this.state.place}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    margin: 15,
    borderRadius: 10
  },
  date: {
    padding: 30,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: 'red',
    color: 'whitesmoke',
    fontWeight: 'bold',
    flexDirection: 'column',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10
  },
  eventInfo: {
    padding: 20,
    marginLeft: 10,
    flexDirection: 'column'
  },
  eventName: {
    fontWeight: 'bold',
    fontSize: 16
  }
})
