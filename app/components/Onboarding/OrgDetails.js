/* eslint-disable react/prop-types */
import React, { useReducer } from 'react'
import { injectIntl, intlShape } from 'react-intl'

// Components
import { Anchor } from '../Anchor'
import { Box } from '../Box'
import { Button } from '../Button'
import { Form, FormField } from '../Form'
import { Grid } from '../Grid'
import { Header } from '../Header'
import { Select } from '../Select'

// Utils and messages
import { STATE_OPTIONS } from '../../utils/constants'
import { FORM_GRID_AREAS, FORM_GRID_COLUMNS, FORM_GRID_ROWS } from './constants'
import messages from './Onboarding.messages'

const {
  backButtonLabel,
  cityLabel,
  countryLabel,
  countyLabel,
  dbaLabel,
  detailsHeader,
  orgButtonLabel,
  orgNameLabel,
  stateLabel,
} = messages

/**
 *
 * OrgDetails
 *
 * Gathers information on the user's organization details
 *
 * Displays a header, a continue button, and form with fields for:
 * - Name (input)
 * - DBA (input)
 * - County (input)
 * - City (input)
 * - State (dropdown)
 * - Country (dropdown)
 *
 * - When the user has not filled in any fields, all inputs are blank and
 * the Continue button is disabled
 * - When the user has input data to a single field, the Continue button is
 * disabled
 * - When all inputs are filled out, the Continue button is enabled
 * - When the user clicks on the disabled Continue button, nothing should happen
 * - When the user clicks on the enabled Continue button, it should update the
 * data in the store and continue to the next question
 *
 */
const OrgDetails = ({
  updateOrganization,
  goToNextQuestion,
  goToPrevQuestion,
  intl,
  organization,
}) => {
  const [updatedOrg, setUpdatedOrg] = useReducer(
    // takes currrent state and new value and returns merged object
    (state, updatedField) => ({ ...state, ...updatedField }),
    // intializes state with empty object or org details saved in store so far
    organization,
  )

  const { city, country, county, dba, name, state } = updatedOrg

  /**
   * Generic handler for updating state when data changes
   * Supports `option`, `suggestion` (strings or objects) and `value`
   *
   * @method
   * @name OrgDetails#handleOnChange
   * @param {Object} e Synthetic Event
   */
  const handleOnChange = e => {
    const {
      target: { name: targetName, value },
      option,
      suggestion,
    } = e
    setUpdatedOrg({ [targetName]: option || suggestion || value })
  }

  /**
   * Update stored organization data in MobX and continue to the next question
   *
   * @method
   * @name OrgDetails#handleSubmit
   */
  const handleSubmit = e => {
    e.preventDefault()
    updateOrganization(updatedOrg)
    goToNextQuestion()
  }
  const onNavigateBack = e => {
    e.preventDefault()
    updateOrganization(updatedOrg)
    goToPrevQuestion()
  }

  const isFormValid = () => {
    if (
      'name' in updatedOrg &&
      'county' in updatedOrg &&
      'city' in updatedOrg &&
      'state' in updatedOrg &&
      'country' in updatedOrg &&
      updatedOrg.name !== '' &&
      updatedOrg.county !== '' &&
      updatedOrg.city !== '' &&
      updatedOrg.state !== '' &&
      updatedOrg.country !== ''
    )
      return true
    return false
  }

  return (
    <Grid columns={FORM_GRID_COLUMNS} rows={FORM_GRID_ROWS} areas={FORM_GRID_AREAS}>
      <Box gridArea="header" pad={{ horizontal: 'small' }} align="center">
        <Header level={2} margin={{ vertical: 'large' }} textAlign="center">
          {intl.formatMessage(detailsHeader)}
        </Header>
        <Anchor href="/create-account" primary label="Start over" />
      </Box>

      <Box gridArea="form" pad={{ horizontal: 'medium' }}>
        <Form onSubmit={handleSubmit} autocomplete="off">
          <FormField
            htmlFor="name"
            id="name"
            label={intl.formatMessage(orgNameLabel)}
            name="name"
            onChange={handleOnChange}
            placeholder={intl.formatMessage(orgNameLabel)}
            type="text"
            value={{ value: name || '' }}
          />

          <FormField
            htmlFor="dba"
            id="dba"
            label={intl.formatMessage(dbaLabel)}
            name="dba"
            onChange={handleOnChange}
            placeholder={intl.formatMessage(dbaLabel)}
            type="text"
            value={{ value: dba || '' }}
          />

          <Box direction="row" gap="small" justify="between">
            <FormField
              htmlFor="city"
              id="city"
              label={intl.formatMessage(cityLabel)}
              name="city"
              onChange={handleOnChange}
              placeholder={intl.formatMessage(cityLabel)}
              type="text"
              value={{ value: city || '' }}
              style={{ width: '100%' }}
            />

            <FormField
              htmlFor="state"
              label={intl.formatMessage(stateLabel)}
              style={{ width: '100%' }}
            >
              <Select
                id="state"
                name="state"
                onChange={handleOnChange}
                options={STATE_OPTIONS}
                placeholder="Select"
                autocomplete="address-level1"
                value={state || ''}
              />
            </FormField>
          </Box>

          <Box direction="row" gap="small" justify="between">
            <FormField
              autocomplete="off"
              htmlFor="county"
              id="county"
              label={intl.formatMessage(countyLabel)}
              name="county"
              onChange={handleOnChange}
              placeholder={intl.formatMessage(countyLabel)}
              type="text"
              value={{ value: county || '' }}
              style={{ width: '100%' }}
            />

            <FormField
              htmlFor="country"
              label={intl.formatMessage(countryLabel)}
              style={{ width: '100%' }}
            >
              <Select
                id="country"
                name="country"
                onChange={handleOnChange}
                options={['United States of America']}
                placeholder="Select"
                value={country || ''}
              />
            </FormField>
          </Box>

          <Box
            align="center"
            gap="medium"
            margin={{ top: 'medium' }}
            direction="row"
            justify="between"
          >
            <Button
              fill="horizontal"
              label={intl.formatMessage(backButtonLabel)}
              primary
              type="submit"
              onClick={onNavigateBack}
            />
            <Button
              disabled={!isFormValid()}
              fill="horizontal"
              label={intl.formatMessage(orgButtonLabel)}
              primary
              type="submit"
            />
          </Box>
        </Form>
      </Box>
    </Grid>
  )
}

export default injectIntl(OrgDetails)

OrgDetails.propTypes = {
  intl: intlShape.isRequired,
}
