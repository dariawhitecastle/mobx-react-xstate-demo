/* eslint-disable react/prop-types */
import React from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'

import { Button } from '../Button'
import { Text } from '../Text'

/**
 *
 * TextPartialLink
 *
 * Displays text with a part of it being a link.
 *
 */
const TextPartialLink = ({
  intl,
  text,
  textProps,
  textStyle,
  linkedText,
  linkedTextProps,
  linkedTextStyle,
  onClick,
}) => (
  <div>
    <FormattedMessage {...textProps} style={textStyle} values={{ name: `${text}` }}>
      {message => (
        <div>
          <Text>{message}</Text>
          <Button
            {...linkedTextProps}
            label={intl.formatMessage(linkedText)}
            onClick={onClick}
            style={linkedTextStyle}
          />
        </div>
      )}
    </FormattedMessage>
  </div>
)

TextPartialLink.propTypes = {}

export default injectIntl(TextPartialLink)
