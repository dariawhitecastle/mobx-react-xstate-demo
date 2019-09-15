import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet } from 'grommet'
import { MemoryRouter, Route } from 'react-router-dom'

import theme from '../../../utils/theme'
import { Box } from '../../Box'
import { Button } from '../../Button'
import { Text } from '../../Text'

import Sidebar from '../Sidebar'

const routes = [
  {
    label: 'Hello',
    exact: true,
    path: '/hello',
    main: () => <Text alignSelf="center">Hello!</Text>,
  },
  {
    label: 'Bananas',
    path: '/bananas',
    main: () => <Button label="Click me!" onClick={() => console.info('Bananas!')} />,
  },
]

storiesOf('Sidebar', module).add('Default', () => (
  <Grommet theme={theme}>
    <MemoryRouter initialEntries={['/hello']}>
      <Sidebar routes={routes} />
      <Box gridArea="main" pad={{ vertical: '50px', horizontal: '20%' }}>
        {routes.map(({ label, path, exact, main }) => (
          <Route key={label} path={path} exact={exact} component={main} />
        ))}
      </Box>
    </MemoryRouter>
  </Grommet>
))
