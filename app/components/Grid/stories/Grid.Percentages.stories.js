import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet, grommet } from 'grommet'
import { Box } from '../../Box'

import Grid from '../Grid'

storiesOf('Grid', module).add('Percentages', () => <Percentages />)

const Percentages = () => (
  <Grommet theme={grommet} full>
    <Grid
      fill
      areas={[
        { name: 'nav', start: [0, 0], end: [0, 0] },
        { name: 'main', start: [1, 0], end: [1, 0] },
      ]}
      columns={['small', 'flex']}
      rows={['flex']}
      gap="small"
    >
      <Box gridArea="nav" background="brand" />
      <Box gridArea="main" background="brand" />
    </Grid>
  </Grommet>
)
