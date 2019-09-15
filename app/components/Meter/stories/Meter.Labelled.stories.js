import React from 'react'
import { storiesOf } from '@storybook/react'

import { Grommet, grommet, Stack } from 'grommet'
import { Box } from '../../Box'
import { Text } from '../../Text'
import Meter from '../Meter'

storiesOf('Meter', module).add('Labelled', () => <LabelledMeter />)

const LabelledMeter = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <Stack anchor="center">
        <Meter
          type="circle"
          background="light-2"
          values={[{ value: 30 }]}
          size="xsmall"
          thickness="small"
        />
        <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
          <Text size="xlarge" weight="bold">
            30
          </Text>
          <Text size="small">%</Text>
        </Box>
      </Stack>
    </Box>
  </Grommet>
)
