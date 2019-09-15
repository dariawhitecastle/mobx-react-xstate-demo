import { ignore } from 'mobx-sync'

import { locale } from './LocaleStore'

import { user } from './UserStore'

export class RootStore {
  @ignore storeLoaded = false

  locale = locale

  user = user
}

export const store = new RootStore()
