import React from 'react'
import {
  View,
  Text
} from 'react-native'

/**
 * Hard code value of date of marathon
 * TODO: MUST BE CHANGED EVERY YEAR
 */
const marathonDate = new Date('2018-03-23T19:00:00-04:00')

let string = ''

// Update the count down every 1 second
var x = setInterval(function () {
  // Get todays date and time
  var now = new Date().getTime()

  // Find the distance between now an the count down date
  var distance = marathonDate - now

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24))
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((distance % (1000 * 60)) / 1000)

  // Display the result in the element with id="demo"
  string = days + 'd ' + hours + 'h ' +
    minutes + 'm ' + seconds + 's '

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x)
    // document.getElementById('demo').innerHTML = 'EXPIRED'
  }
}, 1000)

export default class ActivitiesScreen extends React.Component {
  render () {
    return (
      <View>
        <Text>{string}</Text>
      </View>
    )
  }
}
