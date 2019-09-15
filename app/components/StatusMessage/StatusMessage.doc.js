import { describe, PropTypes } from 'react-desc'

export const doc = StatusMessage => {
  const DocumentedStatusMessage = describe(StatusMessage)
    .description('A StatusMessage')
    .usage(
      `import { StatusMessage } from 'components/StatusMessage'
<StatusMessage error>Ooops, there was an error!</StatusMessage>`,
    )

  DocumentedStatusMessage.propTypes = {
    error: PropTypes.bool
      .description(
        'Boolean to control if the message is displayed as an error (status-error color) or success (status-ok color)',
      )
      .defaultValue(false),
    children: PropTypes.node.description('Any children to render by the styled message'),
  }

  return DocumentedStatusMessage
}
