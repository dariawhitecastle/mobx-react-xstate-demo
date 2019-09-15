import { assign } from 'xstate'
import { isEmail } from 'validator'
import validate from '../../utils/validate'

const machineConfig = {
  id: 'signIn',
  context: {
    email: '',
    password: '',
  },
  initial: 'dataEntry',
  states: {
    dataEntry: {
      on: {
        ENTER_EMAIL: {
          actions: 'setEmail',
        },
        ENTER_PASSWORD: {
          actions: 'setPassword',
        },
        EMAIL_BLUR: {
          cond: 'isBadEmailFormat',
          target: 'emailErr.badFormat',
        },
        PASSWORD_BLUR: {
          cond: 'isPasswordShort',
          target: 'passwordErr.tooShort',
        },
        SUBMIT: [
          {
            cond: 'isBadEmailFormat',
            target: 'emailErr.badFormat',
          },
          {
            cond: 'isPasswordShort',
            target: 'passwordErr.tooShort',
          },
          {
            target: 'awaitingResponse',
          },
        ],
      },
    },
    awaitingResponse: {
      invoke: {
        src: 'requestSignIn',
        // If successful, move to the signedIn state
        onDone: {
          target: 'signedIn',
        },
        // If email input is unsuccessful, move to the emailErr.noAccount sub-state
        onError: [
          {
            cond: 'isNoAccount',
            target: 'emailErr.noAccount',
          },
          {
            // If password input is unsuccessful, move to the passwordErr.incorrect sub-state
            cond: 'isIncorrectPassword',
            target: 'passwordErr.incorrect',
          },
          {
            // If the service itself cannot be reached, move to the serviceErr state
            cond: 'isServiceErr',
            target: 'serviceErr',
          },
        ],
      },
    },
    emailErr: {
      on: {
        ENTER_EMAIL: {
          target: 'dataEntry',
          actions: 'setEmail',
        },
      },
      initial: 'badFormat',
      states: {
        badFormat: {},
        noAccount: {},
      },
    },
    passwordErr: {
      on: {
        ENTER_PASSWORD: {
          target: 'dataEntry',
          actions: 'setPassword',
        },
      },
      initial: 'tooShort',
      states: {
        tooShort: {},
        incorrect: {},
      },
    },
    serviceErr: {
      on: {
        SUBMIT: {
          target: 'awaitingResponse',
        },
      },
    },
    signedIn: {
      type: 'final',
    },
  },
  onDone: {
    actions: 'onAuthentication',
  },
}

const machineOptions = () => ({
  actions: {
    setEmail: assign((ctx, evt) => ({
      email: evt.value,
    })),
    setPassword: assign((ctx, evt) => ({
      password: evt.value,
    })),
    // We’ll log a note in the console to confirm authentication
    onAuthentication: () => {
      console.info('user authenticated')
    },
  },
  guards: {
    isBadEmailFormat: ctx => !isEmail(ctx.email) || !ctx.email.length,
    isPasswordShort: ctx =>
      !ctx.password.length || (ctx.password.length > 0 && validate.isPasswordShort(ctx.password)),
    isNoAccount: (ctx, evt) => evt.data.code === 1,
    isIncorrectPassword: (ctx, evt) => evt.data.code === 2,
    isServiceErr: (ctx, evt) => evt.data.code === 3,
  },
  services: {
    requestSignIn: ctx => contactAuthService(ctx.email, ctx.password),
  },
})

const contactAuthService = (email, password) =>
  new Promise((resolve, reject) => {
    console.info(`email: ${email}`)
    console.info(`password: ${password}`)
    setTimeout(() => {
      return resolve()
      // eslint-disable-next-line prefer-promise-reject-errors
      //   return reject({ code: 3 })
    }, 1500)
  })

export { machineOptions, machineConfig }
