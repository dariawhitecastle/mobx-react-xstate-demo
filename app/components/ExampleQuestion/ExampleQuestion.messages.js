/*
 * ExampleQuestion Messages
 *
 * This contains all the text for the ExampleQuestion component.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.components.ExampleQuestion'

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ExampleQuestion component!',
  },
})
