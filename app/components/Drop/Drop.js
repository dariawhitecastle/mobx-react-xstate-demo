/* eslint-disable react/prop-types */
/**
 *
 * Drop
 *
 */

import React, { forwardRef } from 'react'
import { Drop } from 'grommet'
import { doc } from './Drop.doc'
import helpers from '../../utils/helpers'

const createDrop = forwardRef(
  (
    {
      align,
      children,
      elevation,
      onClickOutside,
      onEsc,
      overflow,
      plain,
      responsive,
      restrictFocus,
      stretch,
      target,
      ...rest
    },
    ref,
  ) => (
    <Drop
      align={align}
      elevation={elevation}
      onClickOutside={onClickOutside}
      onEsc={onEsc}
      overflow={overflow}
      plain={plain}
      ref={ref}
      responsive={responsive}
      restrictFocus={restrictFocus}
      stretch={stretch}
      target={target}
      {...rest}
    >
      {children}
    </Drop>
  ),
)

export default helpers.createWithDoc({
  docFunction: doc,
  component: createDrop,
})
