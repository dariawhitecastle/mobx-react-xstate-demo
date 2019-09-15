/**
*
* Tests for LandingPage
*
* @see
https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
*
*/

import React from 'react'
import { render } from '@testing-library/react'
import { IntlProvider } from 'react-intl'
import { MemoryRouter } from 'react-router-dom'

import { LandingPage } from '..'
import { DEFAULT_LOCALE } from '../../../i18n'

const renderComponent = (props = {}) =>
  render(
    <IntlProvider locale={DEFAULT_LOCALE}>
      <MemoryRouter initialEntries={['/']}>
        <LandingPage {...props} />
      </MemoryRouter>
    </IntlProvider>,
  )

test('it renders and matches snapshot', () => {
  const { container } = renderComponent()
  expect(container).toMatchSnapshot()
})

test('It does not log to the console', () => {
  const spy = jest.spyOn(global.console, 'log')
  renderComponent()
  expect(spy).not.toHaveBeenCalled()
})
