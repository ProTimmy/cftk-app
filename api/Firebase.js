import * as firebase from 'firebase'

var init = {
  apiKey: 'AIzaSyBzXsSM1JfNtfQO8Le7ZqNzAaQKEGp6jFM',
  authDomain: 'cftk-app.firebaseapp.com',
  databaseURL: 'https://cftk-app.firebaseio.com',
  projectId: 'cftk-app',
  storageBucket: 'cftk-app.appspot.com',
  messagingSenderId: '823039755315'
}
const fire = firebase.initializeApp(init)

export function getUserPoints (consID) {
  return fire.database().ref('/users/' + consID).once('value', snapshot => {
    if (snapshot.val() === null) {
      return false
    } else {
      var info = snapshot.val()
      var points = info.points
      return points
    }
  })
}

export function createUser (consID, name) {
  fire.database().ref('users/' + consID).set({
    points: 0,
    name: name,
    seen: []
  })
}

export function updatePoints (consID, points) {
  fire.database().ref('users/' + consID).update({
    points: points
  })
}
