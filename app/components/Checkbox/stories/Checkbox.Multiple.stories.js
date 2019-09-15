import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { grommet } from 'grommet/themes'

import { Box } from '../../Box'
import { Container } from '../../Container'
import { Checkbox } from '..'
import README from '../README.md'

storiesOf('Checkbox', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Multi', () => <MultipleCheckboxes />)

const MultipleCheckboxes = props => {
  const [checkedItems, setCheckedItems] = useState([])

  const handleChange = (event, item) =>
    event.target.checked
      ? setCheckedItems([...checkedItems, item])
      : setCheckedItems(checkedItems.filter(checkedItem => checkedItem.name !== item.name))

  const checked = item => !!checkedItems.find(checkedItem => checkedItem.name === item.name)

  const items = [
    {
      name: 'Apples',
      key: 'checkBox1',
      label: 'Apples',
    },
    {
      name: 'Bananas',
      key: 'checkBox2',
      label: 'Bananas',
    },
  ]

  return (
    <Container theme={grommet}>
      <Box alignContent="center" pad="large">
        {items.map(item => (
          <Checkbox
            {...props}
            key={item.name}
            label={item.label}
            checked={checked(item)}
            onChange={e => handleChange(e, item)}
          />
        ))}
      </Box>
    </Container>
  )
}
