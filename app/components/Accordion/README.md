<!-- ! This is a generated file. To make changes, edit <Component>.doc.js ! -->
## createAccordion
An accordion containing collapsible panels.

## Usage

```javascript
import { Accordion, AccordionPanel } from 'components/Accordion';
<Accordion>
  <AccordionPanel label='Panel 1'>...</AccordionPanel>
  <AccordionPanel label='Panek 2'>...</AccordionPanel>
</Accordion>
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

**activeIndex**

Active panel index. If specified, Accordion will be a controlled component. This means that future
panel changes will not work unless you subscribe to onActive function and update activeIndex
accordingly.

```
number
[number]
```

**animate**

Transition content in & out with a slide down animation. Defaults to `true`.

```
boolean
```

**children**

Array of AccordionPanels.

```
node
```

**onActive**

Function that will be called when the active index changes.
It will always send an array with currently active panel indexes.

```
function
```

**multiple**

Allow multiple panels to be opened at once.

```
boolean
```

**messages**

Custom messages for Tabs. Used for accessibility by screen readers. Defaults to `{
  "tabContents": "Tab Contents"
}`.

```
{
  tabContents: string
}
```
  
## Intrinsic element

```
div
```