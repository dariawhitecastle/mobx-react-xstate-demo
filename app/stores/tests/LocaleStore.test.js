import { LocaleStore } from '../LocaleStore'

test('it updates locale', () => {
  const localeStore = new LocaleStore()
  const newLocale = 'de'
  localeStore.changeLocale(newLocale)
  expect(localeStore.locale).toEqual('de')
})
