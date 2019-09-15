import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet, grommet } from 'grommet'
import { Box } from '../../Box'

import Grid from '../Grid'

storiesOf('Grid', module).add('NColumns', () => <NColumnGrid />)

const NColumnGrid = () => (
  <Grommet theme={grommet} full>
    <Grid
      columns={{
        count: 6,
        size: 'auto',
      }}
      gap="small"
    >
      <Box background="brand">Item 1</Box>
      <Box background="brand">Item 2</Box>
      <Box background="brand">Item 3</Box>
      <Box background="brand">Item 4</Box>
      <Box background="brand">Item 5</Box>
      <Box background="brand">Item 6</Box>
    </Grid>
  </Grommet>
)
