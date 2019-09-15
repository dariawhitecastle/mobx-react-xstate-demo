import { describe, PropTypes } from 'react-desc'

import { colorPropType, genericProps } from '../../utils/propTypes'
import { themeDocUtils } from '../../utils/themeDocUtils'
export const doc = Anchor => {
  const DocumentedAnchor = describe(Anchor)
    .description('A text link.')
    .details(
      `We have a separate component from the browser
base so we can style it. You can either set the icon and/or label properties
or just use children.`,
    )
    .usage("import { Anchor } from 'components/Anchor';\n<Anchor href={location} label='Label' />")
    .intrinsicElement('a')

  DocumentedAnchor.propTypes = {
    ...genericProps,
    a11yTitle: PropTypes.string.description('Custom title to be used by screen readers.'),
    color: colorPropType.description('Label color and icon color, if not specified on the icon.'),
    href: PropTypes.string.description('Hyperlink reference to place in the anchor.'),
    icon: PropTypes.element.description('Icon element to place in the anchor.'),
    label: PropTypes.node.description('Label text to place in the anchor.'),
    onClick: PropTypes.func.description(
      `Click handler. It can be used, for example,
        to add analytics and track who clicked in the anchor.`,
    ),
    reverse: PropTypes.bool
      .description(
        `Whether an icon and label should be reversed so that the
        icon is at the end of the anchor.`,
      )
      .defaultValue(false),
    size: PropTypes.oneOfType([
      PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
      PropTypes.string,
    ]).description(
      `The font size is typically driven by the components containing
this component. But, it can be adjusted directly via this size property, typically
when it is not contained in a 'Heading', 'Paragraph', or 'Text'.`,
    ),
    as: PropTypes.string.description(`The DOM tag to use for the element.`),
  }

  return DocumentedAnchor
}

export const themeDoc = {
  'anchor.color': {
    description: 'The color of the label text and icon strokes.',
    type: 'string | { dark: string, light: string }',
    defaultValue: "{ light: '#1D67E3', dark: '#6194EB' }",
  },
  'anchor.fontWeight': {
    description: 'The font weight of the label.',
    type: 'number',
    defaultValue: 600,
  },
  'anchor.textDecoration': {
    description:
      'The text decoration of the label. Refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) for possible values.',
    type: 'string',
    defaultValue: 'none',
  },
  'anchor.hover.fontWeight': {
    description: 'The font weight of the label when hovering.',
    type: 'number',
    defaultValue: undefined,
  },
  'anchor.hover.textDecoration': {
    description:
      'The text decoration of the label when hovering. Refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) for possible values.',
    type: 'string',
    defaultValue: 'underline',
  },
  'anchor.hover.extend': {
    description: 'Any additional style for the Anchor when hovering.',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
  'anchor.extend': {
    description: 'Any additional style for the Anchor.',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
  ...themeDocUtils.focusStyle,
}
