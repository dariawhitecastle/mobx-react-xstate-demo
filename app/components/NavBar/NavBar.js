/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { ResponsiveContext } from 'grommet/es6/contexts'
import { observer } from 'mobx-react'
import { concat, find } from 'lodash'

// Components
import { Box } from '../Box'
import { Grid } from '../Grid'
import { Header } from '../Header'
import { Menu } from '../Menu'

// Stores
import { UserStoreContext } from '../../stores/UserStore'

// Utils and messages
import helpers from '../../utils/helpers'
import { doc } from './NavBar.doc'
import messages from './NavBar.messages'
import { NAV_HEIGHT, FORM_GRID_AREAS, FORM_GRID_COLUMNS, FORM_GRID_ROWS } from './constants'

// Styles
import { StyledLink, StyledText } from './NavBar.styles'

/**
 * Based on our grid area settings from `constants.js`, check if a specific
 * section is currently being displayed
 *
 * @param {str} size Current screen size
 * @param {str} name Grid section to check display status of
 */
const isShown = (size, name) => find(FORM_GRID_AREAS[size], { name })

/**
 * NavBar
 */
const NavBar = observer(
  withRouter(({ history }) => {
    /** @todo remove premium hardcoded value here once available through API */
    const userStore = useContext(UserStoreContext)
    const size = useContext(ResponsiveContext)
    const renderButtons = (key, fontSize = 'medium') => {
      const buttons = messages[key].buttons.map(({ title, to }) => (
        <StyledText
          alignSelf="center"
          fontSize={fontSize}
          margin={{ horizontal: '20px' }}
          key={`${title}`}
        >
          <StyledLink activeStyle={{ textDecoration: 'underline', fontWeight: 'bold' }} to={to}>
            {title}
          </StyledLink>
        </StyledText>
      ))

      /** @todo Find a more elegant solution for this Logout button */
      if (key === 'authenticatedSecondary')
        buttons.push(
          <StyledText
            alignSelf="center"
            fontSize={fontSize}
            margin={{ horizontal: '20px' }}
            key="Logout"
            onClick={() => userStore.setCurrentUser({})}
          >
            <StyledLink to="/">Logout</StyledLink>
          </StyledText>,
        )

      return buttons
    }

    const renderMenuLinks = key => {
      const links = messages[key].buttons.map(({ title, to }) => ({
        label: title,
        onClick: () => history.push(to),
      }))

      /** @todo Find a more elegant solution for this Logout button */
      if (key === 'authenticatedSecondary') {
        links.push({
          label: 'Logout',
          onClick: () => userStore.setCurrentUser({}),
        })
      }

      return links
    }

    /**
     * Check if the user is authenticated, if so, show the authenticated NavBar items.
     * Otherwise show the default items.
     */
    return (
      <Grid
        as={Box}
        areas={FORM_GRID_AREAS}
        columns={FORM_GRID_COLUMNS}
        data-testid="nav-bar"
        elevation="xsmall"
        rows={FORM_GRID_ROWS}
        style={{ height: NAV_HEIGHT }}
      >
        {/* Logo */}
        {isShown(size, 'logo') && (
          <Box gridArea="logo" justify="center" margin={{ horizontal: 'large' }}>
            <Header level={3}>PAR</Header>
          </Box>
        )}

        {/* Authenticated */}
        {userStore.token && (
          <>
            {isShown(size, 'center') && (
              <Box gridArea="center" direction="row">
                {renderButtons('authenticatedPrimary')}
              </Box>
            )}

            {isShown(size, 'right') && (
              <Box
                gridArea="right"
                direction="row"
                style={{ justifySelf: 'end' }}
                margin={{ right: '20px' }}
              >
                {renderButtons('authenticatedSecondary', 'small')}
              </Box>
            )}

            {isShown(size, 'toggle') && (
              <Box gridArea="toggle" justify="center" margin={{ horizontal: 'medium' }}>
                <Menu
                  a11yTitle="Menu"
                  dropAlign={{ top: 'bottom', right: 'right' }}
                  label=""
                  items={concat(
                    renderMenuLinks('authenticatedPrimary'),
                    renderMenuLinks('authenticatedSecondary'),
                  )}
                />
              </Box>
            )}
          </>
        )}

        {/* Unauthenticated */}
        {!userStore.token && (
          <>
            {isShown(size, 'right') && (
              <Box
                direction="row"
                gridArea="right"
                style={{ justifySelf: 'end' }}
                margin={{ right: '20px' }}
              >
                {renderButtons('unauthenticatedSecondary')}
              </Box>
            )}

            {isShown(size, 'toggle') && (
              <Box gridArea="toggle" justify="center" margin={{ horizontal: 'medium' }}>
                <Menu
                  a11yTitle="Menu"
                  dropAlign={{ top: 'bottom', right: 'right' }}
                  label=""
                  items={renderMenuLinks('unauthenticatedSecondary')}
                />
              </Box>
            )}
          </>
        )}
      </Grid>
    )
  }),
)

export default helpers.createWithDoc({
  docFunction: doc,
  component: NavBar,
})
