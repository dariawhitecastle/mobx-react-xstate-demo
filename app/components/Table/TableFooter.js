/* eslint-disable react/prop-types */
/**
 *
 * TableFooter
 *
 */

import React from 'react'
import { TableFooter } from 'grommet'
import { doc } from './TableFooter.doc'
import helpers from '../../utils/helpers'

function createTableFooter({ children, ...props }) {
  return <TableFooter {...props}>{children}</TableFooter>
}

export default helpers.createWithDoc({
  docFunction: doc,
  component: createTableFooter,
})
