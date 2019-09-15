import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route } from 'react-router-dom'

// Components
import { NavBar } from 'components/NavBar'

// Route components

import LandingPage from 'containers/LandingPage/LandingPage.loadable'

import NotFound from 'containers/NotFound/NotFound'
import { PublicRoute } from 'components/PublicRoute'

import GlobalStyle from '../../global-styles'

const renderNavBar = () => {
  const isAuthenticated = true

  return <NavBar isAuthenticated={isAuthenticated} />
}

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

      {/* {renderNavBar()} */}

      <Switch>
        <PublicRoute exact path="/" component={LandingPage} />
        <Route path="" component={NotFound} />
      </Switch>
      <GlobalStyle />
    </>
  )
}
