import React from 'react'
import { Text, View } from 'react-native'
import styles from './Title.styl'

const Title = () => {
  const classes = []
  classes.push(styles.title)

  return (
    <View className={classes.join(' ')}>
      <Text>hope to be there</Text>
    </View>
  )
}

export default Title
