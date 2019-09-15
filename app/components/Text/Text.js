/* eslint-disable react/prop-types */

import React from 'react'
import { Text } from 'grommet'

import { doc } from './Text.doc'
import helpers from '../../utils/helpers'

/**
 *
 * Text
 *
 */
function createText({
  alignSelf,
  a11yTitle,
  as,
  gridArea,
  margin,
  children,
  color,
  level,
  responsive,
  size,
  textAlign,
  tag,
  truncate,
  weight,
  wordBreak,
  ...rest
}) {
  return (
    <Text
      alignSelf={alignSelf}
      a11yTitle={a11yTitle}
      as={as}
      gridArea={gridArea}
      margin={margin}
      color={color}
      level={level}
      responsive={responsive}
      size={size}
      textAlign={textAlign}
      tag={tag}
      truncate={truncate}
      weight={weight}
      wordBreak={wordBreak}
      {...rest}
    >
      {children}
    </Text>
  )
}

export default helpers.createWithDoc({
  docFunction: doc,
  component: createText,
})
