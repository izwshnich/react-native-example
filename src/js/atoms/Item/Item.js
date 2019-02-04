import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import styles from './Item.styl'

const Item = ({ item }) => (
  <View className={styles.item}>
    <Text>
      <Text className={styles.type}>{item.type}</Text>
      {item.name}
    </Text>
  </View>
)

Item.propTypes = {
  item: PropTypes.object.isRequired,
}

export default Item
