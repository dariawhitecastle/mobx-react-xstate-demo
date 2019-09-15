import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grid } from 'grommet' /** @todo: replace with custom wrappers */
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
  .add('Round', () => (
    <Container theme={grommet}>
      <Box pad="small" gap="small">
        <Box pad="small" background="brand" round alignSelf="start">
          true
        </Box>
        <Grid columns="small" gap="small">
          {['xsmall', 'small', 'medium', 'large', 'xlarge', 'full'].map(size => (
            <Box key={size} pad="large" background="brand" round={{ size }}>
              {size}
            </Box>
          ))}
        </Grid>
        <Grid columns="small" gap="small">
          {[
            'left',
            'top',
            'right',
            'bottom',
            'top-left',
            'top-right',
            'bottom-left',
            'bottom-right',
          ].map(corner => (
            <Box key={corner} pad="small" background="brand" round={{ corner }}>
              {corner}
            </Box>
          ))}
          <Box background="brand" pad="small" round={{ corner: 'left', size: '15px' }}>
            left rounded corner px value
          </Box>
        </Grid>
      </Box>
    </Container>
  ))
