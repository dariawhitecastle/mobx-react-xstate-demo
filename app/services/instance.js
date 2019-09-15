import axios from 'axios'
import { cloneDeep } from 'lodash'

/** @todo Fix import cycle */
// eslint-disable-next-line import/no-cycle
import { user } from '../stores/UserStore'
import { convertIncomingData, convertOutgoingData } from './transforms'

// Default config options
const DEFAULT_OPTIONS = {
  baseURL: process.env.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
}

// Create instance
const instance = axios.create(DEFAULT_OPTIONS)

// Set the AUTH token for any request
instance.interceptors.request.use(config => {
  const _config = cloneDeep(config)

  // If we have a user token, update the config
  if (user.token !== '') {
    _config.headers.Authorization = `Bearer ${user.access_token}`
  }

  _config.data = convertOutgoingData(config.data)

  return _config
})

/**
 * - If a response is successful, only return the data portion of the response
 */
instance.interceptors.response.use(response => {
  if (response.status === 204 || response.status === 205) {
    return null
  }
  return convertIncomingData(response.data)
})

export default instance
