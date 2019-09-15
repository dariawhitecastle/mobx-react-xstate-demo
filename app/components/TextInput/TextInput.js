/* eslint-disable react/prop-types */
/**
 *
 * TextInput
 *
 */

import React from 'react'
import { TextInput } from 'grommet'
import { doc } from './TextInput.doc'
import helpers from '../../utils/helpers'

function createTextInput({
  dropAlign,
  dropHeight,
  dropProps,
  dropTarget,
  focusIndicator,
  id,
  messages,
  name,
  onChange,
  onSelect,
  placeholder,
  plain,
  size,
  value,
  suggestions,
  ...rest
}) {
  return (
    <TextInput
      dropAlign={dropAlign}
      dropHeight={dropHeight}
      dropProps={dropProps}
      dropTarget={dropTarget}
      focusIndicator={focusIndicator}
      id={id}
      messages={messages}
      name={name}
      onChange={onChange}
      onSelect={onSelect}
      placeholder={placeholder}
      plain={plain}
      size={size}
      value={value}
      suggestions={suggestions}
      {...rest}
    />
  )
}

export default helpers.createWithDoc({
  docFunction: doc,
  component: createTextInput,
})
