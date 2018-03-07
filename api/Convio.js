/* global fetch */

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
      return {
        status: true,
        id: consID
      }
    } else if (loginResponse.errorResponse) {
      return {
        status: false,
        code: 'Incorrect username or password...'
      }
    } else {
      return {
        status: false,
        code: 'There was a problem connecting to our database...'
      }
    }
  })
}

export function logout () {
  return 'something'
}

export function getDancerInfo (consID) {
  console.log(consID)
  var dancerName = getName(consID)

  var dancerInfoRequest = 'https://secure2.convio.net/' + API_KEY + '/site/CRConsAPI'
  var requestParameters = 'method=login&' +
  'api_key=' + API_KEY + '&' +
  'v=1.0&' +
  'response_format=json&' +
  'user_name=' + username + '&' +
  'password=' + password

  getName(consID).then(function (response) {

  })
}

function getName (consID) {
  var nameRequest = 'https://secure2.convio.net/' + API_KEY + '/site/CRConsAPI'
  var requestParameters = 'method=getUser&' +
    'api_key=' + API_KEY + '&' +
    'v=1.0&' +
    'response_format=json&' +
    'cons_id=' + consID
  var requestMethod = 'POST'

  return sendRequest(nameRequest, requestParameters, requestMethod).then(function (response) {
    return response
  })
}
