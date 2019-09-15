import { cleanup } from '@testing-library/react'
import 'jest-dom/extend-expect'
import { UserStore } from '../UserStore'

const TEST_USER = {
  id: '469ee5f1-caa6-4c5a-ad1b-9002320abfab',
  email: 'cuttlesoft@cuttlesoft.com',
  token: '2520daa794c942ea44a4d5acfbf8aae5ad92b5cd',
  firstName: 'Suki',
  lastName: 'Cuttlesoft',
}

describe('UserStore', () => {
  afterEach(cleanup)

  /** @todo: fix test */
  // it('setCurrentUser provides default values', () => {
  //   const userStore = new UserStore()
  //   userStore.setCurrentUser()

  //   console.log({ userStore })
  //   console.log(userStore.user)
  //   console.log(userStore.token)

  //   expect(userStore.user).toEqual({})
  //   expect(userStore.token).toEqual('')
  // })

  it('setCurrentUser sets token and email', () => {
    const userStore = new UserStore()
    userStore.setCurrentUser(TEST_USER)

    expect(userStore.user.email).toEqual(TEST_USER.email)
    expect(userStore.token).toEqual(TEST_USER.token)
  })
})
