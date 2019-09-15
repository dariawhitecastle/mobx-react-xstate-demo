/**
*
* Tests for Search
*
* @see
https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
*
*/

import React from 'react'
import { render } from '@testing-library/react'
import { IntlProvider } from 'react-intl'
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Search from './Search'
import { DEFAULT_LOCALE } from '../../i18n'

const renderComponent = (props = {}) => {
  const onSearch = searchTerm => console.info(searchTerm)
  return render(
    <IntlProvider locale={DEFAULT_LOCALE}>
      <Search onSearch={onSearch} placeholder="Type something..." {...props} />
    </IntlProvider>,
  )
}

test('it renders and matches snapshot', () => {
  const { container } = renderComponent()
  expect(container).toMatchSnapshot()
})

test('It does not log to the console', () => {
  const spy = jest.spyOn(global.console, 'log')
  renderComponent()
  expect(spy).not.toHaveBeenCalled()
})
