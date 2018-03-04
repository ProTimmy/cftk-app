// import axios from 'axios'

// Declare global variables
const API_KEY = 'uncdm'
const EVENT_ID = '1090' // This should change from year to year, check Blackbaud

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

export function login (username, password) {
  var loginRequest = 'https://secure2.convio.net/' + API_KEY + '/site/CRConsAPI'
  var loginParameters = 'method=login&' +
    'api_key=' + API_KEY + '&' +
    'v=1.0&' +
    'response_format=json&' +
    'user_name=' + username + '&' +
    'password=' + password
  var loginRequestMethod = 'POST'

  return sendRequest(loginRequest, loginParameters, loginRequestMethod).then(function (loginResponse) {
    if (loginResponse.loginResponse) {
      var consID = loginResponse.loginResponse.cons_id
      return consID
    } else if (loginResponse.errorResponse) {
      return 'Error'
    } else {
      return 'Request error'
    }
  })
}

export function logout () {
  return 'something'
}
