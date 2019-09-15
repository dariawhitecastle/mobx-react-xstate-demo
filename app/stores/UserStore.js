import { action, observable } from 'mobx'
import { ignore } from 'mobx-sync'
import { createContext } from 'react'

export class UserStore {
  @observable user = {}

  @observable tempUser = {}

  @observable token = ''

  @ignore
  @observable
  isLoading = false

  @ignore
  @observable
  message = ''

  @ignore
  @observable
  error = ''

  @observable message = ''

  @action.bound
  setCurrentUser({ token = '', ...user } = {}) {
    this.token = token
    this.user = {
      ...user,
    }
  }
}

export const user = new UserStore()
export const UserStoreContext = createContext(user)
