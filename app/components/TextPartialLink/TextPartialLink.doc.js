import { describe, PropTypes } from 'react-desc'

export const doc = TextPartialLink => {
  const DocumentedTextPartialLink = describe(TextPartialLink)
    .description('A TextPartialLink')
    .usage(
      `import { TextPartialLink } from 'components/TextPartialLink';
<TextPartialLink />`,
    )

  DocumentedTextPartialLink.propTypes = {
    intl: PropTypes.object.description('Injected intl.').isRequired,
    text: PropTypes.string.description('String to be displayed.').defaultValue(''),
    textProps: PropTypes.object
      .description('Props to be passed to the FormattedMessage component.')
      .defaultValue({}),
    textStyle: PropTypes.object
      .description('Style prop to be applied to the FormattedMessage component.')
      .defaultValue({}),
    linkedText: PropTypes.string.description('String to be displayed as a link.').defaultValue(''),
    linkedTextProps: PropTypes.object
      .description('Props to be passed to the Button component.')
      .defaultValue({}),
    linkedTextStyle: PropTypes.object
      .description('Style prop to be applied to the Button component.')
      .defaultValue({}),
    onClick: PropTypes.func
      .description('onClick method for the Button component.')
      .defaultValue({}),
  }

  return DocumentedTextPartialLink
}
