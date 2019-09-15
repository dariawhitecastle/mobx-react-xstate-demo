/* eslint-disable react/prop-types */
/**
 *
 * Button.js
 *
 * A common button
 */

import React, { forwardRef } from 'react'
import { Button } from 'grommet'

import { doc } from './Button.doc'
import helpers from '../../utils/helpers'

const createButton = forwardRef((props, ref) => {
  const {
    a11yTitle,
    active,
    alignSelf,
    as,
    color,
    disabled,
    fill,
    focusIndicator,
    gap,
    gridArea,
    hoverIndicator,
    href,
    icon,
    margin,
    onClick,
    plain,
    primary,
    reverse,
    target,
    title,
    type,
    ...rest
  } = props

  return (
    <Button
      a11yTitle={a11yTitle}
      active={active}
      alignSelf={alignSelf}
      as={as}
      color={color}
      disabled={disabled}
      fill={fill}
      focusIndicator={focusIndicator}
      gap={gap}
      gridArea={gridArea}
      hoverIndicator={hoverIndicator}
      href={href}
      icon={icon}
      label={title}
      margin={margin}
      onClick={onClick}
      plain={plain}
      primary={primary}
      ref={ref}
      reverse={reverse}
      target={target}
      type={type}
      {...rest}
    />
  )
})

export default helpers.createWithDoc({
  docFunction: doc,
  component: createButton,
})
