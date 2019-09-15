import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet } from 'grommet'

import README from '../README.md'
import StatusMessage from '../StatusMessage'
import theme from '../../../utils/theme'

storiesOf('StatusMessage', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Error', () => (
    <Grommet theme={theme}>
      <StatusMessage error>Ooops, there was an error!</StatusMessage>
    </Grommet>
  ))
  .add('Success (default)', () => (
    <Grommet theme={theme}>
      <StatusMessage>Heeyyyyy, we got a take-off!</StatusMessage>
    </Grommet>
  ))
