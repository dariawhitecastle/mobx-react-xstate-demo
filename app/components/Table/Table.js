/* eslint-disable react/prop-types */
/**
 *
 * Table
 *
 */

import React from 'react'
import { Table } from 'grommet'
import { doc } from './Table.doc'
import helpers from '../../utils/helpers'

function createTable({ a11lyTitle, alignSelf, caption, children, margin, ...rest }) {
  return (
    <Table
      a11lyTitle={a11lyTitle}
      alignSelf={alignSelf}
      caption={caption}
      margin={margin}
      {...rest}
    >
      {children}
    </Table>
  )
}

export default helpers.createWithDoc({
  docFunction: doc,
  component: createTable,
})
