import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet } from 'grommet'
import { Add } from 'grommet-icons'

import theme from '../../../utils/theme'
import { Box } from '../../Box'
import { Text } from '../../Text'
import { Button } from '..'
import README from '../README.md'

const PlainButton = props => (
  <Grommet theme={theme}>
    <Box align="center" pad="large">
      <Button hoverIndicator="light-1" onClick={() => {}} {...props}>
        <Box pad="small" direction="row" align="center" gap="small">
          <Add />
          <Text>Add</Text>
        </Box>
      </Button>
    </Box>
  </Grommet>
)

storiesOf('Button', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Active', () => <PlainButton active />)
  .add('Plain', () => <PlainButton />)
