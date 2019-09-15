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
  .add('Opacity', () => (
    <Container theme={grommet}>
      <Box gap="small" direction="row">
        <Image src={sampleImg} />
        <Image opacity="strong" src={sampleImg} />
      </Box>
      <Box gap="small" direction="row">
        <Image opacity="medium" src={sampleImg} />
        <Image opacity="weak" src={sampleImg} />
      </Box>
      <Box gap="small" direction="row">
        <Image opacity={false} src={sampleImg} />
        <Image opacity src={sampleImg} />
      </Box>
      <Box gap="small" direction="row">
        <Image opacity="0.6" src={sampleImg} />
      </Box>
    </Container>
  ))
