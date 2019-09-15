<!-- ! This is a generated file. To make changes, edit <Component>.doc.js ! -->
## createRadioButton
A radio button control.

RadioButton should typically not be used directly.
      Instead, use RadioButtonGroup.

## Usage

```javascript
import { RadioButton } from 'components/RadioButton';
<RadioButton />
```

## Properties

**checked**

Same as React <input checked={} />

```
boolean
```

**disabled**

Same as React <input disabled={} />. Also adds a hidden input element
with the same name so form submissions work.

```
boolean
```

**id**

The DOM id attribute value to use for the underlying <input/> element.

```
string
```

**label**

Label text to place next to the control.

```
node
```

**name**

Required. The DOM name attribute value to use for the underlying <input/> element.

```
string
```

**onChange**

Function that will be called when the user clicks the radio button. It
      will be passed a React event object. The current state can be accessed
      via event.target.checked. Same as React <input onChange={} />.

```
function
```

## Intrinsic element

```
input
```
## Theme

**radioButton.border.color**

The color of the border of the Radio Button. Expects `string | { dark: string, light: string }`.

Defaults to

```
{dark: 'rgba(255, 255, 255, 0.5), light: 'rgba(0, 0, 0, 0.15)}
```

**radioButton.border.width**

The width size of the border of the RadioButton. Expects `string`.

Defaults to

```
2px
```

**radioButton.check.color**

The color of the checked icon in the RadioButton. Expects `string | { dark: string, light: string }`.

Defaults to

```
undefined
```

**radioButton.check.extend**

Any additional style for the checked RadioButton. Expects `string | (props) => {}`.

Defaults to

```
undefined
```

**radioButton.check.radius**

The border-radius of the RadioButton. Expects `string`.

Defaults to

```
100%
```

**radioButton.extend**

Any additional style for the RadioButton. Expects `string | (props) => {}`.

Defaults to

```
undefined
```

**radioButton.gap**

The gap between the label and the RadioButton itself. Expects `string`.

Defaults to

```
small
```

**radioButton.size**

The size of the RadioButton. Expects `string`.

Defaults to

```
24px
```

**radioButton.hover.border.color**

The color of the RadioButton border when hovered over. Expects `string | { dark: string, light: string }`.

Defaults to

```
{dark: white, light: black}
```

**radioButton.icon.extend**

Any additional style for the RadioButton icon. Expects `string | (props) => {}`.

Defaults to

```
undefined
```

**radioButton.icon.size**

The size of the icon in the RadioButton. Expects `string`.

Defaults to

```
undefined
```
