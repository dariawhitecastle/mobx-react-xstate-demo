<!-- ! This is a generated file. To make changes, edit <Component>.doc.js ! -->
## createGrid
A grid system for laying out content. To use, define the
rows and columns, create area names for adjacent cells, and then
place Box components inside those areas using the gridArea property.
See https://css-tricks.com/snippets/css/complete-guide-grid/.
The availability of Grid can be tested via `Grid.available`. Use this
to create fallback rendering for older browsers, like ie11.

## Usage

```javascript
import { Grid } from 'components/Grid';
<Grid />
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

**align**

How to align the individual items inside the grid when there is extra
space in the column axis. Defaults to `stretch`.

```
start
center
end
stretch
```

**alignContent**

How to align the contents along the column axis.

```
start
center
end
between
around
stretch
```

**areas**

Area names and column,row coordinates.

```
[{
  name: string,
  start: [number],
  end: [number]
}]
```

**columns**

Column sizes.
      If an array value is an array, the inner array indicates the
      minimum and maximum sizes for the column.
      Specifying a single string will repeat multiple columns
      of that size, as long as there is room for more.
      Specifying an object allows indicating how the columns
      stretch to fit the available space.

```
[
  [
    xsmall
    small
    medium
    large
    xlarge
    full
    1/2
    1/3
    2/3
    1/4
    2/4
    3/4
    flex
    auto
    string
  ]
  xsmall
  small
  medium
  large
  xlarge
  full
  1/2
  1/3
  2/3
  1/4
  2/4
  3/4
  flex
  auto
  string
]
xsmall
small
medium
large
xlarge
{
  count: 
    fit
    fill
    number,
  size: 
    xsmall
    small
    medium
    large
    xlarge
    [xsmall
small
medium
large
xlarge
full
1/2
1/3
2/3
1/4
2/4
3/4
flex
auto]
    string
}
string
```

**fill**

Whether the width and/or height should fill the container.

```
horizontal
vertical
boolean
```

**gap**

Gap sizes between rows and/or columns.

```
small
medium
large
none
{
  row: 
    small
    medium
    large
    none
    string,
  column: 
    small
    medium
    large
    none
    string
}
string
```

**justify**

How to align the individual items inside the grid when there is extra
space in the row axis. Defaults to `stretch`.

```
start
center
end
stretch
```

**justifyContent**

How to align the contents along the row axis.

```
start
center
end
between
around
stretch
```

**rows**

Row sizes.
      If an array value is an array, the inner array indicates the
      minimum and maximum sizes for the row.
      Specifying a single string will cause automatically added rows to be
      the specified size.

```
[
  [
    xsmall
    small
    medium
    large
    xlarge
    full
    1/2
    1/3
    2/3
    1/4
    2/4
    3/4
    flex
    auto
    string
  ]
  xsmall
  small
  medium
  large
  xlarge
  full
  1/2
  1/3
  2/3
  1/4
  2/4
  3/4
  flex
  auto
  string
]
xsmall
small
medium
large
xlarge
string
```

**tag**

The DOM tag to use for the element. NOTE: This is deprecated
      in favor of indicating the DOM tag via the 'as' property.

```
string
function
```

**as**

The DOM tag or react component to use for the element. Defaults to `div`.

```
string
function
```
  
## Intrinsic element

```
div
```
## Theme
  
**global.size**

The possible sizes for row and column. Expects `object`.

Defaults to

```
{
      xxsmall: '48px',
      xsmall: '96px',
      small: '192px',
      medium: '384px',
      large: '768px',
      xlarge: '1152px',
      xxlarge: '1536px',
      full: '100%',
    }
```

**grid.extend**

Any additional style for the Grid. Expects `string | (props) => {}`.

Defaults to

```
undefined
```

**global.edgeSize**

The possible sizes for the grid margin and gap. Expects `object`.

Defaults to

```
{
      edgeSize: {
        none: '0px',
        hair: '1px',
        xxsmall: '3px',
        xsmall: '6px',
        small: '12px',
        medium: '24px',
        large: '48px',
        xlarge: '96px',
        responsiveBreakpoint: 'small',
      },
    }
```
