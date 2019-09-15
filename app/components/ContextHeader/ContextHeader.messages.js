/*
 * ContextHeader Messages
 *
 * This contains all the text for the ContextHeader component.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.components.ContextHeader'

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ContextHeader component!',
  },
  currentOperations: {
    id: `${scope}.currentOperations`,
    defaultMessage: 'Current Operations:',
  },
  changeStatus: {
    id: `${scope}.changeStatus`,
    defaultMessage: 'Change Status',
  },
})
