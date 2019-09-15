import React from 'react'
import { storiesOf } from '@storybook/react'

import MultiStepForm from '../MultiStepForm'
import { ExampleQuestion } from '../../ExampleQuestion'
import README from '../README.md'

storiesOf('MultiStepForm', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Default', () => <MultiStepForm questions={[ExampleQuestion, ExampleQuestion]} />)
