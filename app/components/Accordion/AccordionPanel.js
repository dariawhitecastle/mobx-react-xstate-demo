/* eslint-disable react/prop-types */
/**
 *
 * Accordion
 *
 */

import React from 'react'
import { AccordionPanel } from 'grommet'
import { doc } from './AccordionPanel.doc'
import helpers from '../../utils/helpers'

function createAccordionPanel({ label, header, children, ...rest }) {
  return (
    <AccordionPanel label={label} header={header} {...rest}>
      {children}
    </AccordionPanel>
  )
}

export default helpers.createWithDoc({
  docFunction: doc,
  component: createAccordionPanel,
})
