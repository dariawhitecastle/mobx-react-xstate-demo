<!-- ! This is a generated file. To make changes, edit <Component>.doc.js ! -->
## InjectIntl(ContextHeader)
Subheader for the context of each page, e.g. Profile, Dashboard, etc

## Usage

```javascript
import { ContextHeader } from 'components/ContextHeader';
      <ContextHeader headerMain={messages.header} name="Touring company" status="Normal"/>
```

## Properties

**name**

Required. Name of the organization

```
string
```

**status**

Required. Status of current operations

```
string
```

**headerMain**

Id and title for the header Defaults to `{
  "id": "header",
  "defaultMessage": "This is the ContextHeader component!"
}`.

```
{
  id: string,
  defaultMessage: string
}
```
  