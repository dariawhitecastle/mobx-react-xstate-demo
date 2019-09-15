import { describe, PropTypes } from 'react-desc'

export const doc = NavBar => {
  const DocumentedNavBar = describe(NavBar)
    .description('A NavBar')
    .usage(
      `import { NavBar } from 'components/NavBar';
<NavBar />`,
    )

  DocumentedNavBar.propTypes = {
    id: PropTypes.string
      .description('The DOM id attribute value to use for the element.')
      .defaultValue(false),
  }

  return DocumentedNavBar
}
