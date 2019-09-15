import React from 'react'
import { IntlProvider } from 'react-intl'
import { Grommet } from 'grommet'
import { storiesOf } from '@storybook/react'
import theme from '../../../utils/theme'
import OrgDetails from '../OrgDetails'
import OrgType from '../OrgType'
import Preparedness from '../Preparedness'
import ParentOrg from '../ParentOrg'

storiesOf('Onboarding', module)
  .add('OrgType', () => (
    <Grommet theme={theme}>
      <IntlProvider locale="En">
        <OrgType />
      </IntlProvider>
    </Grommet>
  ))
  .add('OrgDetails', () => (
    <Grommet theme={theme}>
      <IntlProvider locale="En">
        <OrgDetails />
      </IntlProvider>
    </Grommet>
  ))
  .add('Preparedness', () => (
    <Grommet theme={theme}>
      <IntlProvider locale="En">
        <Preparedness />
      </IntlProvider>
    </Grommet>
  ))
  .add('ParentOrg', () => (
    <Grommet theme={theme}>
      <IntlProvider locale="En">
        <ParentOrg />
      </IntlProvider>
    </Grommet>
  ))
