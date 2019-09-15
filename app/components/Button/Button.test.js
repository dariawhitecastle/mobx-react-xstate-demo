/**
 * Testing our Button component
 */

import React from 'react'
import { fireEvent, render, cleanup } from '@testing-library/react'

import Button from './Button'

const handleRoute = () => {}
const href = 'https://cuttlesoft.com'
const children = <h1>Test</h1>
const renderComponent = (props = {}) =>
  render(
    <Button href={href} {...props}>
      {children}
    </Button>,
  )

afterEach(cleanup)

test('it renders a <a> tag if no route is provided', () => {
  const { container } = renderComponent({ href })
  expect(container.querySelector('a')).not.toBeNull()
})

test('it renders a <button> tag to change route if the handleRoute prop is specified', () => {
  const { container } = renderComponent({ handleRoute })
  expect(container.querySelector('button')).toBeDefined()
})

test('it fires of a click event', () => {
  const onClickSpy = jest.fn()
  const { container } = renderComponent({ onClick: onClickSpy })
  fireEvent.click(container.querySelector('a'))
  expect(onClickSpy).toHaveBeenCalled()
})

test('it has children', () => {
  const { container } = renderComponent()
  expect(container.querySelector('a').children).toHaveLength(1)
})

test('it should have a class attribute', () => {
  const { container } = renderComponent()
  expect(container.querySelector('a').hasAttribute('class')).toBe(true)
})

test('it should not adopt a type attribute when rendering a button', () => {
  const type = 'submit'
  const { container } = renderComponent({ handleRoute, type })
  expect(container.querySelector(`button[type="${type}"]`)).toBeNull()
})

test('it renders and matches snapshot', () => {
  const { container } = renderComponent()
  expect(container).toMatchSnapshot()
})
