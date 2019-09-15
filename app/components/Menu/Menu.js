/* eslint-disable react/prop-types */

import React from 'react'
import { Menu } from 'grommet'

import { doc } from './Menu.doc'
import helpers from '../../utils/helpers'

/**
 *
 * Menu
 *
 */
function createMenu({ children, ...rest }) {
  return <Menu {...rest}>{children}</Menu>
}

export default helpers.createWithDoc({
  docFunction: doc,
  component: createMenu,
})
