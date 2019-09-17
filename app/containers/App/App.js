import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch } from 'react-router-dom'

// Route components

import LandingPage from 'containers/LandingPage/LandingPage.loadable'

import { PublicRoute } from 'components/PublicRoute'

import GlobalStyle from '../../global-styles'

/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
export default function App() {
  return (
    <>
      <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="React.js Boilerplate">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>

      <Switch>
        <PublicRoute exact path="/" component={LandingPage} />
      </Switch>
      <GlobalStyle />
    </>
  )
}
