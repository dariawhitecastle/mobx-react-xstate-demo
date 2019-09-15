/* eslint-disable react/prop-types */
/**
 * Form
 */

import React from 'react'
import { Form } from 'grommet'
import { doc } from './Form.doc'
import helpers from '../../utils/helpers'

const createForm = ({
  errors,
  messages,
  onChange,
  onReset,
  onSubmit,
  value,
  children,
  ...rest
}) => (
  <Form
    errors={errors}
    messages={messages}
    onChange={onChange}
    onReset={onReset}
    onSubmit={onSubmit}
    value={value}
    {...rest}
  >
    {children}
  </Form>
)

export default helpers.createWithDoc({
  docFunction: doc,
  component: createForm,
})
