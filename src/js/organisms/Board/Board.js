import React from 'react'
import AddNewItem from 'atoms/AddNewItem'
import List from 'molecules/List'

// @flow
type Props = {
  data: Array<{name: string}>
}

const Board = (props: Props) => (
  <React.Fragment>
    <List data={props.data} />
    <AddNewItem title="+ add new place" handlePress={() => {}} />
  </React.Fragment>
)

export default Board
