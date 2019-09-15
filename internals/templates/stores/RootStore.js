import { ignore } from 'mobx-sync'
import { locale } from './LocaleStore'

export class RootStore {
  @ignore storeLoaded = false

  locale = locale
}

export const store = new RootStore()
