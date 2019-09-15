/* eslint-disable react/prop-types */
/**
 *
 * Select
 *
 */

import React, { useState } from 'react'
import { Select } from 'grommet'
import { doc } from './Select.doc'
import helpers from '../../utils/helpers'

const CreateSelect = ({
  a11yTitle,
  alignSelf,
  children,
  closeOnChange,
  disabled,
  dropAlign,
  dropProps,
  dropHeight,
  dropTarget,
  emptySearchMessage,
  focusIndicator,
  labelKey,
  icon,
  margin,
  messages,
  multiple,
  onChange,
  onClose,
  onMore,
  onOpen,
  onSearch,
  open,
  options,
  placeholder,
  plain,
  replace,
  searchPlaceholder,
  selected,
  size,
  value,
  ...rest
}) => {
  const [filteredOptions, setFilteredOptions] = useState(options)
  return (
    <Select
      a11yTitle={a11yTitle}
      alignSelf={alignSelf}
      closeOnChange={closeOnChange}
      disabled={disabled}
      dropAlign={dropAlign}
      dropProps={dropProps}
      dropHeight={dropHeight}
      dropTarget={dropTarget}
      emptySearchMessage={emptySearchMessage}
      focusIndicator={focusIndicator}
      labelKey={labelKey}
      icon={icon}
      margin={margin}
      messages={messages}
      multiple={multiple}
      onChange={onChange}
      onClose={onClose}
      onOpen={onOpen}
      onSearch={searchText => {
        const regexp = new RegExp(searchText, 'i')
        setFilteredOptions(options.filter(o => o.match(regexp)))
      }}
      open={open}
      options={filteredOptions}
      placeholder={placeholder}
      plain={plain}
      replace={replace}
      searchPlaceholder={searchPlaceholder}
      selected={selected}
      size={size}
      value={value}
      {...rest}
    >
      {children}
    </Select>
  )
}

export default helpers.createWithDoc({
  docFunction: doc,
  component: CreateSelect,
})
