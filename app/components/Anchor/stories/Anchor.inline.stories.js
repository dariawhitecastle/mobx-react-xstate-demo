import React from 'react'
import { storiesOf } from '@storybook/react'
import { grommet } from 'grommet/themes'

import { Box } from '../../Box'
import { Container } from '../../Container'
import { Anchor } from '..'
import README from '../README.md'

storiesOf('Anchor', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Inline', () => (
    <Container theme={grommet}>
      <Box align="center" pad="large">
        <p>
          This is <Anchor label="an inline link" href="#" /> with surrounding text.
        </p>
      </Box>
    </Container>
  ))
