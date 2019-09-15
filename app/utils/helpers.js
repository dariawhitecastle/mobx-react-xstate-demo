/* istanbul ignore next */
const helpers = {
  createWithDoc({ docFunction = () => {}, component = '' }) {
    const envName = process.env.NODE_ENV || ''

    let createComponentWithDoc = null
    if (envName !== 'production') {
      createComponentWithDoc = docFunction(component) // eslint-disable-line global-require
    }
    return createComponentWithDoc || component
  },
  formatAssessmentLabel(label) {
    const newLabel = label
      .replace(/_/g, ' ')
      .replace(/and/g, '&')
      .replace(/\b\w/g, letter => letter.toUpperCase())
    return newLabel
  },
  formatForSelect(data, nameKey = 'name') {
    return data.reduce((acc, item) => [...acc, { value: item.uid, label: item[nameKey] }], [])
  },
  searchArrayOfObjects(data, searchTerm) {
    return data.filter(datum =>
      Object.keys(datum).some(key => {
        const lowerCaseSearchterm = searchTerm.toLowerCase()
        if (typeof datum[key] === 'string')
          return datum[key].toLowerCase().includes(lowerCaseSearchterm)

        if (Array.isArray(datum[key]))
          return datum[key].some(value => value.toLowerCase().includes(lowerCaseSearchterm))
        return false
      }),
    )
  },
}

export default helpers
