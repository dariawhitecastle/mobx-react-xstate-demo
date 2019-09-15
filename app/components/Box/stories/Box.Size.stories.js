import React from 'react'
import { storiesOf } from '@storybook/react'
import { grommet } from 'grommet/themes'

import { Container } from '../../Container'
import { Box } from '..'
import README from '../README.md'

storiesOf('Box', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Size', () => (
    <Container theme={grommet}>
      <Box pad="small" gap="small">
        <Box
          width="small"
          height="small"
          round="small"
          align="center"
          justify="center"
          background="brand"
          overflow={{ horizontal: 'hidden', vertical: 'scroll' }}
        >
          {Array(20)
            .fill()
            .map((_, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <p key={i}>{`Small (${i})`}</p>
            ))}
        </Box>
        <Box
          width="medium"
          height="medium"
          round="small"
          align="center"
          justify="center"
          background="brand"
        >
          Medium
        </Box>
        <Box
          width="large"
          height="large"
          round="small"
          align="center"
          justify="center"
          background="brand"
        >
          Large
        </Box>
      </Box>
    </Container>
  ))
