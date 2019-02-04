import React from 'react'
import { storiesOf } from '@storybook/react'
import Board from './Board'

storiesOf('Organisms', module).add('Board', () => (
  <Board
    title="Backlog"
    data={[
      {
        id: 1,
        name: 'Barcerona',
      },
      {
        id: 2,
        name: 'Madrid',
      },
      {
        id: 3,
        name: 'Valencia',
      },
    ]}
  />
))
