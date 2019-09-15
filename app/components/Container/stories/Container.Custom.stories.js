import React from 'react'
import { storiesOf } from '@storybook/react'
import { Add } from 'grommet-icons'

import { Anchor } from '../../Anchor'
import { Box } from '../../Box'
import { Container } from '..'
import README from '../README.md'

const customTheme = {
  global: {
    colors: {
      custom: '#cc6633',
    },
  },
}

storiesOf('Container', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Custom', () => (
    <Container theme={customTheme}>
      <Box pad="medium">
        <Anchor icon={<Add />} label="Add" color="custom" />
      </Box>
    </Container>
  ))
