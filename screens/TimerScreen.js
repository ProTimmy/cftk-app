import React from 'react'
import {
  Button,
  Text,
  View
} from 'react-native'

/**
 * Hard code value of date of marathon
 * TODO: MUST BE CHANGED EVERY YEAR
 * Format is YYYY-MM-DD(T)HH:MM:SS-Timezone
 * Don't change the T
 */
const marathonDate = new Date('2018-03-23T19:30:00-04:00')
const currentTime = (new Date()).getTime()

export default class TimerScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      timer: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      enter: false
    }

    this.formatTime = this.formatTime.bind(this)
  }

  componentDidMount () {
    this.setState({
      timer: currentTime
    })

    let that = this
    setInterval(function () {
      let time = that.state.timer
      // Add one second (in milliseconds)
      time += 1000

      that.formatTime(time)
    }, 1000)
  }

  formatTime (time) {
    this.setState({
      timer: time
    })

    // Find the distance between now an the count down date
    var distance = Date.parse(marathonDate) - Date.parse(new Date(time))
    var seconds = Math.floor((distance / 1000) % 60)
    if (seconds < 10) {
      seconds = '0' + seconds
    }

    var minutes = Math.floor((distance / 1000 / 60) % 60)
    if (minutes < 10) {
      minutes = '0' + minutes
    }

    var hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
    if (hours < 10) {
      hours = '0' + hours
    }

    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    if (days < 10) {
      days = '0' + days
    }

    if (distance <= 0) {
      seconds = '00'
      minutes = '00'
      hours = '00'
      days = '00'

      this.setState({
        enter: true
      })
    }

    this.setState({
      seconds: seconds,
      minutes: minutes,
      hours: hours,
      days: days
    })
  }

  render () {
    return (
      <View>
        <Text>The activities section will become available at the start of the marathon!</Text>
        <Text>Time until the marathon:</Text>
        <Text>{this.state.days}:{this.state.hours}:{this.state.minutes}:{this.state.seconds}</Text>
        {this.state.enter
          ? <Button
            title='enter'
          />
          : <Text />
        }
      </View>
    )
  }
}
