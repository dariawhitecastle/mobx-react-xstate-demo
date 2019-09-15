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
  .add('Border', () => (
    <Container theme={grommet}>
      <Box pad="small" gap="small" align="start">
        <Box pad="small" border>
          true
        </Box>
        <Box direction="row-responsive" gap="small">
          {['horizontal', 'vertical', 'left', 'top', 'right', 'bottom'].map(border => (
            <Box key={border} pad="small" border={border}>
              {border}
            </Box>
          ))}
        </Box>
        <Box pad="small" border={{ color: 'brand' }}>
          color
        </Box>
        <Box direction="row-responsive" gap="small" align="start">
          {['small', 'medium', 'large'].map(size => (
            <Box key={size} pad="small" border={{ size }}>
              {size}
            </Box>
          ))}
        </Box>
        <Box direction="row-responsive" gap="small" align="start">
          {['solid', 'dashed', 'dotted', 'double', 'groove', 'ridge', 'inset', 'outset'].map(
            type => (
              <Box key={type} pad="small" border={{ size: 'medium', style: type }}>
                {type}
              </Box>
            ),
          )}
        </Box>
      </Box>
    </Container>
  ))
