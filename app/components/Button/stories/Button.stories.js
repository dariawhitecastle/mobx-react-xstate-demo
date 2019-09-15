import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Grommet } from 'grommet'

import theme from '../../../utils/theme'
import { Box } from '../../Box'
import { Button } from '..'
import README from '../README.md'

const BasicButtons = props => (
  <Grommet theme={theme}>
    <Box align="center" pad="medium">
      <Button title="Default" onClick={action('clicked')} {...props} />
    </Box>
    <Box align="center" pad="medium">
      <Button title="Anchor" href="#" />
    </Box>
    <Box align="center" pad="medium">
      <Button disabled title="Disabled" onClick={action('clicked')} {...props} />
    </Box>
    <Box align="center" pad="medium">
      <Button primary title="Primary" onClick={action('clicked')} {...props} />
    </Box>
  </Grommet>
)

storiesOf('Button', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Basic', () => <BasicButtons />)
