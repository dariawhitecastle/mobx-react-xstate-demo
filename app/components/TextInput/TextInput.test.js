/**
 *
 * Tests for TextInput
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { fireEvent, render } from '@testing-library/react'
// import 'jest-dom/extend-expect'; // add some helpful assertions

import TextInput from './TextInput'

const renderComponent = (props = {}) => render(<TextInput {...props} value="" />)
const setup = () => {
  const utils = render(<TextInput placeholder="text-input" />)
  const input = utils.getByPlaceholderText('text-input')
  return {
    input,
    ...utils,
  }
}

test('it renders and matches snapshot', () => {
  const { container } = renderComponent()
  expect(container).toMatchSnapshot()
})

test('It should update value on input', () => {
  const { input } = setup()
  expect(input.value).toBe('') // empty before
  fireEvent.change(input, { target: { value: 'Good Day' } })
  expect(input.value).toBe('Good Day')
})
