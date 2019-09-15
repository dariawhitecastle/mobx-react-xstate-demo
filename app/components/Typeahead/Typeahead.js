/* eslint-disable react/prop-types */
import React from 'react'
import { TextInput } from '../TextInput'

/**
 *
 * Typeahead
 *
 */
const Typeahead = ({ value, suggestions = [], ...rest }) => {
  const filteredSuggestions = suggestions.filter(suggestion => {
    const lowerCaseValue = value ? value.toLowerCase() : ''
    return typeof suggestion === 'string'
      ? suggestion.toLowerCase().includes(lowerCaseValue)
      : suggestion.label.toLowerCase().includes(lowerCaseValue)
  })
  return <TextInput autocomplete="off" value={value} suggestions={filteredSuggestions} {...rest} />
}

export default Typeahead
