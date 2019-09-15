/*
 * LandingPage Messages
 *
 * This contains all the text for the LandingPage container.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.containers.LandingPage'

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the LandingPage container!',
  },
  loading: {
    id: `${scope}.loading`,
    defaultMessage: 'Loading LandingPage container!',
  },
})
