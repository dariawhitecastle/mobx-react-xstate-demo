/**
*
* Tests for TextPartialLink
*
* @see
https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
*
*/

import React from 'react'
import { render } from '@testing-library/react'
import { IntlProvider } from 'react-intl'

import TextPartialLink from './TextPartialLink'
import { DEFAULT_LOCALE } from '../../i18n'

const renderComponent = (linkedTextStyle, textStyle) =>
  render(
    <IntlProvider locale={DEFAULT_LOCALE}>
      <TextPartialLink
        linkedText={{
          id: `plainButtonLabel`,
          defaultMessage: 'Test Link',
        }}
        linkedTextStyle={linkedTextStyle || {}}
        text="Test message:"
        textProps={{ id: 'testText', defaultMessage: 'Test message.' }}
        textStyle={textStyle || {}}
        onClick={() => console.info('Clicked on test link!')}
      />
    </IntlProvider>,
  )

test('it renders and matches snapshot', () => {
  const { container } = renderComponent()
  expect(container).toMatchSnapshot()
})

const linkedTextStyle = {
  textDecoration: 'underline',
}

const textStyle = { margin: { horizontal: 'medium' } }

test('it renders, has styles and matches snapshot', () => {
  const { container } = renderComponent(linkedTextStyle, textStyle)
  expect(container).toMatchSnapshot()
})

test('It does not log to the console', () => {
  const spy = jest.spyOn(global.console, 'log')
  render(
    <IntlProvider locale={DEFAULT_LOCALE}>
      <TextPartialLink
        linkedText={{
          id: `plainButtonLabel`,
          defaultMessage: 'Test Link',
        }}
        text="Test message: "
        textProps={{ id: 'testText', defaultMessage: 'Test message.' }}
        onClick={() => console.info('Clicked on test link!')}
      />
    </IntlProvider>,
  )
  expect(spy).not.toHaveBeenCalled()
})
