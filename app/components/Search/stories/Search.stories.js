import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { Box } from '../../Box'
import { Header } from '../../Header'
import Search from '../Search'
import { Text } from '../../Text'

import README from '../README.md'
import helpers from '../../../utils/helpers'
import colors from '../../../utils/colors'

const DATA = [
  {
    id: 1,
    title: 'Lorem ipsum dolor',
    description:
      'Artisan iPhone fixie, palo santo iceland keffiyeh blog yuccie food truck. Single-origin coffee art party selfies cardigan pabst tousled. Shabby chic vinyl adaptogen, snackwave photo booth portland listicle pug kale chips',
    type: 'Read',
    criticalFunction: 'Technology',
    tags: ['lorem', 'ipsum', 'dolor'],
  },
  {
    id: 2,
    title: 'Biodiesel humblebrag hashtag',
    description:
      'Artisan iPhone fixie, palo santo iceland keffiyeh blog yuccie food truck. Single-origin coffee art party selfies cardigan pabst tousled. Shabby chic vinyl adaptogen, snackwave photo booth portland listicle pug kale chips',
    type: 'Write',
    criticalFunction: 'Technology',
    tags: ['man', 'bun', 'seitan'],
  },
  {
    id: 3,
    title: 'Fanny pack polaroid',
    description:
      'Artisan iPhone fixie, palo santo iceland keffiyeh blog yuccie food truck. Single-origin coffee art party selfies cardigan pabst tousled. Shabby chic vinyl adaptogen, snackwave photo booth portland listicle pug kale chips',
    type: 'Other',
    criticalFunction: 'Technology',
    tags: ['Synth', 'butcher', 'thundercats', 'tilde'],
  },
  {
    id: 4,
    title: 'Coat franzen ennui affogato',
    description:
      'Artisan iPhone fixie, palo santo iceland keffiyeh blog yuccie food truck. Single-origin coffee art party selfies cardigan pabst tousled. Shabby chic vinyl adaptogen, snackwave photo booth portland listicle pug kale chips',
    type: 'Suki',
    criticalFunction: 'Technology',
    tags: ['lorem', 'ipsum', 'dolor'],
  },
]

storiesOf('Search', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Simple', () => <SimpleSearch />)

const SimpleSearch = () => {
  const [filteredData, setFilteredData] = useState(DATA)

  const onSearch = searchTerm => {
    const searchResult = helpers.searchArrayOfObjects(DATA, searchTerm)
    setFilteredData(searchResult)
  }
  return (
    <Box>
      <Search onSearch={onSearch} placeholder="Type something..." />
      {filteredData.map(({ title, description, type }) => (
        <Box
          border={{
            side: 'all',
            color: colors.mediumGrey,
          }}
          elevation="large"
          margin={{ horizontal: 'medium', vertical: 'medium' }}
          pad={{ horizontal: 'small', vertical: 'xsmall' }}
          round="xsmall"
        >
          <Header level="4">{title}</Header>
          <Text>{type}</Text>
          <Text>{description}</Text>
        </Box>
      ))}
    </Box>
  )
}
