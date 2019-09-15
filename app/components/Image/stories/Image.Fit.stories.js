import React from 'react'
import { storiesOf } from '@storybook/react'
import { grommet } from 'grommet/themes'

import sampleImg from '../../../images/sample_image.jpg'
import { Box } from '../../Box'
import { Container } from '../../Container'
import { Image } from '..'
import README from '../README.md'

storiesOf('Image', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Fit', () => (
    <Container theme={grommet}>
      <Box align="start" gap="medium">
        <Box height="small" width="small" border>
          <Image src={sampleImg} fit="contain" />
        </Box>
        <Box height="small" width="small" border>
          <Image src={sampleImg} fit="cover" />
        </Box>
      </Box>
    </Container>
  ))
