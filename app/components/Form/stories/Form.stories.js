import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import Form from '../Form'
import FormField from '../FormField'
import { Box } from '../../Box'
import { Container } from '../../Container'
import { Button } from '../../Button'

storiesOf('Form', module).add('Default', () => <DefaultForm />)

const DefaultForm = props => {
  const [email, onEmailChange] = useState('banana@banana.com')
  const [password, onPasswordChange] = useState('tacocat')

  return (
    <Container full>
      <Box fill align="center" justify="center">
        <Box width="medium">
          <Form
            onReset={event => console.info(event)}
            onSubmit={({ value }) => console.info('Submit', value)}
            {...props}
          >
            <FormField
              label="Email"
              name="email"
              type="email"
              required
              value={email}
              onChange={e => onEmailChange(e.target.value)}
            />
            <FormField
              label="Password"
              name="password"
              type="password"
              required
              value={password}
              onChange={e => onPasswordChange(e.target.value)}
            />
            <Button label="Cancel" />
            <Button type="reset" label="Reset" />
            <Button type="submit" label="Submit" primary />
          </Form>
        </Box>
      </Box>
    </Container>
  )
}
