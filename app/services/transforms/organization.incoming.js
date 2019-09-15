/**
 * Convert organization keys from {uid: 'example-uid', name: 'example-value'} to
 * {value: 'example-uid', label: 'example-value'}
 *
 * @param {*} data Data to be transformed
 */

const convertIncomingOrganization = ({
  discipline,
  taxStatus,
  orgType,
  minPreparedness,
  ...rest
}) => {
  let convertedObj = { ...rest }
  if (discipline)
    convertedObj = {
      ...convertedObj,
      discipline: { value: discipline.uid, label: discipline.discipline },
    }
  if (taxStatus)
    convertedObj = { ...convertedObj, taxStatus: { value: taxStatus.uid, label: taxStatus.name } }
  if (orgType)
    convertedObj = { ...convertedObj, orgType: { value: orgType.uid, label: orgType.name } }
  if (minPreparedness)
    convertedObj = {
      ...convertedObj,
      minPreparedness: {
        value: minPreparedness.uid,
        label: minPreparedness.preparedness_description,
      },
    }
  return convertedObj
}

export default convertIncomingOrganization
