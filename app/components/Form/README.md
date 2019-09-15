<!-- ! This is a generated file. To make changes, edit <Component>.doc.js ! -->
## createForm
A form that manages state for its fields.

## Usage

```javascript
import { Form } from 'grommet';
<Form />
```

## Properties

**errors**

An object representing any errors in the data. They keys should
        match the keys in the value object. Defaults to `{}`.

```
{

}
```

**messages**

Custom validation messages. Defaults to `{
  "invalid": "invalid",
  "required": "required"
}`.

```
{
  invalid: string,
  required: string
}
```

**onChange**

Function that will be called when any fields are updated.

```
function
```

**onSubmit**

Function that will be called when the form is submitted. The
      single argument is an event containing the latest value object
      via `event.value`.

```
function
```

**onReset**

Function that will be called when the form is reset. The
      single argument is the event provided by react.

```
function
```

**value**

An object representing all of the data in the form. Defaults to `{}`.

```
{

}
```
  
## Intrinsic element

```
form
```