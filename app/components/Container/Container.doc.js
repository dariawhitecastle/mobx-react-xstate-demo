import { describe, PropTypes } from 'react-desc'

export const doc = Container => {
  const DocumentedContainer = describe(Container)
    .description('The top level Container container.')
    .usage(
      `import { Container } from 'component/Container';
<Container>...</Container>`,
    )
    .intrinsicElement('div')

  DocumentedContainer.propTypes = {
    full: PropTypes.bool.description('Whether to take the whole viewport.').defaultValue(false),
    plain: PropTypes.bool
      .description(
        'Whether or not Container should apply a global font-family, font-size, and line-height.',
      )
      .defaultValue(false),
    cssVars: PropTypes.bool
      .description('Whether to expose the css variables.')
      .defaultValue(false),
    theme: PropTypes.object.description('Custom styles for Container app component.'),
    userAgent: PropTypes.string.description(
      'User agent used to detect the device width for setting the initial breakpoint.',
    ),
  }

  return DocumentedContainer
}

export const themeDoc = {
  'container.extend': {
    description: 'Any additional style for Container.',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
  'global.font.face': {
    description: 'Custom font face declaration',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
}
