/* eslint-disable react/prop-types */
/**
 * ExampleQuestion
 */

import React, { useContext } from 'react'
import { observer } from 'mobx-react'

// Utils
import { doc } from './ExampleQuestion.doc'
import helpers from '../../utils/helpers'

// Components
import { Button } from '../Button'

// Stores
import { OnboardingStoreContext } from '../../stores/OnboardingStore'

const ExampleQuestion = observer(props => {
  const onboardingStore = useContext(OnboardingStoreContext)
  onboardingStore.currentQuestionIndex = props.index

  /**
   * Update the onboarding form responses in the OnboardingStore.
   */
  const updateOnboardingForm = () => {
    const { goToNextQuestion } = props

    onboardingStore.addResponse({
      exampleKey: 'exampleValue',
    })

    goToNextQuestion()
  }

  return (
    <div>
      <p>{props.index}</p>
      <Button onClick={updateOnboardingForm} />
    </div>
  )
})

export default helpers.createWithDoc({
  docFunction: doc,
  component: ExampleQuestion,
})
