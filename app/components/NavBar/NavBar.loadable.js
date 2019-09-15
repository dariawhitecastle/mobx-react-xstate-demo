/**
 * Asynchronously loads the component for NavBar
 */

import React from 'react'
import loadable from 'utils/loadable'
import LoadingIndicator from 'components/LoadingIndicator'

export default loadable(() => import('./NavBar'), {
  fallback: <LoadingIndicator />,
})
