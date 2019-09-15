/**
 *
 * Tests for PrivateRoute
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { IntlProvider } from 'react-intl'
import { MemoryRouter } from 'react-router-dom'
import { render, waitForElement } from '@testing-library/react'
import 'jest-dom/extend-expect'

import { Dashboard } from 'containers/Dashboard'
import { DEFAULT_LOCALE } from '../../i18n'
import PrivateRoute from './PrivateRoute'
import { UserStore, UserStoreContext } from '../../stores/UserStore'
import trunk from '../../configureStore'

const TEST_USER = 'suki@cuttlesoft.com'

describe('<PrivateRoute />', () => {
  let userStore = null

  beforeAll(() => {
    userStore = new UserStore()
    trunk.init()
  })

  const renderComponent = store =>
    render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <MemoryRouter initialEntries={['/dashboard']}>
          <UserStoreContext.Provider value={store}>
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </UserStoreContext.Provider>
        </MemoryRouter>
      </IntlProvider>,
    )

  it('does not render if user is not authenticated', async () => {
    const { container } = renderComponent(userStore)

    expect(container).toMatchSnapshot()
    expect(container).not.toHaveTextContent('Dashboard')
  })

  it('renders dashboard if user is authenticated', async () => {
    userStore = {
      token: 'faketoken',
      email: TEST_USER,
    }
    const { container, getByTestId } = renderComponent(userStore)
    expect(container).toMatchSnapshot()
    expect(container).toHaveTextContent('Dashboard')

    const dashboardPage = await waitForElement(() => getByTestId('dashboard-page'))
    expect(dashboardPage).toHaveTextContent('Dashboard')
  })
})
