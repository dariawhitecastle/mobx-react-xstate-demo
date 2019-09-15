import { isEqual } from 'lodash'

import { convertIncomingData } from '..'

const DATA = {
  first_name: 'Suki',
  organization: {
    min_preparedness: 'Test string',
    favorite_treats: [
      { treat_name: 'cheese', type: 'cheddar' },
      { treat_name: 'bacon', type: 'BACON' },
    ],
  },
}

const CONVERTED_DATA = {
  firstName: 'Suki',
  organization: {
    minPreparedness: 'Test string',
    favoriteTreats: [
      { treatName: 'cheese', type: 'cheddar' },
      { treatName: 'bacon', type: 'BACON' },
    ],
  },
}

test('it converts all keys from lower_snake_case to camelCase', () => {
  const convertedData = convertIncomingData(DATA)
  expect(isEqual(convertedData, CONVERTED_DATA))
})
