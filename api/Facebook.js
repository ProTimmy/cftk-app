// import {  } from 'react-native-fbsdk'
var facebook = require('../facebookAPI.json')

const eventsRequest = 'https://graph.facebook.com/v2.9/carolinaftk/events?access_token=' +
  getClientID() + '|' + getClientSecret() + '&limit=10'

function getClientID () {
  return facebook.client_id
}

function getClientSecret () {
  return facebook.client_secret
}
