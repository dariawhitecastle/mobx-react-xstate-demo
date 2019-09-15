<!-- ! This is a generated file. To make changes, edit <Component>.doc.js ! -->
## CreateSelect
A control to select a value, with optional search.

## Usage

```javascript
import { Select } from 'grommet';
<Select />
```

## Properties

**a11yTitle**

Custom title to be used by screen readers.

```
string
```

**alignSelf**

How to align along the cross axis when contained in
      a Box or along the column axis when contained in a Grid.

```
start
center
end
stretch
```

**gridArea**

The name of the area to place
    this inside a parent Grid.

```
string
```

**margin**

The amount of margin around the component. An object can
      be specified to distinguish horizontal margin, vertical margin, and
      margin on a particular side.

```
none
xxsmall
xsmall
small
medium
large
xlarge
{
  bottom: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string,
  horizontal: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string,
  left: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string,
  right: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string,
  top: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string,
  vertical: 
    xxsmall
    xsmall
    small
    medium
    large
    xlarge
    string
}
string
```

**children**

Function that will be called when each option is rendered.
      It will be passed (option, index, options, state) where option
      is the option to render, index is the index of that option in the
      options array, and state is an object with
      { active, disabled, selected } keys indicating the current state
      of the option.

```
function
```

**closeOnChange**

Wether to close the drop when a selection is made. Defaults to `true`.

```
boolean
```

**disabled**

Whether the entire select or individual options should be disabled.
        An array of numbers indicates the indexes into 'options' of the
        disabled options. An array of strings or objects work the same way
        as the 'value' to indicate which options are disabled.

```
boolean
[
  number
  string
  object
]
```

**disabledKey**

When the options array contains objects, this property indicates how
      to determine which options should be disabled. If a string is
      provided, it is used as the key for each item object and if that key
      returns truthy, the option is disabled. If a function is provided, it is
      called with the option and the return value determines if the option
      is disabled.

```
string
function
```

**dropAlign**

How to align the drop. Defaults to `{
  "top": "bottom",
  "left": "left"
}`.

```
{
  top: 
    top
    bottom,
  bottom: 
    top
    bottom,
  right: 
    left
    right,
  left: 
    left
    right
}
```

**dropHeight**

The height of the drop container.

```
xsmall
small
medium
large
xlarge
string
```

**dropTarget**

Target where the options drop will be aligned to. This should be
      a React reference. Typically, this is not required as the drop will be
      aligned to the Select itself by default.

```
object
```

**dropProps**

Any valid Drop prop.

```
object
```

**focusIndicator**

Whether when 'plain' it should receive a focus outline.

```
boolean
```

**icon**

A custom icon to be used when rendering the select. You can use false to not render an icon at all.

```
boolean
function
node
```

**labelKey**

When the options array contains objects, this property indicates how
      to determine the label of each option. If a string is
      provided, it is used as the key to retrieve each option's label.
      If a function is provided, it is called with the option and the
      return value indicates the label.

```
string
function
```

**messages**

Custom messages.

```
{
  multiple: string
}
```

**multiple**

Whether to allow multiple options to be selected.

```
boolean
```

**onChange**

Function that will be called when the user selects an option.

```
function
```

**onClose**

Function that will be called when the Select drop closes.

```
function
```

**onOpen**

Function that will be called when the Select drop opens.

```
function
```

**onSearch**

Function that will be called when the user types in the search input.
      If this property is not provided, no search field will be rendered.

```
function
```

**onMore**

Use this to indicate that 'items' doesn't contain all that it could.
      It will be called when the entire list of items has been rendered.
      This might be used when the total number of items that could be retrieved
      is more than you'd want to load into the browser. 'onMore' allows you
      to lazily fetch more from the server only when needed.

```
function
```

**replace**

Whether to replace previously rendered items with a generic spacing
      element when they have scrolled out of view. This is more performant but
      means that in-page searching will not find elements that have been
      replaced. Defaults to `true`.

```
boolean
```

**options**

Required. Options can be either a string or an object. If an object is used, use
      children callback in order to render anything based on the current item.

```
[
  string
  element
  object
]
```

**open**

Control the state of the component.

```
boolean
```

**placeholder**

Placeholder text to use when no value is provided.

```
string
node
element
```

**plain**

Whether this is a plain Select input with no border or padding.

```
boolean
```

**searchPlaceholder**

Placeholder text to use in the search box when the search input is empty.

```
string
```

**selected**

Index of the currently selected option. When multiple, the set of
      options selected. NOTE: This is deprecated in favor of indicating
      the selected values via the 'value' property.

```
number
[number]
```

**size**

The size of the select.

```
small
medium
large
xlarge
string
```

**value**

Currently selected value. This can be an array
      when multiple. Passing an element allows the caller to control how
      the value is rendered. Passing an element is deprecated. Instead,
      use the 'valueLabel' property.

```
string
element
object
[
  string
  object
]
```

**valueLabel**

Provides custom rendering of the value. If not provided, Select
      will render the value automatically.

```
node
```

**valueKey**

When the options array contains objects, this property indicates how
      to determine the value of each option. If a string is
      provided, it is used as the key to retrieve each option's value.
      If a function is provided, it is called with the option and the
      return value indicates the value.

```
string
function
```

**emptySearchMessage**

Empty option message to display when no matching results were found Defaults to `No matches found`.

```
string
```
  
## Theme
  
**select.background**

The background color used for Select. Expects `string`.

Defaults to

```
undefined
```

**select.options.container**

Any valid Box prop for the options container. Expects `object`.

Defaults to

```
{ align: 'start', pad: 'small' }
```

**select.options.text**

Any valid Text prop for text used inside the options container. Expects `object`.

Defaults to

```
{ margin: 'none }
```

**select.container.extend**

Any additional style for the container of the Select component. Expects `string | (props) => {}`.

Defaults to

```
undefined
```

**select.control.extend**

Any additional style for the control of the Select component. Expects `string | (props) => {}`.

Defaults to

```
undefined
```

**select.icons.margin**

The margin used for Select icons. Expects `string | object`.

Defaults to

```
undefined
```

**select.icons.color**

The color used for Select icons. Expects `string | { dark: string, light: string }`.

Defaults to

```
undefined
```

**select.icons.down**

The down icon to use for opening the Select. Expects `React.Element`.

Defaults to

```
<FormDown />
```

**select.searchInput**

Component for the Select search input field. Expects `React.Component`.

Defaults to

```
undefined
```

**select.step**

How many items to render at a time. Expects `number`.

Defaults to

```
20
```
