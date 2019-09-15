import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grommet } from 'grommet'
import { MemoryRouter } from 'react-router-dom'

import theme from '../../../utils/theme'
import { UserStore, UserStoreContext } from '../../../stores/UserStore'
import NavBar from '../NavBar'

const userStore = new UserStore()
userStore.token = 'faketoken'

storiesOf('NavBar', module)
  .add('Default', () => (
    <Grommet theme={theme}>
      <MemoryRouter initialEntries={['/']}>
        <NavBar />
      </MemoryRouter>
    </Grommet>
  ))
  .add('Authenticated Premium', () => (
    <Grommet theme={theme}>
      <MemoryRouter initialEntries={['/']}>
        <UserStoreContext.Provider value={userStore}>
          <NavBar />
        </UserStoreContext.Provider>
      </MemoryRouter>
    </Grommet>
  ))
  .add('Authenticated Non-premium', () => (
    <Grommet theme={theme}>
      <MemoryRouter initialEntries={['/']}>
        <UserStoreContext.Provider value={userStore}>
          <NavBar premiumProp={false} />
        </UserStoreContext.Provider>
      </MemoryRouter>
    </Grommet>
  ))
