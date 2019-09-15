/* eslint-disable react/prop-types */
/**
 *
 * Checkbox
 *
 */

import React from 'react'
import { CheckBox } from 'grommet'
import { doc } from './Checkbox.doc'
import helpers from '../../utils/helpers'

function createCheckbox({
  checked,
  disabled,
  id,
  label,
  name,
  onChange,
  reverse,
  toggle,
  ...rest
}) {
  return (
    <CheckBox
      checked={checked}
      disabled={disabled}
      id={id}
      label={label}
      name={name}
      onChange={onChange}
      reverse={reverse}
      toggle={toggle}
      {...rest}
    />
  )
}

export default helpers.createWithDoc({
  docFunction: doc,
  component: createCheckbox,
})
