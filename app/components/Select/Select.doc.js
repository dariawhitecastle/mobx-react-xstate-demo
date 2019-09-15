import { describe, PropTypes } from 'react-desc'

import { genericProps } from '../../utils/propTypes'

export const doc = Select => {
  const DocumentedSelect = describe(Select)
    .description('A control to select a value, with optional search.')
    .usage(
      `import { Select } from 'grommet';
<Select />`,
    )
  // We don't include svg due to a collision on the values property
  // .intrinsicElement('select');

  DocumentedSelect.propTypes = {
    ...genericProps,
    children: PropTypes.func.description(
      `Function that will be called when each option is rendered.
      It will be passed (option, index, options, state) where option
      is the option to render, index is the index of that option in the
      options array, and state is an object with
      { active, disabled, selected } keys indicating the current state
      of the option.`,
    ),
    closeOnChange: PropTypes.bool
      .description('Wether to close the drop when a selection is made.')
      .defaultValue(true),
    disabled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
      ),
    ])
      .description(
        `Whether the entire select or individual options should be disabled.
        An array of numbers indicates the indexes into 'options' of the
        disabled options. An array of strings or objects work the same way
        as the 'value' to indicate which options are disabled.`,
      )
      .defaultValue(false),
    disabledKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).description(
      `When the options array contains objects, this property indicates how
      to determine which options should be disabled. If a string is
      provided, it is used as the key for each item object and if that key
      returns truthy, the option is disabled. If a function is provided, it is
      called with the option and the return value determines if the option
      is disabled.`,
    ),
    dropAlign: PropTypes.shape({
      top: PropTypes.oneOf(['top', 'bottom']),
      bottom: PropTypes.oneOf(['top', 'bottom']),
      right: PropTypes.oneOf(['left', 'right']),
      left: PropTypes.oneOf(['left', 'right']),
    })
      .description('How to align the drop.')
      .defaultValue({
        top: 'bottom',
        left: 'left',
      }),
    dropHeight: PropTypes.oneOfType([
      PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
      PropTypes.string,
    ]).description('The height of the drop container.'),
    dropTarget: PropTypes.object.description(
      `Target where the options drop will be aligned to. This should be
      a React reference. Typically, this is not required as the drop will be
      aligned to the Select itself by default.`,
    ),
    dropProps: PropTypes.object.description('Any valid Drop prop.'),
    focusIndicator: PropTypes.bool.description(
      "Whether when 'plain' it should receive a focus outline.",
    ),
    icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.func, PropTypes.node]).description(
      'A custom icon to be used when rendering the select. You can use false to not render an icon at all.',
    ),
    labelKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).description(
      `When the options array contains objects, this property indicates how
      to determine the label of each option. If a string is
      provided, it is used as the key to retrieve each option's label.
      If a function is provided, it is called with the option and the
      return value indicates the label.`,
    ),
    messages: PropTypes.shape({
      multiple: PropTypes.string,
    }).description('Custom messages.'),
    multiple: PropTypes.bool.description('Whether to allow multiple options to be selected.'),
    onChange: PropTypes.func.description(
      'Function that will be called when the user selects an option.',
    ),
    onClose: PropTypes.func.description(
      'Function that will be called when the Select drop closes.',
    ),
    onOpen: PropTypes.func.description('Function that will be called when the Select drop opens.'),
    onSearch: PropTypes.func.description(
      `Function that will be called when the user types in the search input.
      If this property is not provided, no search field will be rendered.`,
    ),
    onMore: PropTypes.func.description(
      `Use this to indicate that 'items' doesn't contain all that it could.
      It will be called when the entire list of items has been rendered.
      This might be used when the total number of items that could be retrieved
      is more than you'd want to load into the browser. 'onMore' allows you
      to lazily fetch more from the server only when needed.`,
    ),
    replace: PropTypes.bool
      .description(
        `Whether to replace previously rendered items with a generic spacing
      element when they have scrolled out of view. This is more performant but
      means that in-page searching will not find elements that have been
      replaced.`,
      )
      .defaultValue(true),
    options: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.object]),
    ).description(
      `Options can be either a string or an object. If an object is used, use
      children callback in order to render anything based on the current item.`,
    ).isRequired,
    open: PropTypes.bool.description(`Control the state of the component.`),
    placeholder: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.element,
    ]).description('Placeholder text to use when no value is provided.'),
    plain: PropTypes.bool.description(
      'Whether this is a plain Select input with no border or padding.',
    ),
    searchPlaceholder: PropTypes.string.description(
      'Placeholder text to use in the search box when the search input is empty.',
    ),
    selected: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.number),
    ]).description(
      `Index of the currently selected option. When multiple, the set of
      options selected. NOTE: This is deprecated in favor of indicating
      the selected values via the 'value' property.`,
    ),
    size: PropTypes.oneOfType([
      PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
      PropTypes.string,
    ]).description('The size of the select.'),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element, // deprecated, use valueLabel
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])),
    ]).description(`Currently selected value. This can be an array
      when multiple. Passing an element allows the caller to control how
      the value is rendered. Passing an element is deprecated. Instead,
      use the 'valueLabel' property.`),
    valueLabel: PropTypes.node.description(
      `Provides custom rendering of the value. If not provided, Select
      will render the value automatically.`,
    ),
    valueKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).description(
      `When the options array contains objects, this property indicates how
      to determine the value of each option. If a string is
      provided, it is used as the key to retrieve each option's value.
      If a function is provided, it is called with the option and the
      return value indicates the value.`,
    ),
    emptySearchMessage: PropTypes.string
      .description(`Empty option message to display when no matching results were found`)
      .defaultValue('No matches found'),
  }

  return DocumentedSelect
}

export const themeDoc = {
  'select.background': {
    description: 'The background color used for Select.',
    type: 'string',
    defaultValue: undefined,
  },
  'select.options.container': {
    description: 'Any valid Box prop for the options container.',
    type: 'object',
    defaultValue: "{ align: 'start', pad: 'small' }",
  },
  'select.options.text': {
    description: 'Any valid Text prop for text used inside the options container.',
    type: 'object',
    defaultValue: "{ margin: 'none }",
  },
  'select.container.extend': {
    description: 'Any additional style for the container of the Select component.',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
  'select.control.extend': {
    description: 'Any additional style for the control of the Select component.',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
  'select.icons.margin': {
    description: 'The margin used for Select icons.',
    type: 'string | object',
    defaultValue: undefined,
  },
  'select.icons.color': {
    description: 'The color used for Select icons.',
    type: 'string | { dark: string, light: string }',
    defaultValue: undefined,
  },
  'select.icons.down': {
    description: 'The down icon to use for opening the Select.',
    type: 'React.Element',
    defaultValue: '<FormDown />',
  },
  'select.searchInput': {
    description: `Component for the Select search input field.`,
    type: 'React.Component',
    defaultValue: undefined,
  },
  'select.step': {
    description: `How many items to render at a time.`,
    type: 'number',
    defaultValue: 20,
  },
}
