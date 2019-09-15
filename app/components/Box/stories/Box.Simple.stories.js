import React from 'react'
import { storiesOf } from '@storybook/react'
import { grommet } from 'grommet/themes'
import { Attraction, Car } from 'grommet-icons'

import { Anchor } from '../../Anchor'
import { Button } from '../../Button'
import { Container } from '../../Container'
import { Box } from '..'
import README from '../README.md'

storiesOf('Box', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Simple', () => (
    <Container theme={grommet}>
      <Box
        direction="row-responsive"
        justify="center"
        align="center"
        pad="xlarge"
        background="dark-2"
        gap="medium"
      >
        <Box
          pad="large"
          align="center"
          background={{ color: 'light-2', opacity: 'strong' }}
          round
          gap="small"
        >
          <Attraction size="large" />
          <p>Party</p>
          <Anchor href="" label="Link" />
          <Button label="Button" onClick={() => {}} />
        </Box>
        <Box pad="large" align="center" background="dark-3" round gap="small">
          <Car size="large" color="light-2" />
          <p>Travel</p>
          <Anchor href="" label="Link" />
          <Button label="Button" onClick={() => {}} />
        </Box>
      </Box>
    </Container>
  ))
