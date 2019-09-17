/**
 *
 * LandingPage
 *
 */

import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Machine } from 'xstate'
import { useMachine } from '@xstate/react'

import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Header } from 'components/Header'
import { StatusMessage } from 'components/StatusMessage'
import { Form, FormField } from 'components/Form'
import { LoadingIndicator } from 'components/LoadingIndicator'

import { UserStoreContext } from '../../stores/UserStore'

import { machineConfig, machineOptions } from './machine'
const LandingPage = observer(() => {
  const { setCurrentUser, user } = useContext(UserStoreContext)
  const createAccountMachine = Machine(machineConfig, machineOptions(setCurrentUser))
  const [current, send] = useMachine(createAccountMachine)

  const handleSubmit = e => {
    e.preventDefault()
    send({ type: 'SUBMIT' })
  }

  const logOut = () => {
    send({
      type: 'ENTER_EMAIL',
      value: '',
    })
    send({
      type: 'ENTER_PASSWORD',
      value: '',
    })
    setCurrentUser('')
  }

  const disableSubmit = () =>
    current.matches('awaitingResponse') ||
    current.matches('emailErr') ||
    current.matches('passwordErr')

  const getButtonCopy = () =>
    current.matches('awaitingResponse') ? <LoadingIndicator /> : 'Submit'

  const {
    context: { email, password },
  } = current

  const getSubmitMessage = () => {
    let error = ''
    switch (true) {
      case current.matches('serviceErr'):
        error = 'Problem contacting the server'
        break
      default:
        error = ''
    }
    return error
  }
  return (
    <>
      <Helmet>
        <title>Landing Page</title>
        <meta name="description" content="Description of Landing Page" />
      </Helmet>
      <Box>
        <Box alignSelf="center" margin="large" width="medium">
          <Header level="3" margin={{ horizontal: 'small', vertical: 'large' }} alignSelf="center">
            {user.email ? `Current user is ${user.email}` : `MOBX and XSTATE demo`}
          </Header>
          <Form onSubmit={handleSubmit}>
            <FormField
              disabled={current.matches('awaitingResponse')}
              error={current.matches('emailErr') && 'Please enter valid email'}
              label="Email"
              name="email"
              onBlur={() => {
                send({ type: 'EMAIL_BLUR' })
              }}
              onChange={e => {
                send({
                  type: 'ENTER_EMAIL',
                  value: e.target.value,
                })
              }}
              placeholder="Enter email"
              type="email"
              value={{ value: user.email }}
            />

            <FormField
              disabled={current.matches('awaitingResponse')}
              error={current.matches('passwordErr') && 'Password too short'}
              label="Password"
              name="password"
              onBlur={() => {
                send({ type: 'PASSWORD_BLUR' })
              }}
              onChange={e => {
                send({
                  type: 'ENTER_PASSWORD',
                  value: e.target.value,
                })
              }}
              placeholder="Enter password"
              type="password"
              value={{ value: user.password }}
            />
            <Box align="center" direction="row" justify="between">
              <Button disabled={!user.email} label="Log out" primary onClick={logOut} />
              <Button disabled={disableSubmit()} label={getButtonCopy()} primary type="submit" />
            </Box>
          </Form>
          <StatusMessage error={current.matches('serviceErr')}>{getSubmitMessage()}</StatusMessage>
        </Box>
      </Box>
    </>
  )
})

export default withRouter(LandingPage)
