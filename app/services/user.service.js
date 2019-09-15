/* eslint-disable camelcase */
/* eslint-disable no-throw-literal */

/** @todo Fix import cycle */
// eslint-disable-next-line import/no-cycle
import axios from './instance'
import RegisterMessages from '../containers/Register/Register.messages'
import ForgotPasswordMessages from '../containers/ForgotPassword/ForgotPassword.messages'
import ResetPasswordMessages from '../containers/ResetPassword/ResetPassword.messages'
import { convertOutgoingOnboarding } from './transforms'

export async function createAccount({ email, password, ...rest }) {
  try {
    return await axios.post(
      '/users/',
      convertOutgoingOnboarding({
        email,
        password,
        ...rest,
      }),
    )
  } catch (err) {
    // Set up the error to return
    // - Start with a default message
    let details = RegisterMessages.serverErrors.defaultMessage
    // - Axios does not return a response object if the service cannot be reached
    if (!err.response) {
      details = RegisterMessages.serverErrors.noInternet
    }
    // - If we do have a response and data object, use the full error object
    if (err.response && err.response.data) {
      details = err.response.data
    }

    throw {
      error: true,
      // Ensure that we are consistently returning an object, not a string
      details: typeof details === 'object' ? details : { error: details },
    }
  }
}

export async function login({ email, password, ...rest }) {
  try {
    return await axios.post('/login/', {
      email,
      password,
      ...rest,
    })
  } catch (err) {
    throw err
  }
}

export async function getUser(user) {
  try {
    return await axios.get(`/users/${user.id}/`)
  } catch (err) {
    throw err
  }
}

export async function updateUser(user) {
  try {
    return await axios.put(`/users/${user.id}/`, user)
  } catch (err) {
    throw err
  }
}

export async function updateUserPassword(user) {
  try {
    return await axios.put(`/set_password/`, user)
  } catch (err) {
    throw err
  }
}

export async function confirmAccountOrEmail(token, uid) {
  try {
    return await axios.get(`/confirm/?token=${token}&uid=${uid}`)
  } catch (err) {
    throw err
  }
}

export async function forgotPassword({ email }) {
  try {
    return await axios.post('/password_reset/', {
      email,
    })
  } catch (err) {
    // Set up the error to return
    // - Start with a default message
    let details = ForgotPasswordMessages.serverErrors.defaultMessage
    // - Axios does not return a response object if the service cannot be reached
    if (!err.response) {
      details = ForgotPasswordMessages.serverErrors.noInternet
    }
    // - If we do have a response and data object, use the full error object
    if (err.response && err.response.data) {
      details = err.response.data
    }

    throw {
      error: true,
      // Ensure that we are consistently returning an object, not a string
      details: typeof details === 'object' ? details : { error: details },
    }
  }
}

export async function validateResetToken(token) {
  try {
    return await axios.post('/password_reset/validate_token/', {
      token,
    })
  } catch (err) {
    // Set up the error to return
    // - Start with a default message
    let details = ResetPasswordMessages.serverErrors.defaultMessage
    // - Axios does not return a response object if the service cannot be reached
    if (!err.response) {
      details = ResetPasswordMessages.serverErrors.noInternet
    }
    // - If we do have a response and data object, use the full error object
    if (err.response && err.response.data) {
      details = err.response.data
    }

    throw {
      error: true,
      // Ensure that we are consistently returning an object, not a string
      details: typeof details === 'object' ? details : { error: details },
    }
  }
}

export async function resetPassword({ token, password }) {
  try {
    return await axios.post('/password_reset/confirm/', {
      token,
      password,
    })
  } catch (err) {
    // Set up the error to return
    // - Start with a default message
    let details = ResetPasswordMessages.serverErrors.defaultMessage
    // - Axios does not return a response object if the service cannot be reached
    if (!err.response) {
      details = ResetPasswordMessages.serverErrors.noInternet
    }
    // - If we do have a response and data object, use the full error object
    if (err.response && err.response.data) {
      details = err.response.data
    }

    throw {
      error: true,
      // Ensure that we are consistently returning an object, not a string
      details: typeof details === 'object' ? details : { error: details },
    }
  }
}
