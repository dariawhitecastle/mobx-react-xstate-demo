<!-- ! This is a generated file. To make changes, edit <Component>.doc.js ! -->
## createImage
An image.

## Usage

```javascript
import { Image } from 'grommet';
<Image/>
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

**fit**

How the image fills its container.

```
cover
contain
```

**fallback**

Specifies the URL of the fallback image used when src is failing to load

```
string
```

**opacity**

Transparency of the image.

```
weak
medium
strong
string
boolean
```
  
## Intrinsic element

```
img
```
## Theme
  
**global.opacity.medium**

The value used when opacity is set to true. Expects `number`.

Defaults to

```
0.4
```

**image.extend**

Any additional style for the Image. Expects `string | (props) => {}`.

Defaults to

```
undefined
```
