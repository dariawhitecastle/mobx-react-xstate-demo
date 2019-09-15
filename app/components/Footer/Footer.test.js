import React from 'react'
import renderer from 'react-test-renderer'
import { IntlProvider } from 'react-intl'
import { Provider } from 'mobx-react'
import { RouterStore } from 'mobx-react-router'

import Footer from './Footer'
import trunk from '../../configureStore'

describe('<Footer />', () => {
  let stores

  beforeAll(() => {
    const routingStore = new RouterStore()
    stores = {
      routing: routingStore,
    }
    trunk.init()
  })

  it('should render and match the snapshot', () => {
    const renderedComponent = renderer
      .create(
        <Provider {...stores}>
          <IntlProvider locale="en">
            <Footer />
          </IntlProvider>
        </Provider>,
      )
      .toJSON()

    expect(renderedComponent).toMatchSnapshot()
  })
})
