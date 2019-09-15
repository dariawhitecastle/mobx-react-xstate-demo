import _ from 'lodash'

/**
 * Convert keys from lower_snake_case to camelCase
 *
 * @param {*} data Data to be transformed
 */
const convertIncomingData = data => {
  const formattedData = _.isArray(data) ? [] : {}

  _.forEach(data, (value, key) => {
    let formattedValue = value

    // If the value is also an object or array, recursively update keys
    if (_.isPlainObject(formattedValue) || _.isArray(formattedValue)) {
      formattedValue = convertIncomingData(formattedValue)
    }

    formattedData[_.camelCase(key)] = formattedValue
  })
  return formattedData
}

export default convertIncomingData
