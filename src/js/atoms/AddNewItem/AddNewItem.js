import React from 'react'
import { Button } from 'react-native'
import PropTypes from 'prop-types'
import styles from './AddNewItem.styl'

const AddNewItem = ({ title, handlePress = () => {}, disabled = false }) => {
  const classes = []
  classes.push(styles.btn, disabled ? styles.disabled : '')

  return <Button className={classes.join(' ')} onPress={handlePress} title={title} disabled={disabled} />
}

AddNewItem.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  handlePress: PropTypes.func,
}

export default AddNewItem
