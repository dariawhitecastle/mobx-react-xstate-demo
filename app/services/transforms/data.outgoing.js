import _ from 'lodash'

/**
 * Convert keys from camelCase to lower_snake_case
 *
 * @param {*} data Data to be transformed
 */
const convertOutgoingData = data => {
  const formattedData = _.isArray(data) ? [] : {}

  _.forEach(data, (value, key) => {
    let formattedValue = value

    // If the value is also an object or array, recursively update keys
    if (_.isPlainObject(formattedValue) || _.isArray(formattedValue)) {
      formattedValue = convertOutgoingData(formattedValue)
    }

    formattedData[_.snakeCase(key)] = formattedValue
  })
  return formattedData
}

export default convertOutgoingData
