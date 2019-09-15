/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'

// Components
import { Search } from 'grommet-icons'
import { Box } from '../Box'
import { TextInput } from '../TextInput'

// Styles
import colors from '../../utils/colors'

// utils
import { doc } from './Search.doc'
import helpers from '../../utils/helpers'

/**
 *
 * Search
 *
 * Displays a search box with icon and placeholder text
 *
 * - When user types in the search box, it triggers the onSearch prop with the search term
 *
 */
const CreateSearch = ({
  onSearch,
  placeholder,
  margin = { horizontal: 'xlarge', vertical: 'large' },
}) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = e => {
    setSearchTerm(e.target.value.trim())
  }
  useEffect(() => onSearch(searchTerm), [searchTerm])

  return (
    <Box
      alignSelf="center"
      align="center"
      border={{
        side: 'all',
        color: colors.mediumGrey,
      }}
      direction="row"
      margin={margin}
      pad={{ horizontal: 'small', vertical: 'xsmall' }}
      round="xsmall"
      width="large"
    >
      <Search color={colors.primaryBlue10} />
      <TextInput onChange={handleSearch} type="search" placeholder={placeholder} plain />
    </Box>
  )
}

export default helpers.createWithDoc({
  docFunction: doc,
  component: CreateSearch,
})
