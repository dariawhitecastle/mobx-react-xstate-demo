/* eslint-disable react/prop-types */
/**
 *
 * Image
 *
 */

import React from 'react'
import { Image } from 'grommet'
import { doc } from './Image.doc'
import helpers from '../../utils/helpers'

function createImage({ a11yTitle, alignSelf, fallback, fit, gridArea, margin, opacity, src }) {
  return (
    <Image
      a11yTitle={a11yTitle}
      alignSelf={alignSelf}
      fallback={fallback}
      fit={fit}
      gridArea={gridArea}
      margin={margin}
      opacity={opacity}
      src={src}
    />
  )
}

export default helpers.createWithDoc({
  docFunction: doc,
  component: createImage,
})
