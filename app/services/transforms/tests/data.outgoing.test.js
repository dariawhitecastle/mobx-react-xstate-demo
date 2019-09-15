import { isEqual } from 'lodash'

import { convertOutgoingData } from '..'

const DATA = {
  firstName: 'Suki',
  organization: {
    minPreparedness: 'Test string',
    favoriteTreats: [
      { treatName: 'cheese', type: 'cheddar' },
      { treatName: 'bacon', type: 'BACON' },
    ],
  },
}

const CONVERTED_DATA = {
  first_name: 'Suki',
  organization: {
    min_preparedness: 'Test string',
    favorite_treats: [
      { treat_name: 'cheese', type: 'cheddar' },
      { treat_name: 'bacon', type: 'BACON' },
    ],
  },
}

test('it converts all keys from camelCase to lower_snake_case', () => {
  const convertedData = convertOutgoingData(DATA)
  expect(isEqual(convertedData, CONVERTED_DATA))
})
