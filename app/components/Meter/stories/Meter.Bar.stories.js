import React from 'react'
import { storiesOf } from '@storybook/react'

import { Grommet, grommet } from 'grommet'
import { Box } from '../../Box'
import Meter from '../Meter'

storiesOf('Meter', module).add('Bar', () => <BarMeter />)

const BarMeter = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <Meter type="bar" background="light-2" values={[{ value: 30 }]} />
    </Box>
  </Grommet>
)
