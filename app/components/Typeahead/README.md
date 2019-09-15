<!-- ! This is a generated file. To make changes, edit <Component>.doc.js ! -->
## Typeahead
A control to input a single line of text, with optional suggestions.

## Usage

```javascript
import { Typeahead } from 'grommet';
<Typeahead id='item' name='item' />
```

## Properties

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

Target where any suggestions drop will be aligned to. This should be
      a React reference. Typically, this is not required as the drop will be
      aligned to the Typeahead itself by default.

```
object
```

**id**

The id attribute of the input.

```
string
```

**focusIndicator**

Whether the plain text input should receive a focus outline.

```
boolean
```

**messages**

Custom messages for Typeahead. Used for accessibility by screen readers. Defaults to `{
  "enterSelect": "(Press Enter to Select)",
  "suggestionsCount": "suggestions available",
  "suggestionsExist": "This input has suggestions use arrow keys to navigate",
  "suggestionIsOpen": "Suggestions drop is open, continue to use arrow keys to navigate"
}`.

```
{
  enterSelect: string,
  suggestionsCount: string,
  suggestionsExist: string,
  suggestionIsOpen: string
}
```

**name**

The name attribute of the input.

```
string
```

**onChange**

Function that will be called when the user types in the input.

```
function
```

**onSelect**

Function that will be called when the user selects a suggestion.
The suggestion contains the object chosen from the supplied suggestions.

```
function
```

**onSuggestionsOpen**

Function that will be called when the suggestions drop is opened.

```
function
```

**onSuggestionsClose**

Function that will be called when the suggestions drop is closed.

```
function
```

**placeholder**

Placeholder to use when no value is provided.

```
string
node
```

**plain**

Whether this is a plain input with no border or padding.
Only use this when the containing context provides sufficient affordance

```
boolean
```

**size**

The size of the Typeahead.

```
small
medium
large
xlarge
string
```

**suggestions**

Suggestions to show. It is recommended to avoid showing too many
suggestions and instead rely on the user to type more.

```
[
  {
    label: node,
    value: any
  }
  string
]
```

**value**

What text to put in the input.

```
string
number
any
```
  
## Intrinsic element

```
input
```
## Theme
  
**select.step**

How many suggestions to render at a time. Expects `number`.

Defaults to

```
20
```

**text**

The possible sizes of the text in terms of its font-size and line-height. Expects `object`.

Defaults to

```
{
      xsmall: {
        size: '12px',
        height: '18px',
       },
      small: {
        size: '14px',
        height: '20px',
       },
      medium: {
        size: '18px',
        height: '24px',
      },
      large: {
        size: '22px',
        height: '28px',
      },
      xlarge: {
        size: '26px',
        height: '32px',
      },
      xxlarge: {
        size: '34px',
        height: '40px',
      },
    }
```

**typeahead.extend**

Any additional style for Typeahead. Expects `string | (props) => {}`.

Defaults to

```
undefined
```

**typeahead.placeholder.extend**

Any additional style for non-string placeholder inside Typeahead. Expects `string | (props) => {}`.

Defaults to

```
undefined
```

**typeahead.suggestions.extend**

Any additional style for Typeahead suggestions. Expects `string | (props) => {}`.

Defaults to

```
undefined
```

**global.focus.border.color**

The color around the component when in focus. Expects `string | { dark: string, light: string }`.

Defaults to

```
focus
```

**global.colors.placeholder**

The placeholder color used for the component. Expects `string`.

Defaults to

```
#AAAAAA
```

**global.input.weight**

The font weight of the text entered. Expects `number`.

Defaults to

```
600
```

**global.input.padding**

The padding of the text. Expects `string`.

Defaults to

```
12px
```
