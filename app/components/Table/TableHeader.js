/* eslint-disable react/prop-types */
/**
 *
 * TableHeader
 *
 */

import React from 'react'
import { TableHeader } from 'grommet'
import { doc } from './TableFooter.doc'
import helpers from '../../utils/helpers'

function createTableHeader({ children, ...props }) {
  return <TableHeader {...props}>{children}</TableHeader>
}

export default helpers.createWithDoc({
  docFunction: doc,
  component: createTableHeader,
})
