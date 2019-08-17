import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import Splash from './src/screens/home/Home'

export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar translucent={true} hidden />
        <Splash />
      </>
    )
  }
}
