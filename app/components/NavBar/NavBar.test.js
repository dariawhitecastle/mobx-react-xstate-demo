/**
 *
 * Tests for NavBar
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import { IntlProvider } from 'react-intl'
import { MemoryRouter } from 'react-router-dom'
import { Grommet } from 'grommet'
import { ResponsiveContext } from 'grommet/es6/contexts'
import 'jest-dom/extend-expect'

import theme from '../../utils/theme'
import { UserStore, UserStoreContext } from '../../stores/UserStore'
import { DEFAULT_LOCALE } from '../../i18n'
import NavBar from './NavBar'

describe('<NavBar/>', () => {
  let userStore = null

  /** @todo test additional screen sizes */
  const renderComponent = renderUserStore =>
    render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <Grommet theme={theme}>
          <MemoryRouter initialEntries={['/']}>
            <UserStoreContext.Provider value={renderUserStore}>
              <ResponsiveContext.Provider value="large">
                <NavBar />
              </ResponsiveContext.Provider>
            </UserStoreContext.Provider>
          </MemoryRouter>
        </Grommet>
      </IntlProvider>,
    )

  beforeAll(() => {
    userStore = new UserStore()
  })

  it('renders and matches snapshot', () => {
    const { container } = renderComponent(userStore)

    expect(container).toMatchSnapshot()
  })

  it('does not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'log')

    renderComponent(userStore)

    expect(spy).not.toHaveBeenCalled()
  })

  it('displays the Create Account and Login links when unauthenticated', async () => {
    const { getByTestId } = renderComponent(userStore)
    const navBar = await waitForElement(() => getByTestId('nav-bar'))

    expect(navBar).toHaveTextContent('Create Account')
    expect(navBar).toHaveTextContent('Login')
  })

  it('displays the Logout link when authenticated', async () => {
    userStore.token = 'faketoken'
    const { getByTestId } = renderComponent(userStore)
    const navBar = await waitForElement(() => getByTestId('nav-bar'))

    expect(navBar).toHaveTextContent('Logout')
  })
})
