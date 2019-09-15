/* eslint-disable react/prop-types */
/**
 *
 * Accordion
 *
 */

import React from 'react'
import { Accordion } from 'grommet'
import { doc } from './Accordion.doc'
import helpers from '../../utils/helpers'

function createAccordion({
  a11yTitle,
  activeIndex,
  alignSelf,
  animate,
  children,
  gridArea,
  margin,
  messages,
  multiple,
  onActive,
  ...rest
}) {
  return (
    <Accordion
      a11yTitle={a11yTitle}
      activeIndex={activeIndex}
      alignSelf={alignSelf}
      animate={animate}
      gridArea={gridArea}
      margin={margin}
      messages={messages}
      multiple={multiple}
      onActive={onActive}
      {...rest}
    >
      {children}
    </Accordion>
  )
}

export default helpers.createWithDoc({
  docFunction: doc,
  component: createAccordion,
})
