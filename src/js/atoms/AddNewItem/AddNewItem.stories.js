import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import AddNewItem from './AddNewItem'

storiesOf('Atoms', module)
  .add('AddNewItem', () => <AddNewItem title="Backlogにアイテムを追加" handlePress={action('clicked')} />)
  .add('AddNewItem with disabled', () => (
    <AddNewItem title="Backlogにアイテムを追加" handlePress={action('clicked')} disabled />
  ))
