/* global fetch */
var facebook = require('../facebookAPI.json')

/** IMPORTANT: People at Facebook are kinda dumb
 *
 * They didn't format their start_time and end_time right, it's missing a ':'
 * right before the end of the string (should go before the last 2 zeroes)
 *
 */

const eventsRequest = 'https://graph.facebook.com/v2.9/carolinaftk/events'

function getClientID () {
  return facebook.client_id
}

function getClientSecret () {
  return facebook.client_secret
}

function sendRequest (request, parameters, requestMethod) {
  return fetch(request, {
    method: requestMethod,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: parameters
  }).then((res) => {
    // De-stringify JSON response
    var response = JSON.parse(res._bodyText)

    // DEV
    // console.log(response)

    return response
  })
}

export function getEvents () {
  var eventsParameter = '?access_token=' +
    getClientID() + '|' + getClientSecret() + '&limit=10'
  return sendRequest(eventsRequest, eventsParameter, 'GET').then(function (response) {
    return response
  })
}
