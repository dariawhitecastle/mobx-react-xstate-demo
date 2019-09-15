/* eslint-disable react/prop-types */
import React, { useReducer } from 'react'
import { injectIntl, intlShape } from 'react-intl'
import { find } from 'lodash'

// Components
import { Box } from '../Box'
import { Button } from '../Button'
import { Form, FormField } from '../Form'
import { Grid } from '../Grid'
import { Header } from '../Header'
import { Typeahead } from '../Typeahead'

// Utils and messages
import { BUTTON_MAX_WIDTH, FORM_GRID_AREAS, FORM_GRID_COLUMNS, FORM_GRID_ROWS } from './constants'
import helpers from '../../utils/helpers'
import messages from './Onboarding.messages'

/**
 *
 * OrgType
 *
 * Gathers information on the user's organization type
 *
 * Displays a header, a continue button, and form with fields for:
 * - Organization Type (typeahead)
 * - Organization Discipline (typeahead)
 *
 * - When the user has not responded to any questions, all fields are blank and
 * the Continue button is disabled
 * - When the user has responded to a single question, the Continue button is
 * disabled
 * - When both fields are filled out, the Continue button is enabled
 * - When the user clicks on the disabled Continue button, nothing should happen
 * - When the user clicks on the enabled Continue button, it should update the
 * data in the store and continue to the next question
 * - When the user inputs value that doesn't match any suggestions, it displays error
 * and sets the value to an emtpy string
 *
 */
const OrgType = ({ goToNextQuestion, intl, options, updateOrganization, organization }) => {
  const [orgTypeInfo, setOrgTypeInfo] = useReducer(
    // takes currrent state and new value and returns merged object
    (state, updatedField) => ({ ...state, ...updatedField }),
    // intializes state with empty object or org details saved in store so far
    {},
    () => {
      const computedOrg = {}
      computedOrg.taxStatus = organization.taxStatus || undefined
      computedOrg.discipline = organization.discipline || undefined
      return computedOrg
    },
  )

  const initializeLabels = () => {
    let returnVal = {}
    if (organization.taxStatus) {
      const found = find(options.taxStatuses, option => option.uid === organization.taxStatus)
      returnVal = { ...returnVal, taxStatusTag: found.name }
    }

    if (organization.discipline) {
      const found = find(options.disciplines, option => option.uid === organization.discipline)
      returnVal = { ...returnVal, disciplineTag: found.discipline }
    }
    return returnVal
  }

  const [labels, setLabels] = useReducer(
    // takes currrent state and new value and returns merged object
    (state, updatedField) => ({ ...state, ...updatedField }),
    // intializes state with empty object for labels
    {},
    initializeLabels,
  )

  const { taxStatus, discipline } = orgTypeInfo
  const { taxStatusTag, disciplineTag } = labels

  /**
   * Generic handler for updating display labels for inputs when data changes
   * Supports `value`
   *
   * @method
   * @name OrgType#handleOnChange
   * @param {Object} e Synthetic Event
   */

  const handleOnChange = e => {
    const {
      target: { name, value },
    } = e
    setOrgTypeInfo({ [name]: '' })
    setLabels({ [`${name}Tag`]: value })
  }

  /**
   * Generic handler for updating orgType values and display labels when data changes
   * Supports `suggestion`
   *
   * @method
   * @name OrgType#handleOnSelect
   * @param {Object} e Synthetic Event
   */

  const handleOnSelect = e => {
    const {
      target: { name },
      suggestion: { value, label },
    } = e
    setOrgTypeInfo({ [name]: value })
    setLabels({ [`${name}Tag`]: label })
  }

  /**
   * Update stored organization data in MobX and continue to the next question
   *
   * @method
   * @name OrgType#handleSubmit
   */
  const handleSubmit = () => {
    updateOrganization({
      ...orgTypeInfo,
    })

    goToNextQuestion()
  }

  const isFormValid = () => {
    if (orgTypeInfo.discipline && orgTypeInfo.taxStatus) return true
    return false
  }

  return (
    <Grid columns={FORM_GRID_COLUMNS} rows={FORM_GRID_ROWS} areas={FORM_GRID_AREAS}>
      <Box gridArea="header" pad={{ horizontal: 'small' }} align="center">
        <Header level={2} margin={{ vertical: 'large' }} textAlign="center">
          {intl.formatMessage(messages.orgTypeHeader)}
        </Header>
      </Box>

      <Box gridArea="form" pad={{ horizontal: 'medium' }}>
        <Form onSubmit={handleSubmit} autocomplete="off">
          <Box justify="stretch" style={{ minWidth: '50%' }}>
            <FormField
              error={taxStatus === '' && 'Required'}
              htmlFor="taxStatus"
              label={intl.formatMessage(messages.taxStatusLabel)}
            >
              <Typeahead
                id="taxStatus"
                name="taxStatus"
                onChange={handleOnChange}
                onSelect={handleOnSelect}
                placeholder="Select"
                suggestions={helpers.formatForSelect(options.taxStatuses)}
                value={taxStatusTag || ''}
              />
            </FormField>
          </Box>

          <Box justify="stretch" style={{ minWidth: '50%' }}>
            <FormField
              error={discipline === '' && 'Required'}
              htmlFor="discipline"
              label={intl.formatMessage(messages.disciplineLabel)}
            >
              <Typeahead
                id="discipline"
                name="discipline"
                onChange={handleOnChange}
                onSelect={handleOnSelect}
                placeholder="Select"
                suggestions={helpers.formatForSelect(options.disciplines, 'discipline')}
                value={disciplineTag || ''}
              />
            </FormField>
          </Box>

          <Box align="center" margin={{ top: 'medium' }}>
            <Button
              disabled={!isFormValid()}
              fill="horizontal"
              label={intl.formatMessage(messages.orgButtonLabel)}
              primary
              style={{ maxWidth: BUTTON_MAX_WIDTH }}
              type="submit"
            />
          </Box>
        </Form>
      </Box>
    </Grid>
  )
}
export default injectIntl(OrgType)

OrgType.propTypes = {
  intl: intlShape.isRequired,
}
