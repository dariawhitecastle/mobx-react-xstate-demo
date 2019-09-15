/* eslint-disable react/prop-types */
/**
 *
 * Container
 *
 */

import React from 'react'
import { Grommet } from 'grommet'
import { doc } from './Container.doc'
import helpers from '../../utils/helpers'

function createContainer({ cssVars, children, full, plain, theme, userAgent }) {
  return (
    <Grommet cssVars={cssVars} full={full} plain={plain} theme={theme} userAgent={userAgent}>
      {children}
    </Grommet>
  )
}

export default helpers.createWithDoc({
  docFunction: doc,
  component: createContainer,
})
