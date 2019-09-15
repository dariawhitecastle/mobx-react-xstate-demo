/**
 *
 * Tests for Box
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { render } from '@testing-library/react'
import 'jest-styled-components'

import Box from './Box'

const children = <h1>Test</h1>
const renderComponent = (props = {}) => render(<Box {...props}>{children}</Box>)

test('it renders and matches snapshot', () => {
  const { container } = renderComponent()
  expect(container).toMatchSnapshot()
})
