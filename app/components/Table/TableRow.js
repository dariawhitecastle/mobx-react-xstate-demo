/* eslint-disable react/prop-types */
/**
 *
 * TableRow
 *
 */

import React from 'react'
import { TableRow } from 'grommet'
import { doc } from './TableRow.doc'
import helpers from '../../utils/helpers'

function createTableRow({ children, ...props }) {
  return <TableRow {...props}>{children}</TableRow>
}

export default helpers.createWithDoc({
  docFunction: doc,
  component: createTableRow,
})
