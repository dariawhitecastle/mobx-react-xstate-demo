/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react'
import { injectIntl, intlShape } from 'react-intl'

// Components
import { Anchor } from '../Anchor'
import { Box } from '../Box'
import { Button } from '../Button'
import { Grid } from '../Grid'
import { Header } from '../Header'
import { RadioButton } from '../RadioButton'
import { Text } from '../Text'

// Styles
import { StyledLink, StyledRadioButtonWrapper, StyledToolTip } from './Onboarding.styles'

// Utils and messages
import colors from '../../utils/colors'
import { BUTTON_MAX_WIDTH, FORM_GRID_AREAS, FORM_GRID_COLUMNS, FORM_GRID_ROWS } from './constants'
import messages from './Onboarding.messages'

const { header, header2, headerButtonLabel, buttonLabel, backButtonLabel } = messages

/**
 *
 * Preparedness
 *
 * Gathers information on the user's preparedness response
 *
 * Displays a header, a continue button, and form for:
 * - Organization Preparedness (single-select via radio fields)
 *
 * - When the user has not selected a response, the Continue button is disabled
 * - When the user has selected a response, the Continue button is enabled
 * - When the user clicks on the disabled Continue button, nothing should happen
 * - When the user clicks on the enabled Continue button, it should update the
 * data in the store and continue to the next question
 *
 */
const Preparedness = ({
  goToNextQuestion,
  goToPrevQuestion,
  intl,
  options,
  organization,
  updateOrganization,
}) => {
  const buttonRef = useRef(null)
  const [selected, setSelected] = useState(organization.minPreparedness)
  const [showTooltip, setShowTooltip] = useState(false)

  /**
   * Update stored organization data in MobX and continue to the next question
   *
   * @method
   * @name Preparedness#handleSubmit
   */
  const handleSubmit = () => {
    updateOrganization({ minPreparedness: selected })
    goToNextQuestion()
  }
  const onNavigateBack = () => {
    updateOrganization({ minPreparedness: selected })
    goToPrevQuestion()
  }

  const isFormValid = () => selected !== undefined

  return (
    <Grid columns={FORM_GRID_COLUMNS} rows={FORM_GRID_ROWS} areas={FORM_GRID_AREAS}>
      <Box gridArea="header" pad={{ horizontal: 'small' }} align="center">
        <Header level={2} margin={{ vertical: 'large' }} textAlign="center">
          {intl.formatMessage(header)}

          <StyledLink
            border={{ bottom: `1px solid ${colors.primaryText}` }}
            label={intl.formatMessage(headerButtonLabel)}
            onBlur={() => setShowTooltip(false)}
            onFocus={() => setShowTooltip(true)}
            onMouseOver={() => setShowTooltip(true)}
            onMouseOut={() => setShowTooltip(false)}
            plain
            ref={buttonRef}
          />

          {intl.formatMessage(header2)}
        </Header>
        <Anchor href="/create-account" primary label="Start over" />
      </Box>

      <Box gridArea="form" pad={{ horizontal: 'medium' }} align="center">
        {options.minPreparedness.map(({ preparednessDescription, uid }) => (
          <StyledRadioButtonWrapper key={uid} selected={selected === uid}>
            <RadioButton
              checked={selected === uid}
              label={preparednessDescription}
              name="radio"
              onChange={e => setSelected(e.target.value)}
              value={uid}
            />
          </StyledRadioButtonWrapper>
        ))}
        <Box
          align="center"
          fill="horizontal"
          gap="medium"
          margin="large"
          direction="row"
          justify="between"
          pad={{ horizontal: 'large' }}
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
            label={intl.formatMessage(buttonLabel)}
            onClick={handleSubmit}
            primary
            style={{ maxWidth: BUTTON_MAX_WIDTH }}
            type="button"
          />
        </Box>
      </Box>

      {showTooltip && (
        <StyledToolTip
          overflow="visible"
          elevation="large"
          align={{ bottom: 'top', left: 'right' }}
          target={buttonRef.current}
        >
          <Box margin="xsmall">
            <Text>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet</Text>
          </Box>
        </StyledToolTip>
      )}
    </Grid>
  )
}
export default injectIntl(Preparedness)

Preparedness.propTypes = {
  intl: intlShape.isRequired,
}
