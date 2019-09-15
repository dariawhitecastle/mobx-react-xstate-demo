/* eslint-disable react/prop-types */
/**
 * RadioButton
 */

import React from 'react'
import { RadioButton } from 'grommet'

import { doc } from './RadioButton.doc'
import helpers from '../../utils/helpers'

const createRadioButton = ({ checked, disabled, id, label, name, onChange, ...rest }) => (
  <RadioButton
    checked={checked}
    disabled={disabled}
    id={id}
    label={label}
    name={name}
    onChange={onChange}
    {...rest}
  />
)

export default helpers.createWithDoc({
  docFunction: doc,
  component: createRadioButton,
})
