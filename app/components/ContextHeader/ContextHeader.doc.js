import { describe, PropTypes } from 'react-desc'
import { intlShape } from 'react-intl'

export const doc = ContextHeader => {
  const DocumentedContextHeader = describe(ContextHeader)
    .description('Subheader for the context of each page, e.g. Profile, Dashboard, etc')
    .usage(
      `import { ContextHeader } from 'components/ContextHeader';
      <ContextHeader headerMain={messages.header} name="Touring company" status="Normal"/>`,
    )

  DocumentedContextHeader.propTypes = {
    name: PropTypes.string.isRequired.description('Name of the organization').defaultValue(''),
    status: PropTypes.string.isRequired
      .description('Status of current operations')
      .defaultValue(''),
    headerMain: PropTypes.shape({
      id: PropTypes.string.isRequired,
      defaultMessage: PropTypes.string.isRequired,
    })
      .description('Id and title for the header')
      .defaultValue({
        id: 'header',
        defaultMessage: 'This is the ContextHeader component!',
      }),
    intl: intlShape.isRequired,
  }

  return DocumentedContextHeader
}
