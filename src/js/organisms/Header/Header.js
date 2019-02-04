import React from 'react'
import { View } from 'react-native'
import Title from 'atoms/Title'
import styles from './Header.styl'

const Header = () => (
  <View className={styles.header}>
    <Title />
  </View>
)

export default Header
