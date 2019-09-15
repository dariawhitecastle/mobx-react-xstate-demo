/*
 * Home
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react'
import { FormattedMessage } from 'react-intl'
import messages from './Home.messages'

export default function Home() {
  return (
    <h1>
      <FormattedMessage {...messages.header} />
    </h1>
  )
}
