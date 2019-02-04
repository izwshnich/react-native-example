import React from 'react'
import { storiesOf } from '@storybook/react'
import Item from './Item'

storiesOf('Atoms', module).add('Item', () => (
  <Item
    item={{
      id: 1,
      name: 'Barcerona'
    }}
  />
))
