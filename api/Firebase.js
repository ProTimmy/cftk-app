import firebase from 'react-native-firebase'

var init = {
  apiKey: 'AIzaSyCwCNH9_XIylVTrGLUxXoFs_mZdocFjXzg',
  authDomain: 'cftk-mob-bidding.firebaseapp.com',
  databaseURL: 'https://cftk-mob-bidding.firebaseio.com',
  projectId: 'cftk-mob-bidding',
  storageBucket: 'cftk-mob-bidding.appspot.com',
  messagingSenderId: '106678752149'
}

const fire = firebase.initializeApp(init)
const database = fire.database()

export function getUserPoints () {
  console.log(database)
}
