/**
*
* Tests for Menu
*
* @see
https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
*
*/

import React from 'react'
import { render } from '@testing-library/react'
import { IntlProvider } from 'react-intl'
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Menu from './Menu'
import { DEFAULT_LOCALE } from '../../i18n'

const renderComponent = (props = {}) => render(<Menu {...props} />)

test('it renders and matches snapshot', () => {
  const { container } = renderComponent()
  expect(container).toMatchSnapshot()
})

test('It does not log to the console', () => {
  const spy = jest.spyOn(global.console, 'log')
  render(
    <IntlProvider locale={DEFAULT_LOCALE}>
      <Menu />
    </IntlProvider>,
  )
  expect(spy).not.toHaveBeenCalled()
})
