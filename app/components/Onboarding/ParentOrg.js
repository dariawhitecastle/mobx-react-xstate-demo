/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react'
import { injectIntl, intlShape } from 'react-intl'

// Components
import { Anchor } from '../Anchor'
import { Box } from '../Box'
import { Button } from '../Button'
import { Header } from '../Header'
import { Text } from '../Text'

// Styles
import { StyledLink, StyledToolTip } from './Onboarding.styles'

// Utils and messages
import colors from '../../utils/colors'
import messages from './Onboarding.messages'

const { parentOrgHeader, parentOrgButton, backButtonLabel } = messages

/**
 *
 * ParentOrg
 *
 * Gathers a yes or no response as to whether an organization has a parent
 * organization
 *
 * Displays a header, a tooltip, and "Yes" and "No" response buttons
 *
 * - When the user clicks either "Yes" or "No", it should update the data in
 *   the store and continue to the next question
 */
const ParentOrg = ({ goToNextQuestion, goToPrevQuestion, intl, updateOrganization }) => {
  const buttonRef = useRef(null)
  const [showTooltip, setShowTooltip] = useState(false)

  /**
   * Update stored organization data in MobX and continue to the next question
   *
   * @method
   * @name ParentOrg#handleSubmit
   */
  const handleSubmit = hasParentOrganization => {
    updateOrganization({ hasParentOrganization })
    goToNextQuestion()
  }

  const onNavigateBack = () => {
    goToPrevQuestion()
  }

  return (
    <Box pad={{ horizontal: '10%' }} align="center">
      <Header level={2} margin={{ vertical: '50px' }} textAlign="center">
        {intl.formatMessage(parentOrgHeader)}

        <StyledLink
          border={{ bottom: `1px solid ${colors.primaryText}` }}
          label={intl.formatMessage(parentOrgButton)}
          onBlur={() => setShowTooltip(false)}
          onFocus={() => setShowTooltip(true)}
          onMouseOver={() => setShowTooltip(true)}
          onMouseOut={() => setShowTooltip(false)}
          plain
          ref={buttonRef}
        />
      </Header>
      <Anchor href="/create-account" primary label="Start over" />

      <Box direction="row" justify="between" margin="large" gap="small">
        <Button label={intl.formatMessage(backButtonLabel)} primary onClick={onNavigateBack} />
        <Button
          label="Yes"
          onClick={e => handleSubmit(e.target.value)}
          primary
          type="button"
          value
          style={{ width: 135 }}
        />

        <Button
          label="No"
          onClick={e => handleSubmit(e.target.value)}
          primary
          type="button"
          value={false}
          style={{ width: 135 }}
        />
      </Box>
      {showTooltip && (
        <StyledToolTip
          align={{ bottom: 'top', left: 'right' }}
          overflow="visible"
          elevation="large"
          target={buttonRef.current}
        >
          <Box margin="xsmall">
            <Text>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet</Text>
          </Box>
        </StyledToolTip>
      )}
    </Box>
  )
}
export default injectIntl(ParentOrg)

ParentOrg.propTypes = {
  intl: intlShape.isRequired,
}
