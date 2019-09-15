import { describe, PropTypes } from 'react-desc'

import { genericProps } from '../../utils/propTypes'

const VERTICAL_ALIGN_OPTIONS = ['top', 'bottom']
const HORIZONTAL_ALIGN_OPTIONS = ['right', 'left']

export const doc = Menu => {
  const DocumentedMenu = describe(Menu)
    .description(`A control that opens a Drop containing plain Buttons.`)
    .details(
      `The labels and behavior of the contained Buttons are described
      via the \`items\` property.
      You can provide a single function child that will be called with
      'hover', 'focus', and 'drop' keys. This allows you to customize
      the rendering of the Menu button in those cases.`,
    )
    .usage(
      `import { Menu } from 'grommet';
<Menu />`,
    )
    .intrinsicElement('button')

  DocumentedMenu.propTypes = {
    ...genericProps,
    disabled: PropTypes.bool
      .description('Whether the menu should be disabled.')
      .defaultValue(false),
    dropAlign: PropTypes.shape({
      top: PropTypes.oneOf(VERTICAL_ALIGN_OPTIONS),
      bottom: PropTypes.oneOf(VERTICAL_ALIGN_OPTIONS),
      left: PropTypes.oneOf(HORIZONTAL_ALIGN_OPTIONS),
      right: PropTypes.oneOf(HORIZONTAL_ALIGN_OPTIONS),
    })
      .description(
        `Where to place the drop down. The keys correspond to a side of the drop down.
The values correspond to a side of the control. For instance,
{left: 'left', top: 'bottom'} would align the left edges and the top of
the drop down to the bottom of the control. At most one of left or right and
one of top or bottom should be specified.`,
      )
      .defaultValue({ top: 'top', left: 'left' }),
    dropBackground: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        color: PropTypes.string,
        opacity: PropTypes.oneOfType([
          PropTypes.bool,
          PropTypes.number,
          PropTypes.oneOf(['weak', 'medium', 'strong']),
        ]),
      }),
    ]).description('Background color when drop is active'),
    dropTarget: PropTypes.object.description(
      `Target where the drop will be aligned to. This should be
      a React reference. Typically, this is not required as the drop will be
      aligned to the Menu itself by default.`,
    ),
    dropProps: PropTypes.object.description('Any valid Drop prop.'),
    justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'stretch'])
      .description('How to align the contents along the row axis.')
      .defaultValue('start'),
    icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]).description(
      'Indicates the icon shown as a control to open it.',
    ),
    items: PropTypes.arrayOf(PropTypes.object).description(
      `Menu items to be placed inside the drop down.
The object values can be any Button prop, for example: label and onClick.`,
    ).isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).description(
      'Indicates the label shown as a control to open it.',
    ),
    messages: PropTypes.shape({
      closeMenu: PropTypes.string,
      openMenu: PropTypes.string,
    })
      .description('Custom messages. Used for accessibility by screen readers.')
      .defaultValue({ openMenu: 'Open Menu', closeMenu: 'Close Menu' }),
    open: PropTypes.bool
      .description('Whether the state of the component should be open')
      .defaultValue(false),
    size: PropTypes.oneOfType([
      PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
      PropTypes.string,
    ])
      .description('The size of the menu.')
      .defaultValue('medium'),
  }

  return DocumentedMenu
}

export const themeDoc = {
  'global.colors.control': {
    description: 'The color to use for the icon.',
    type: 'string | { dark: string, light: string }',
    defaultValue: undefined,
  },
  'menu.background': {
    description: 'The color for the background of the menu Drop when it is open.',
    type: 'string',
    defaultValue: undefined,
  },
  'menu.extend': {
    description: 'Any additional style for the Menu.',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
  'menu.icons.down': {
    description: 'The icon to show to the right of the label.',
    type: 'React.Element',
    defaultValue: '<FormDown />',
  },
}
