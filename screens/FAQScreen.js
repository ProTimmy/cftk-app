import React from 'react'
import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native'

import Colors from '../constants/Colors'
import TitleText from '../components/TitleText'

export default class FAQScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <TitleText style={styles.title} titleText='FAQ' />
        <ScrollView style={styles.scrollContainer}>
          <Text>Something</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  scrollContainer: {

  }
})
