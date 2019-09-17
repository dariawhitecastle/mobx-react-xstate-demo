import { action, observable } from 'mobx'
import { createContext } from 'react'

export class UserStore {
  @observable user = {}

  @action.bound
  setCurrentUser(email, password) {
    this.user = {
      email,
      password,
    }
  }
}

export const user = new UserStore()
export const UserStoreContext = createContext(user)
