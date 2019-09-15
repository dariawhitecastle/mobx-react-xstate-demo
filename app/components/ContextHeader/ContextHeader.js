/* eslint-disable react/prop-types */
/**
 * ContextHeader
 */

import React, { useContext } from 'react'
import { injectIntl } from 'react-intl'

import { Box } from '../Box'
import { Header } from '../Header'
import { Text } from '../Text'

import { StyledPlainButton } from './ContextHeader.styles'
import messages from './ContextHeader.messages'
import colors from '../../utils/colors'
import { fontSizes } from '../../utils/sizes'

import { UserStoreContext } from '../../stores/UserStore'

const ContextHeader = ({ headerMain, intl, name, status, premiumProp = true }) => {
  /** @todo remove hardcoded premium value here */
  const { premium } = { premium: premiumProp, ...useContext(UserStoreContext) }
  const { currentOperations, changeStatus } = messages
  return (
    <Box direction="row" fill="horizontal" justify="between">
      <Header level="3" color={colors.secondary} margin={{ bottom: 'xsmall' }}>
        {intl.formatMessage(headerMain)}
      </Header>
      <Box>
        <Text size="large" alignSelf="end" color={colors.secondary}>
          {name}
        </Text>
        {premium && (
          <Box direction="row">
            <Text alignSelf="center" color={colors.primaryText} size={fontSizes.small}>
              {intl.formatMessage(currentOperations)}
            </Text>
            <StyledPlainButton plain margin={{ left: '6px' }}>
              <Text color={colors.secondary} size={fontSizes.small}>
                {status.toUpperCase()}
              </Text>
            </StyledPlainButton>
            <StyledPlainButton plain margin={{ left: '16px' }}>
              <Text color={colors.primary} size={fontSizes.xsmall}>
                {intl.formatMessage(changeStatus)}
              </Text>
            </StyledPlainButton>
          </Box>
        )}
      </Box>
    </Box>
  )
}

ContextHeader.propTypes = {}

export default injectIntl(ContextHeader)
