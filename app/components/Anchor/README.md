<!-- ! This is a generated file. To make changes, edit <Component>.doc.js ! -->
## createAnchor
A text link.

We have a separate component from the browser
base so we can style it. You can either set the icon and/or label properties
or just use children.

## Usage

```javascript
import { Anchor } from 'components/Anchor';
<Anchor href={location} label='Label' />
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

**color**

Label color and icon color, if not specified on the icon.

```
string
{
  dark: string,
  light: string
}
```

**href**

Hyperlink reference to place in the anchor.

```
string
```

**icon**

Icon element to place in the anchor.

```
element
```

**label**

Label text to place in the anchor.

```
node
```

**onClick**

Click handler. It can be used, for example,
        to add analytics and track who clicked in the anchor.

```
function
```

**reverse**

Whether an icon and label should be reversed so that the
        icon is at the end of the anchor.

```
boolean
```

**size**

The font size is typically driven by the components containing
this component. But, it can be adjusted directly via this size property, typically
when it is not contained in a 'Heading', 'Paragraph', or 'Text'.

```
xsmall
small
medium
large
xlarge
xxlarge
string
```

**as**

The DOM tag to use for the element.

```
string
```
  
## Intrinsic element

```
a
```
## Theme
  
**anchor.color**

The color of the label text and icon strokes. Expects `string | { dark: string, light: string }`.

Defaults to

```
{ light: '#1D67E3', dark: '#6194EB' }
```

**anchor.fontWeight**

The font weight of the label. Expects `number`.

Defaults to

```
600
```

**anchor.textDecoration**

The text decoration of the label. Refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) for possible values. Expects `string`.

Defaults to

```
none
```

**anchor.hover.fontWeight**

The font weight of the label when hovering. Expects `number`.

Defaults to

```
undefined
```

**anchor.hover.textDecoration**

The text decoration of the label when hovering. Refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) for possible values. Expects `string`.

Defaults to

```
underline
```

**anchor.hover.extend**

Any additional style for the Anchor when hovering. Expects `string | (props) => {}`.

Defaults to

```
undefined
```

**anchor.extend**

Any additional style for the Anchor. Expects `string | (props) => {}`.

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
