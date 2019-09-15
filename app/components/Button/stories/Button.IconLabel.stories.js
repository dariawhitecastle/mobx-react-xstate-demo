import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet } from 'grommet'
import { Add } from 'grommet-icons'

import theme from '../../../utils/theme'
import { Box } from '../../Box'
import { Button } from '..'
import README from '../README.md'

const IconLabel = () => (
  <Grommet theme={theme}>
    <Box align="center" pad="large">
      <Box round="full" overflow="hidden" background="neutral-1">
        <Button icon={<Add />} hoverIndicator onClick={() => {}} />
      </Box>
      <Box align="center" pad="large" gap="small">
        <Button icon={<Add />} title="Add" onClick={() => {}} primary />
        <Button icon={<Add />} title="Add" onClick={() => {}} />
        <Button icon={<Add />} title="Add" gap="xlarge" onClick={() => {}} />
        <Button icon={<Add />} title="500px gap" gap="500px" onClick={() => {}} />
      </Box>
    </Box>
  </Grommet>
)

storiesOf('Button', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Icon Label', () => <IconLabel />)
