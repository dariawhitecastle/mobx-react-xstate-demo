<!-- ! This is a generated file. To make changes, edit <Component>.doc.js ! -->
## createContainer
The top level Container container.

## Usage

```javascript
import { Container } from 'component/Container';
<Container>...</Container>
```

## Properties

**full**

Whether to take the whole viewport.

```
boolean
```

**plain**

Whether or not Container should apply a global font-family, font-size, and line-height.

```
boolean
```

**cssVars**

Whether to expose the css variables.

```
boolean
```

**theme**

Custom styles for Container app component.

```
object
```

**userAgent**

User agent used to detect the device width for setting the initial breakpoint.

```
string
```
  
## Intrinsic element

```
div
```
## Theme
  
**container.extend**

Any additional style for Container. Expects `string | (props) => {}`.

Defaults to

```
undefined
```

**global.font.face**

Custom font face declaration Expects `string | (props) => {}`.

Defaults to

```
undefined
```
