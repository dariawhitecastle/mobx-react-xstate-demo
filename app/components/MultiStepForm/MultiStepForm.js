/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

import helpers from '../../utils/helpers'
import { doc } from './MultiStepForm.doc'

/**
 * MultiStepForm
 *
 */
const MultiStepForm = props => {
  const [currentIndex, setCurrentIndex] = useState(props.initialIndex || 0)
  const [transitionName, setTransitionName] = useState('slide')
  /**
   * Increment the current index of the form. Causes `renderQuestion` to
   * increment to the next question.
   *
   * Check to see if the question length - 1 is greater than the currentIndex
   * before incrementing. We don't want to accidentally increment the index
   * without having enough questions.
   */
  const goToNextQuestion = () => {
    const { questions } = props
    setTransitionName('slide')

    if (questions.length - 1 > currentIndex) {
      const newIndex = currentIndex + 1
      setCurrentIndex(newIndex)
    } else {
      console.info('Already at the last question, cannot increment index.')
    }
  }

  const goToPrevQuestion = () => {
    if (!currentIndex) {
      console.info('Cannot decrement index, as it will result in negative value')
    }
    const newIndex = currentIndex - 1
    setCurrentIndex(newIndex)
    setTransitionName('slide-back')
  }

  /**
   * Renders the component for the current index. Passes the `goToNextQuestion`
   * function down to be used by the specified question component.
   */
  const renderQuestion = () => {
    const { questions, ...rest } = props
    const Question = questions[currentIndex]

    return (
      <Question
        key={currentIndex}
        goToNextQuestion={goToNextQuestion}
        goToPrevQuestion={goToPrevQuestion}
        index={currentIndex}
        {...rest}
      />
    )
  }

  return (
    <CSSTransitionGroup
      transitionName={transitionName}
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
    >
      {renderQuestion()}
    </CSSTransitionGroup>
  )
}

export default helpers.createWithDoc({
  docFunction: doc,
  component: MultiStepForm,
})
