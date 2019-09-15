/*
 *
 * LanguageProvider
 *
 * this component connects the MobX state context language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl'
import { observer } from 'mobx-react'
import { LocaleStoreContext } from '../../stores/LocaleStore'

export const LanguageProvider = observer(props => {
  const localeStore = useContext(LocaleStoreContext)

  return (
    <IntlProvider
      locale={localeStore.locale}
      key={localeStore.locale}
      messages={props.messages[localeStore.locale]}
    >
      {React.Children.only(props.children)}
    </IntlProvider>
  )
})

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired,
}

export default LanguageProvider
