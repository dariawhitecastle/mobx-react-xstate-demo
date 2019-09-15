/**
 *
 * Tests for Typeahead
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import Typeahead from './Typeahead'

const renderComponent = (props = {}) => {
  const suggestions = Array(10)
    .fill()
    .map((_, i) => `suggestion ${i + 1}`)
  return render(<Typeahead suggestions={suggestions} {...props} />)
}

const setup = () => {
  const container = renderComponent({ placeholder: 'text-input' })
  const input = container.getByPlaceholderText('text-input')
  return {
    input,
    ...container,
  }
}

test('it renders and matches snapshot', () => {
  const { container } = renderComponent()
  expect(container).toMatchSnapshot()
})

test('it should update value on input', () => {
  const { input } = setup()
  expect(input.value).toBe('') // empty before
  fireEvent.change(input, { target: { value: '5' } })
  expect(input.value).toBe('5')
})
