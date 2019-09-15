/*
 * NavBar Messages
 *
 * This contains all the text for the NavBar component.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.components.NavBar'

export default defineMessages({
  authenticatedPrimary: {
    id: `${scope}.authenticatedPrimary`,
    defaultMessage: 'Authenticated Primary',
    buttons: [
      { title: 'Dashboard', to: '/dashboard' },
      { title: 'Assess', to: '/assess' },
      { title: `To-Do's`, to: '/todos' },
      { title: 'Critical Data', to: '/critical-data' },
      { title: `Guides & Resources`, to: '/guides-and-resources' },
      { title: 'Community', to: '/community' },
    ],
  },
  authenticatedPrimaryNonPremium: {
    id: `${scope}.authenticatedPrimaryNonPremium`,
    defaultMessage: 'Authenticated NonPremium Primary',
    buttons: [
      { title: 'Dashboard', to: '/dashboard' },
      { title: 'Assess', to: '/assess' },
      { title: `Guides & Resources`, to: '/guides-and-resources' },
      { title: 'Community', to: '/community' },
      { title: 'Upgrade', to: '/upgrade' },
    ],
  },
  authenticatedSecondary: {
    id: `${scope}.authenticatedSecondary`,
    defaultMessage: 'Authenticated Secondary',
    buttons: [
      { title: 'Profile', to: '/my-profile' },
      { title: 'Account', to: '/my-account' },
      { title: 'Help', to: '/help' },
    ],
  },
  unauthenticatedSecondary: {
    id: `${scope}.unauthenticatedSecondary`,
    defaultMessage: 'Unauthenticated Secondary',
    buttons: [
      { title: 'Help', to: '/help' },
      { title: 'Login', to: '/login' },
      { title: 'Create Account', to: '/create-account' },
    ],
  },
})
