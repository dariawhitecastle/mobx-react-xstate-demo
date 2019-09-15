/* eslint-disable react/prop-types */
/**
 * Form
 */

import React from 'react'
import { StyledFormField } from './FormField.styles'
import { doc } from './Form.doc'
import helpers from '../../utils/helpers'

const createFormField = props => {
  const {
    component,
    error,
    help,
    htmlFor,
    label,
    name,
    pad,
    required,
    validate,
    children,
    value,
    ...rest
  } = props
  return (
    <StyledFormField
      component={component}
      error={error}
      help={help}
      htmlFor={htmlFor}
      label={label}
      name={name}
      pad={pad}
      required={required}
      validate={validate}
      {...value}
      {...rest}
    >
      {children}
    </StyledFormField>
  )
}

export default helpers.createWithDoc({
  docFunction: doc,
  component: createFormField,
})
