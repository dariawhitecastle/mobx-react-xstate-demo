import React from 'react'
import { storiesOf } from '@storybook/react'
import { grommet } from 'grommet/themes'
import { Grommet } from 'grommet'

import Text from '../Text'
import { Box } from '../../Box'

storiesOf('Text', module).add('All', () => <All />)

const sizes = ['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall', '77px']
const All = () => (
  <Grommet theme={grommet}>
    {sizes.map(size => (
      <Box key={size} margin="small">
        <Text size={size}>{`Text ${size}`}</Text>
      </Box>
    ))}
  </Grommet>
)
