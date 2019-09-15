import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet } from 'grommet'

import { genericProps } from '../../../utils/propTypes'
import theme from '../../../utils/theme'
import { Box } from '../../Box'
import { Text } from '../../Text'
import { Button } from '..'
import README from '../README.md'

const SidebarButton = ({ title, ...rest }) => (
  <Button plain {...rest}>
    {({ hover }) => (
      <Box
        background={hover ? 'accent-1' : undefined}
        pad={{ horizontal: 'large', vertical: 'medium' }}
      >
        <Text size="large">{title}</Text>
      </Box>
    )}
  </Button>
)

SidebarButton.propTypes = {
  title: genericProps.title,
}

const SidebarButtons = () => {
  const [active, setActive] = useState()
  return (
    <Grommet theme={theme}>
      <Box fill direction="row">
        <Box background="neutral-1">
          {['Dashboard', 'Devices', 'Settings'].map(label => (
            <SidebarButton
              key={label}
              title={label}
              active={label === active}
              onClick={() => setActive(label)}
            />
          ))}
        </Box>
      </Box>
    </Grommet>
  )
}

storiesOf('Button', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Sidebar', () => <SidebarButtons />)
