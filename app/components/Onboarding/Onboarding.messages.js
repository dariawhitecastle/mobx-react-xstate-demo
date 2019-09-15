/*
 * Onboarding Messages
 *
 * This contains all the text for the Onboarding container.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.containers.Onboarding'

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Choose an option that best represents ',
  },
  header2: {
    id: `${scope}.header2`,
    defaultMessage: ' to your organization:',
  },
  headerButtonLabel: {
    id: `${scope}.headerButtonLabel`,
    defaultMessage: 'minimum preparedness',
  },
  buttonLabel: {
    id: `${scope}.buttonLabel`,
    defaultMessage: 'Continue',
  },
  parentOrgHeader: {
    id: `${scope}.parentOrgHeader`,
    defaultMessage: 'Does your organization belong to a ',
  },
  parentOrgButton: {
    id: `${scope}.parentOrgButton`,
    defaultMessage: 'parent organization?',
  },
  detailsHeader: {
    id: `${scope}.detailHeader`,
    defaultMessage: 'Organization details',
  },
  orgNameLabel: {
    id: `${scope}.orgName`,
    defaultMessage: 'Organization name',
  },
  cityLabel: {
    id: `${scope}.city`,
    defaultMessage: 'City',
  },
  countyLabel: {
    id: `${scope}.county`,
    defaultMessage: 'County',
  },
  stateLabel: {
    id: `${scope}.state`,
    defaultMessage: 'State',
  },
  countryLabel: {
    id: `${scope}.country`,
    defaultMessage: 'Country',
  },
  dbaLabel: {
    id: `${scope}.dba`,
    defaultMessage: 'DBA',
  },
  taxStatusLabel: {
    id: `${scope}.tax`,
    defaultMessage: 'Tax Status',
  },
  disciplineLabel: {
    id: `${scope}.discipline`,
    defaultMessage: 'Discipline',
  },
  orgButtonLabel: {
    id: `${scope}.orgButtonLabel`,
    defaultMessage: 'Continue',
  },
  orgTypeHeader: {
    id: `${scope}.orgTypeHeader`,
    defaultMessage: 'Which best describes your organization type?',
  },
  backButtonLabel: {
    id: `${scope}.form`,
    defaultMessage: 'Back',
  },
})
