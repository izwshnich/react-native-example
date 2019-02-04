import React from 'react'
import { FlatList, View } from 'react-native'
import PropTypes from 'prop-types'
import Item from 'atoms/Item'
import styles from './List.styl'

const List = ({ data }) => (
  <FlatList
    data={data}
    ItemSeparatorComponent={() => <View className={styles.separator} />}
    renderItem={({ item }) => <Item item={item} />}
  />
)

List.propTypes = {
  data: PropTypes.array.isRequired,
}

export default List
