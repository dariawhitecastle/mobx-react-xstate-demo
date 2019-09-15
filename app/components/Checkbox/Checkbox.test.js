/**
 *
 * Tests for Checkbox
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { render } from '@testing-library/react'
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Checkbox from './Checkbox'

const renderComponent = props => render(<Checkbox label="Choice" {...props} />)

test('it renders and matches snapshot', () => {
  const props = {
    checked: true,
    disabled: false,
    id: 'checkbox-1',
    label: 'New Label',
    name: 'Some name',
    onChange: () => {},
    reverse: true,
    toggle: true,
  }
  const { container } = renderComponent(props)
  expect(container).toMatchSnapshot()
})
