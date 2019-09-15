/* eslint-disable react/prop-types */
import React from 'react'

import { doc } from './StatusMessage.doc'
import { Header } from '../Header'
import helpers from '../../utils/helpers'

/**
 *
 * StatusMessage
 *
 * Displays success or error message based on the error prop value
 *
 */
const createStatusMessage = ({ error, children, ...rest }) => (
  <Header level="5" margin="small" color={error ? 'status-error' : 'status-ok'} {...rest}>
    {children}
  </Header>
)

export default helpers.createWithDoc({
  docFunction: doc,
  component: createStatusMessage,
})
