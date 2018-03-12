import React, { Component } from 'react'
import {
  Dimensions,
  LayoutAnimation,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { BarCodeScanner, Permissions } from 'expo'

import { getUserPoints, createUser } from '../api/Firebase'
import { getName } from '../api/Convio'

export default class QRScanner extends Component {
  state = {
    hasCameraPermission: null,
    lastScannedUrl: null,
    name: '',
    points: 0
  }

  componentWillMount () {
    var that = this
    getUserPoints(this.props.consID).then(function (response) {
      if (response === false) {
        getName(this.props.consID).then(function (response) {
          var name = response
          createUser(this.props.consID, name)
        })
      } else {
        var json = JSON.stringify(response)
        json = JSON.parse(json)

        that.setState({
          points: json.points
        })
      }
    })
  }

  componentDidMount () {
    this._requestCameraPermission()
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      hasCameraPermission: status === 'granted'
    })
  }

  readQR = result => {
    if (result.data !== this.state.lastScannedUrl) {
      LayoutAnimation.spring()

      let points = JSON.parse(result.data)
      let newPoints = points.points + this.state.points
      this.setState({
        lastScannedUrl: result.data,
        lastScannedPoints: points.points,
        points: newPoints
      })
    }
  }

  render () {
    return (
      <View style={styles.container}>
        {this.state.hasCameraPermission === null
          ? <Text>Requesting for camera permission</Text>
          : this.state.hasCameraPermission === false
            ? <Text style={{ color: '#fff' }}>
                  Camera permission is not granted
            </Text>
            : <BarCodeScanner
              onBarCodeRead={this.readQR}
              style={{
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').width
              }}
              barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
            />
        }
        {this.renderPoints()}
        {this.renderScore()}
      </View>
    )
  }

  _handlePressCancel = () => {
    this.setState({ lastScannedUrl: null })
  }

  renderScore = () => {
    return (
      <View style={styles.topBar}>
        <Text numberOfLines={1} style={styles.urlText}>
          Points: {this.state.points}
        </Text>
      </View>
    )
  }

  renderPoints = () => {
    if (!this.state.lastScannedUrl) {
      return
    }

    return (
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.url}>
          <Text numberOfLines={1} style={styles.urlText}>
            Congrats, you got {this.state.lastScannedPoints} points!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={this._handlePressCancel}>
          <Text style={styles.cancelButtonText}>
            OK
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
    flexDirection: 'row'
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
    flexDirection: 'row'
  },
  url: {
    flex: 1
  },
  urlText: {
    color: '#fff',
    fontSize: 20
  },
  cancelButton: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cancelButtonText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 18
  }
})
