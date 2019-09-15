/**
 *
 * Tests for ContextHeader
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { render } from '@testing-library/react'
import { IntlProvider } from 'react-intl'
import messages from './ContextHeader.messages'
// import 'jest-dom/extend-expect'; // add some helpful assertions

import ContextHeader from './ContextHeader'
import { DEFAULT_LOCALE } from '../../i18n'

const renderComponent = (props = {}) =>
  render(
    <IntlProvider locale="en">
      <ContextHeader headerMain={messages.header} {...props} />
    </IntlProvider>,
  )

test('it renders and matches snapshot', () => {
  const { container } = renderComponent({ name: 'Touring company', status: 'Normal' })
  expect(container).toMatchSnapshot()
})

test('It does not log to the console', () => {
  const spy = jest.spyOn(global.console, 'log')
  render(
    <IntlProvider locale={DEFAULT_LOCALE}>
      <ContextHeader headerMain={messages.header} name="Touring company" status="Normal" />
    </IntlProvider>,
  )
  expect(spy).not.toHaveBeenCalled()
})
