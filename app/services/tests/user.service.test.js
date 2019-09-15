import { cleanup } from '@testing-library/react'
import 'jest-dom/extend-expect'
import MockAdapter from 'axios-mock-adapter'

import axios from '../instance'
import { login } from '../user.service'

const testUser = {
  email: 'cuttlesoft@cuttlesoft.com',
  password: '123456',
}

const successResponse = {
  token: '2520daa794c942ea44a4d5acfbf8aae5ad92b5cd',
}

afterEach(cleanup)

test('login creates an axios call and uses provided url', async () => {
  const url = '/login/'
  const axiosMock = new MockAdapter(axios)
  const mockData = successResponse
  axiosMock.onPost(url).reply(200, mockData)
  const loggedInUser = await login(testUser)
  expect(loggedInUser).toEqual(mockData)
})

test('login catches an error', async () => {
  const url = '/login/'
  const axiosMock = new MockAdapter(axios)
  const errorMessage = 'Error'
  axiosMock.onPost(url).reply(400, errorMessage)
  try {
    await login(testUser)
  } catch (error) {
    expect(error.response.data).toEqual('Error')
  }
})
