/* eslint-disable react/prop-types */
/**
 *
 * TableCell
 *
 */

import React from 'react'
import { TableCell } from 'grommet'
import { doc } from './TableCell.doc'
import helpers from '../../utils/helpers'

function createTableCell({ children, plain, scope, size, verticalAlign, ...props }) {
  return (
    <TableCell plain={plain} scope={scope} size={size} verticalAlign={verticalAlign} {...props}>
      {children}
    </TableCell>
  )
}

export default helpers.createWithDoc({
  docFunction: doc,
  component: createTableCell,
})
