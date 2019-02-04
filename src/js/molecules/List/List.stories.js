import React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import List from './List'

storiesOf('Molecules', module).add('List', () => (
  <List
    data={[
      {
        id: 1,
        name: 'Barcerona',
        type: 'place',
      },
      {
        id: 2,
        name: 'Madrid',
        type: 'place',
      },
      {
        id: 3,
        name: 'Valencia',
        type: 'place',
      },
    ]}
  />
))
