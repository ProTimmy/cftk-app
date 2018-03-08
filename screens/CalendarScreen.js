import React from 'react'
import {
  Text,
  ScrollView,
  StyleSheet
} from 'react-native'
import getEvents from '../api/Facebook'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Events'
  }

  componentDidMount () {
    console.log(getEvents())
  }

  render () {
    const facebookDate = new Date('2018-03-23T19:00:00-04:00')
    const date = new Date()

    let string
    if (facebookDate.getTime() > date.getTime()) {
      string = 'True'
    } else {
      string = 'False'
    }

    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <Text>{facebookDate.getTime()}</Text>
        <Text>{date.getTime()}</Text>
        <Text>{string}</Text>
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
