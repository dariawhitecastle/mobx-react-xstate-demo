/**
 *
 * Tests for Select
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Select from './Select'

const options = ['one', 'two', 'three']
const renderComponent = (props = {}) =>
  render(<Select label="Select" {...props} options={options} />)

const setup = () => {
  const utils = render(<Select placeholder="select" options={options} />)
  const select = utils.getByPlaceholderText('select')
  return {
    select,
    ...utils,
  }
}

test('it renders and matches snapshot', () => {
  const { container } = renderComponent()
  expect(container).toMatchSnapshot()
})

test('It should update value on select', () => {
  const { select } = setup()
  expect(select.value).toBe('') // empty before
  fireEvent.select(select, { target: { value: 'one' } })
  expect(select.value).toBe('one')
})
