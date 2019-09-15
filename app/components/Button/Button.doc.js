import { describe, PropTypes } from 'react-desc'

import { genericProps, colorPropType } from '../../utils/propTypes'

export const doc = Button => {
  const DocumentedButton = describe(Button)
    .description('A button.')
    .details(
      `You can provide a single function child that will be called with
      'hover' and 'focus' keys. This allows you to customize the rendering
      of the Button in those cases.`,
    )
    .usage(
      `import { Button } from 'components/Button';
<Button primary label='Label' />`,
    )
    .intrinsicElement('button')

  DocumentedButton.propTypes = {
    ...genericProps,
    active: PropTypes.bool.description('Whether the button is active.').defaultValue(false),
    color: colorPropType.description(
      'Fill color for primary, label color for plain, border color otherwise.',
    ),
    disabled: PropTypes.bool.description('Whether the button is disabled.').defaultValue(false),
    fill: PropTypes.oneOfType([PropTypes.oneOf(['horizontal', 'vertical']), PropTypes.bool])
      .description('Whether the button expands to fill all of the available width and/or height.')
      .defaultValue(false),
    focusIndicator: PropTypes.bool
      .description("Whether when 'plain' it should receive a focus outline.")
      .defaultValue(true),
    hoverIndicator: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.oneOf(['background']),
      PropTypes.shape({
        background: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      }),
    ])
      .description(
        `The hover indicator to apply when the user is mousing over the
button. An object can be also be specified for color index support:
{background: 'neutral-2'}. This prop is meant to be used only
with plain Buttons.`,
      )
      .defaultValue(false),
    href: PropTypes.string.description('If specified, the button will behave like an anchor tag.'),
    target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']).description(
      `Specifies where to display the URL defined in the href property.`,
    ),
    icon: PropTypes.element.description('Icon element to place in the button.'),
    gap: PropTypes.oneOfType([
      PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge']),
      PropTypes.string,
    ])
      .description(`The amount of spacing between icon and label in the button.`)
      .defaultValue('small'),
    label: PropTypes.node.description('Label text to place in the button.'),
    onClick: PropTypes.func.description(
      `Click handler. Not setting this property and not specifying a href
causes the Button to be disabled.`,
    ),
    plain: PropTypes.bool
      .description(
        `Whether this is a plain button with no border or pad.
Non plain button will show both pad and border.
The plain button has no border and unless the icon prop exist it has no pad as well.`,
      )
      .defaultValue(false),
    primary: PropTypes.bool
      .description(
        'Whether this is a primary button. There should be at most one per page or screen.',
      )
      .defaultValue(false),
    reverse: PropTypes.bool
      .description(
        `Whether an icon and label should be reversed so that the icon is at the
end of the anchor.`,
      )
      .defaultValue(false),
    type: PropTypes.oneOf(['button', 'reset', 'submit'])
      .description('The type of button. Set the type to submit for the default button on forms.')
      .defaultValue('button'),
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).description(
      `The DOM tag or react component to use for the element.`,
    ),
  }

  return DocumentedButton
}

export const themeDoc = {
  'global.hover.color': {
    description: 'The background color when hovering.',
    type: 'string',
    defaultValue: "{ dark: 'white', light: 'black' }",
  },
  'global.edgeSize.small': {
    description: 'The padding around an icon-only button.',
    type: 'string',
    defaultValue: '12px',
  },
  'global.colors.control': {
    description: 'The color of the border.',
    type: 'string | { dark: string, light: string }',
    defaultValue: "{ dark: 'accent-1', light: 'brand', }",
  },
  'global.colors.brand': {
    description: 'The light version of the border.',
    type: 'string',
    defaultValue: '#7D4CDB',
  },
  'global.colors.text': {
    description: 'The color of the text label.',
    type: 'string | { dark: string, light: string }',
    defaultValue: "{ dark: '#f8f8f8', light: '#444444' }",
  },
  'text.medium.size': {
    description: 'The font size of the text label.',
    type: 'string',
    defaultValue: '18px',
  },
  'text.medium.height': {
    description: 'The line height of the text label.',
    type: 'string',
    defaultValue: '24px',
  },
  'button.border.color': {
    description: `The color of the border.`,
    type: 'string | { dark: string, light: string }',
  },
  'button.border.radius': {
    description: 'The corner radius.',
    type: 'string',
    defaultValue: '18px',
  },
  'button.border.width': {
    description: 'The border width.',
    type: 'string',
    defaultValue: '2px',
  },
  'button.color': {
    description: `The color of the text label.`,
    type: 'string | { dark: string, light: string }',
  },
  'button.primary.color': {
    description: `The color of the background for primary buttons.`,
    type: 'string | { dark: string, light: string }',
  },
  'button.disabled.opacity': {
    description: 'The opacity when the button is disabled.',
    type: 'number',
    defaultValue: 0.3,
  },
  'button.padding.horizontal': {
    description: 'The horizontal padding.',
    type: 'string',
    defaultValue: '22px',
  },
  'button.padding.vertical': {
    description: 'The vertical padding.',
    type: 'string',
    defaultValue: '4px',
  },
  'button.extend': {
    description: 'Any additional style for the Button.',
    type: 'string | (props) => {}',
  },
}
