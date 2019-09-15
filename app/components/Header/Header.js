/* eslint-disable react/prop-types */
/**
 *
 * Header
 *
 */

import React from 'react'
import { Heading } from 'grommet'
import { doc } from './Header.doc'
import helpers from '../../utils/helpers'

function createHeader({
  color,
  children,
  level,
  a11yTitle,
  gridArea,
  margin,
  alignSelf,
  responsive,
  size,
  textAlign,
  truncate,
  ...rest
}) {
  return (
    <Heading
      color={color}
      level={level}
      a11yTitle={a11yTitle}
      gridArea={gridArea}
      margin={margin}
      alignSelf={alignSelf}
      responsive={responsive}
      size={size}
      textAlign={textAlign}
      truncate={truncate}
      {...rest}
    >
      {children}
    </Heading>
  )
}

export default helpers.createWithDoc({
  docFunction: doc,
  component: createHeader,
})
