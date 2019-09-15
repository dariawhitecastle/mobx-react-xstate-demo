<!-- ! This is a generated file. To make changes, edit <Component>.doc.js ! -->
## createTable
A table of data organized in cells.

## Usage

```javascript
import { Table, TableHeader, TableFooter, TableBody, TableRow } from 'components/Table';
<Table />
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

**caption**

One line description.

```
string
```
  
## Intrinsic element

```
table
```
## Theme
  
**global.edgeSize.responsiveBreakpoint**

The actual breakpoint to trigger changes in Table. Expects `string`.

Defaults to

```
small
```

**global.size**

The size that impacts max-width and width. Expects `undefined`.

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

**table.extend**

Any additional style for Table. Expects `string | (props) => {}`.

Defaults to

```
undefined
```
