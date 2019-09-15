import React from 'react'
import { storiesOf } from '@storybook/react'
import { IntlProvider } from 'react-intl'
import messages from '../ContextHeader.messages'
import README from '../README.md'
import ContextHeader from '../ContextHeader'

storiesOf('ContextHeader', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Premium', () => (
    <IntlProvider locale="en">
      <ContextHeader headerMain={messages.header} name="Touring company" status="Normal" />
    </IntlProvider>
  ))
  .add('Non-premium', () => (
    <IntlProvider locale="en">
      <ContextHeader
        headerMain={messages.header}
        name="Touring company"
        premiumProp={false}
        status="Normal"
      />
    </IntlProvider>
  ))
