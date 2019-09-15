import _ from 'lodash'

/**
 * Convert options from { label: 'example-label', value: 'example-value' }
 * to 'example-value'
 *
 * @param {*} data Data to be transformed
 */
const convertOutgoingOnboarding = data => {
  const formattedData = {}

  _.forEach(data, (value, key) => {
    let formattedValue = value

    // If the value is also an object, recursively update keys
    if (_.isPlainObject(value)) {
      if ('value' in value) {
        formattedValue = formattedValue.value
      } else {
        formattedValue = convertOutgoingOnboarding(value)
      }
    }

    formattedData[key] = formattedValue
  })
  return formattedData
}

export default convertOutgoingOnboarding
