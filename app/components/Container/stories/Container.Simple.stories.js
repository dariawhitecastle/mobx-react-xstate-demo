import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { Box } from '../../Box'
import { Container } from '..'
import README from '../README.md'

storiesOf('Container', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Simple', () => (
    <Fragment>
      <Container plain>
        <Box pad="medium">
          <p>Plain Container</p>
        </Box>
      </Container>
      <Container>
        <Box pad="medium">
          <p>Not plain Container</p>
        </Box>
      </Container>
    </Fragment>
  ))
