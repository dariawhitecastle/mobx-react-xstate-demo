import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

import { Box } from '../Box'
import { Button } from '../Button'
import { Text } from '../Text'

import colors from '../../utils/colors'
import { fontSizes } from '../../utils/sizes'
import helpers from '../../utils/helpers'

import { doc } from './Sidebar.doc'

export const SidebarButton = ({ title, path, ...rest }) => (
  <Button plain {...rest}>
    {({ hover }) => (
      <Link style={{ textDecoration: 'none' }} to={path}>
        <Box
          align="start"
          background={hover || rest.active ? colors.primaryBlue50 : undefined}
          pad={{ horizontal: '15px', vertical: '10px' }}
          border={{ color: colors.primaryBlue50, size: 'xsmall', side: 'bottom' }}
        >
          <Text
            weight={rest.active ? 'bold' : 'normal'}
            size={fontSizes.small}
            color={colors.primaryText}
          >
            {title}
          </Text>
        </Box>
      </Link>
    )}
  </Button>
)

const Sidebar = withRouter(({ routes, location }) => {
  const currentActive = routes.find(route => route.path === location.pathname)
  const [active, setActive] = useState(currentActive.label)
  return (
    <Box background={colors.primaryBlue10} fill>
      {routes.map(({ label, path }) => (
        <SidebarButton
          key={label}
          title={label}
          path={path}
          active={label === active}
          onClick={() => setActive(label)}
        />
      ))}
    </Box>
  )
})

export default helpers.createWithDoc({
  docFunction: doc,
  component: Sidebar,
})

SidebarButton.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

Sidebar.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      exact: PropTypes.bool,
      path: PropTypes.string.isRequired,
      main: PropTypes.func.isRequired,
    }),
  ),
}
