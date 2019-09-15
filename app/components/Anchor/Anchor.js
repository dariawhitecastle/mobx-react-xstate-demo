/* eslint-disable react/prop-types */
/**
 *
 * Anchor
 *
 */

import React from 'react'
import { Anchor } from 'grommet'
import { doc } from './Anchor.doc'
import helpers from '../../utils/helpers'

function createAnchor({
  a11yTitle,
  children,
  color,
  disabled,
  forwardRef,
  href,
  icon,
  focus,
  label,
  onClick,
  reverse,
  theme,
  size,
  ...rest
}) {
  return (
    <Anchor
      a11yTitle={a11yTitle}
      color={color}
      disabled={disabled}
      forwardRef={forwardRef}
      href={href}
      icon={icon}
      focus={focus}
      label={label}
      onClick={onClick}
      reverse={reverse}
      theme={theme}
      size={size}
      {...rest}
    >
      {children}
    </Anchor>
  )
}

export default helpers.createWithDoc({
  docFunction: doc,
  component: createAnchor,
})
