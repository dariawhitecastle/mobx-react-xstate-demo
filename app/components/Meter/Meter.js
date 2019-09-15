/* eslint-disable react/prop-types */
/**
 * Meter
 */

import React from 'react'
import { Meter } from 'grommet'
import { doc } from './Meter.doc'
import helpers from '../../utils/helpers'

function createMeter({
  a11yTitle,
  alignSelf,
  background,
  gridArea,
  margin,
  round,
  size,
  thickness,
  values,
  ...rest
}) {
  return (
    <Meter
      a11yTitle={a11yTitle}
      alignSelf={alignSelf}
      background={background}
      gridArea={gridArea}
      margin={margin}
      round={round}
      size={size}
      thickness={thickness}
      values={values}
      {...rest}
    />
  )
}

export default helpers.createWithDoc({
  docFunction: doc,
  component: createMeter,
})
