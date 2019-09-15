/**
 *
 * Tests for Container
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import Container from './Container'

const children = <h1>Test</h1>
const renderComponent = (props = {}) => render(<Container {...props}>{children}</Container>)

test('it renders and matches snapshot', () => {
  const { container } = renderComponent()
  expect(container).toMatchSnapshot()
})
