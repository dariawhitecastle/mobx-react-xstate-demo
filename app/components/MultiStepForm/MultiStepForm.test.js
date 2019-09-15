/**
 *
 * Tests for MultiStepForm
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { render } from '@testing-library/react'
import { IntlProvider } from 'react-intl'

import MultiStepForm from './MultiStepForm'
import { ExampleQuestion } from '../ExampleQuestion'
import { DEFAULT_LOCALE } from '../../i18n'

const renderComponent = (props = { questions: [ExampleQuestion, ExampleQuestion] }) =>
  render(
    <IntlProvider locale={DEFAULT_LOCALE}>
      <MultiStepForm {...props} />
    </IntlProvider>,
  )

test('it renders and matches snapshot', () => {
  const { container } = renderComponent()
  expect(container).toMatchSnapshot()
})

test('It does not log to the console', () => {
  const spy = jest.spyOn(global.console, 'log')
  render(
    <IntlProvider locale={DEFAULT_LOCALE}>
      <MultiStepForm questions={[ExampleQuestion, ExampleQuestion]} />
    </IntlProvider>,
  )
  expect(spy).not.toHaveBeenCalled()
})
