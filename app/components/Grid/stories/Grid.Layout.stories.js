import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet, grommet } from 'grommet'
import { Box } from '../../Box'
import { Header } from '../../Header'
import { Button } from '../../Button'

import Grid from '../Grid'

storiesOf('Grid', module).add('Layout', () => <Layout />)
const Layout = () => (
  <Grommet full theme={grommet}>
    <Grid
      fill
      rows={['auto', 'flex']}
      columns={['auto', 'flex']}
      areas={[
        { name: 'header', start: [0, 0], end: [1, 0] },
        { name: 'sidebar', start: [0, 1], end: [0, 1] },
        { name: 'main', start: [1, 1], end: [1, 1] },
      ]}
    >
      <Box
        gridArea="header"
        direction="row"
        align="center"
        justify="between"
        pad={{ horizontal: 'medium', vertical: 'small' }}
        background="dark-2"
      />
      <Box
        gridArea="sidebar"
        background="dark-3"
        width="small"
        animation={[
          { type: 'fadeIn', duration: 300 },
          { type: 'slideRight', size: 'xlarge', duration: 150 },
        ]}
      >
        {['First', 'Second', 'Third'].map(name => (
          <Button key={name} href="#" hoverIndicator>
            <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
              <Header level="4">{name}</Header>
            </Box>
          </Button>
        ))}
      </Box>

      <Box gridArea="main" justify="center" align="center">
        <Header level="4">main</Header>
      </Box>
    </Grid>
  </Grommet>
)
