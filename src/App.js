/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { View } from 'react-native'
import Header from 'organisms/Header'
import Board from 'organisms/Board'
import styles from './App.styl'

const items = [
  {
    name: 'Barcerona',
  },
  {
    name: 'Madrid',
  },
  {
    name: 'Valencia',
  },
]

const App = () => (
  <View className={styles.container}>
    <Header />
    <Board data={items} />
  </View>
)

export default App
