import React from 'react'
import { render } from '@testing-library/react'
import { IntlProvider } from 'react-intl'

import Home from '../Home'

describe('<Home />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <Home />
      </IntlProvider>,
    )
    expect(firstChild).toMatchSnapshot()
  })
})
