// This is a bit of a long page, bear with it...

import React from 'react'
import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native'

import TitleText from '../components/TitleText'
import Accordion from '@ercpereda/react-native-accordion'
import ModAccordion from '../components/ModAccordion'

const questions = [
  {
    'title': '​Marathon Timeline',
    'body': '\tDancers required to raise $200 before the Marathon, but are encouraged to and often go beyond that. Dancers stand for the entire 24 hours of the Marathon, and help with fundraising events before it.'
  },
  {
    'title': '​​When and where is the marathon?',
    'body': '\tThe 24-hour marathon will be held on March 23rd and 24th, 2018 in Fetzer Gym on UNC’s campus. The event runs from 7:00 PM on Friday, March 23rd to 7:00 PM on Saturday, March 24th. Check-in for dancers begins at 6:00 PM.'
  },
  {
    'title': '​What is required of me if I sign up to dance?',
    'body': '\tDancers are required to raise $200 before the Marathon, but are encouraged to and often go beyond that. Dancers stand for the entire 24 hours of the Marathon, and help with fundraising events before it.'
  },
  {
    'title': '​​Do I really have to dance for 24 hours?',
    'body': "\tYou don't actually have to dance for 24 hours! There are two gyms at the event. One is for performances and dancing, and the other is for alternative activities, such as basketball, video games, and other fun activities! There is also a quiet homework space if you need to study during the Marathon.  Click here for more information about what you can expect at the 24 hour UNC Dance Marathon event."
  },
  {
    'title': 'What all is there to do at the marathon?',
    'body': '\tThere are so many things to do! You can watch performances from some of UNC and Chapel Hill’s best groups in the Performer Gym, play games in the Activity Gym, check out a book from the Library, study or chill out in the Study Room, and so much more! You will never be at a loss for things to do at the marathon.'
  },
  {
    'title': '​Okay, so really, why should I be a dancer?',
    'body': "\tFor the Kids! You've probably heard this phrase around campus, but if you experience the Marathon, you will understand the true meaning of FTK. Everything that we do throughout the year is a fundraising or awareness effort for our cause, to help the patients and families served by UNC Children's, and culminates at the Marathon in April. Signing up to dance makes a tangible and emotional impact in the lives of those we benefit."
  },
  {
    'title': '​How do I raise my money?',
    'body': '\tHowever you want! We have found that reaching out to friends and family via social media and/or email is very effective. You can also hold events where the proceeds go to your dancer total! In addition, your team captain is a great resource for you in terms of fundraising ideas. You should also feel free to reach out to anyone from the Executive Board about fundraising ideas. Find their contact information here: http://www.carolinaftk.org/contact.'
  },
  {
    'title': '​​How do I sign up?',
    'body': '\tVisit carolinaftk.org/dance! You will be asked for your UNC email address and some basic information when you set up your fundraising page. Be sure to sign up by 8 p.m. Friday, Oct. 7. After you sign up, you will be sorted into dancer teams and contacted by your team captain to start fundraising. You can request to be part of a team during the registration either by team number or morale captain.'
  },
  {
    'title': '​What do I need to bring to the marathon?',
    'body': '\tWe recommend all dancers bring the following to the 24-hour marathon:\n\n' +
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
    'body': '\tYes! We encourage you to invite all of your friends to the marathon. Anyone can visit you at anytime. Additionally, you will have the opportunity to hang out friends in a cause-centered area of the marathon. “Hospital Hallway” is the front hallway of the marathon next to the Performer Gym where you can create crafts for our Kid Co-Captains in a quieter space with your visitors.'
  },
  {
    'title': '​Can I win prizes at the marathon?',
    'body': '\tYes! We are still working on determining exactly what these will be, but stay tuned for some awesome incentives!'
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollContainer: {
    flexGrow: 1
  },
  mapHeader: {
    paddingTop: 15,
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 15,
    borderTopWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: '#f9f9f9'
  },
  mapHeaderText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  mapBody: {
    display: 'flex',
    backgroundColor: '#f9f9f9',
    flexDirection: 'column',
    alignItems: 'center'
  },
  map: {
    height: 200,
    margin: 20
  }
})

const MapHeader = ({ isOpen }) =>
  <View style={styles.mapHeader}>
    <Text style={styles.mapHeaderText}>Map</Text>
  </View>

const MapContent = (
  <View style={styles.mapBody}>
    <Image
      style={styles.map}
      resizeMode='contain'
      source={require('../assets/images/fetzer_upper.png')}
    />
    <Image
      style={styles.map}
      resizeMode='contain'
      source={require('../assets/images/fetzer_lower.png')}
    />
  </View>
)

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
          <Accordion
            header={MapHeader}
            content={MapContent}
            duration={300}
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
          <ModAccordion
            title={questions[6].title}
            body={questions[6].body}
          />
          <ModAccordion
            title={questions[7].title}
            body={questions[7].body}
          />
          <ModAccordion
            title={questions[8].title}
            body={questions[8].body}
          />
          <ModAccordion
            title={questions[9].title}
            body={questions[9].body}
          />
          <ModAccordion
            title={questions[10].title}
            body={questions[10].body}
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
