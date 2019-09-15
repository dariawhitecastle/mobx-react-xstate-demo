/**
 *
 * Tests for PublicRoute
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { IntlProvider } from 'react-intl'
import { MemoryRouter } from 'react-router-dom'
import { render, waitForElement } from '@testing-library/react'
import { Grommet } from 'grommet'
import 'jest-dom/extend-expect'

import { Register } from 'containers/Register'
import messages from 'containers/Register/Register.messages'
import theme from '../../utils/theme'
import { DEFAULT_LOCALE } from '../../i18n'
import PublicRoute from './PublicRoute'
import { UserStore, UserStoreContext } from '../../stores/UserStore'
import trunk from '../../configureStore'

describe('<PublicRoute />', () => {
  let userStore = null

  beforeAll(() => {
    userStore = new UserStore()
    trunk.init()
  })

  const renderComponent = store =>
    render(
      <Grommet theme={theme}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <MemoryRouter initialEntries={['/create-account']}>
            <UserStoreContext.Provider value={store}>
              <PublicRoute path="/create-account" component={Register} />
            </UserStoreContext.Provider>
          </MemoryRouter>
        </IntlProvider>
      </Grommet>,
    )

  it('renders Register if user is not authenticated', async () => {
    const { container, getByTestId } = renderComponent(userStore)
    expect(container).toMatchSnapshot()
    expect(container).toHaveTextContent(messages.header.defaultMessage)

    const registerPage = await waitForElement(() => getByTestId('register-page'))
    expect(registerPage).toHaveTextContent(messages.header.defaultMessage)
  })

  it('does not render Register if user is authenticated', async () => {
    userStore = {
      token: 'faketoken',
    }
    const { container } = renderComponent(userStore)
    expect(container).toMatchSnapshot()
    expect(container).not.toHaveTextContent(messages.header.defaultMessage)
  })
})
