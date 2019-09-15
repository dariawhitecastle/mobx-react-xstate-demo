import { isEqual } from 'lodash'

import { convertOutgoingData } from '..'

const DATA = {
  firstName: 'Suki',
  organization: {
    discipline: {
      value: 'example-uid',
      label: 'example-label',
    },
  },
}

const CONVERTED_DATA = {
  first_name: 'Suki',
  organization: {
    discipline: 'example-uid',
  },
}

test('it converts all objects with a value in a object to a single string', () => {
  const convertedData = convertOutgoingData(DATA)
  expect(isEqual(convertedData, CONVERTED_DATA))
})
