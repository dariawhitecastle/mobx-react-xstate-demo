/**
 *
 * Tests for Sidebar
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
// import 'jest-dom/extend-expect'; // add some helpful assertions

import { Button } from '../Button'
import { Text } from '../Text'

import Sidebar from './Sidebar'

const routes = [
  {
    label: 'Hello',
    exact: true,
    path: '/hello',
    main: () => <Text alignSelf="center">Hello!</Text>,
  },
  {
    label: 'Bananas',
    path: '/bananas',
    main: () => <Button label="Click me!" onClick={() => console.info('Bananas!')} />,
  },
]

const renderComponent = (props = {}) =>
  render(
    <MemoryRouter initialEntries={['/bananas']}>
      <Sidebar {...props} routes={routes} />
    </MemoryRouter>,
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
