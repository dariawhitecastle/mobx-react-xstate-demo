import React from 'react'
import { storiesOf } from '@storybook/react'

import ExampleQuestion from '../ExampleQuestion'
import README from '../README.md'

storiesOf('ExampleQuestion', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Default', () => <ExampleQuestion goToNextQuestion={() => {}} index={0} />)
