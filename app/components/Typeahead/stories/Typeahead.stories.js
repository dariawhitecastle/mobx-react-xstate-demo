import React, { useState } from 'react'
import { Grommet } from 'grommet'
import { storiesOf } from '@storybook/react'

import theme from '../../../utils/theme'
import { Box } from '../../Box'
import { Typeahead } from '..'
import README from '../README.md'

storiesOf('Typeahead', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Basic', () => <TypeaheadExample />)

const TypeaheadExample = props => {
  const [inputValue, setInputValue] = useState('')
  const suggestions = Array(100)
    .fill()
    .map((_, i) => `suggestion ${i + 1}`)

  return (
    <Grommet theme={theme}>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium">
          <Typeahead
            value={inputValue}
            dropProps={{ height: 'small' }}
            onChange={e => setInputValue(e.target.value)}
            onSelect={e => setInputValue(e.suggestion)}
            suggestions={suggestions}
            {...props}
          />
        </Box>
      </Box>
    </Grommet>
  )
}
