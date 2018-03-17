import React from 'react'
import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native'

import TitleText from '../components/TitleText'
import ModAccordion from '../components/ModAccordion'

const questions = [
  {
    'title': '​​When and where is the marathon?',
    'body': '\t\tThe 24-hour marathon will be held on March 23rd and 24th, 2018 in Fetzer Gym on UNC’s campus. The event runs from 7:00 PM on Friday, March 23rd to 7:00 PM on Saturday, March 24th. Check-in for dancers begins at 6:00 PM.'
  },
  {
    'title': '​Marathon Timeline',
    'body': '\t\tDancers required to raise $200 before the Marathon, but are encouraged to and often go beyond that. Dancers stand for the entire 24 hours of the Marathon, and help with fundraising events before it.'
  },
  {
    'title': '​What do I need to bring to the marathon?',
    'body': '\t\tWe recommend all dancers bring the following to the 24-hour marathon:\n\n' +
      ' - A change of clothes, and warm clothes!\n' +
      ' - Multiple pairs of socks and shoes\n' +
      ' - Toiletries\n' +
      ' - Deodorant\n' +
      ' - Chapstick\n' +
      ' - Water\n' +
      ' - Any chargers that you may need\n' +
      ' - Snacks\n' +
      ' - Money to buy merchandise\n' +
      ' - Spare change\n' +
      ' - Any medication you need\n' +
      ' - Homework or study materials if you want'
  },
  {
    'title': '​Can my friends visit me during the marathon?',
    'body': 'Yes! We encourage you to invite all of your friends to the marathon. Anyone can visit you at anytime. Additionally, you will have the opportunity to hang out friends in a cause-centered area of the marathon. “Hospital Hallway” is the front hallway of the marathon next to the Performer Gym where you can create crafts for our Kid Co-Captains in a quieter space with your visitors.'
  },
  {
    'title': 'Something',
    'body': 'Something'
  },
  {
    'title': 'Something',
    'body': 'Something'
  }
]

const MapHeader = ({ isOpen }) =>
  <View style={styles.header}>
    <Text>Map</Text>
  </View>

export default class FAQScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <TitleText titleText='FAQ' />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <ModAccordion
            title={questions[0].title}
            body={questions[0].body}
          />
          <ModAccordion
            title={questions[1].title}
            body={questions[1].body}
          />
          <ModAccordion
            title={questions[2].title}
            body={questions[2].body}
          />
          <ModAccordion
            title={questions[3].title}
            body={questions[3].body}
          />
          <ModAccordion
            title={questions[4].title}
            body={questions[4].body}
          />
          <ModAccordion
            title={questions[5].title}
            body={questions[5].body}
          />
          {/* <View style={styles.imageView}>
            <Text style={styles.mapTitle}>Map</Text>
            <Image
              style={{width: 200, height: 200}}
              source={require('../assets/images/fetzer_upper.png')}
            />
            <Image
              style={{width: 200, height: 200}}
              source={require('../assets/images/fetzer_lower.png')}
            />
          </View> */}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollContainer: {
    flexGrow: 1
  },
  mapTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center'
  }
})
