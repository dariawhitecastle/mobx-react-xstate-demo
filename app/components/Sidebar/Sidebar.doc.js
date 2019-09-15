import React from 'react'
import { describe, PropTypes } from 'react-desc'
import { Button } from '../Button'

export const doc = Sidebar => {
  const DocumentedSidebar = describe(Sidebar)
    .description('A Sidebar')
    .usage(
      `import { Sidebar } from 'components/Sidebar';
<Sidebar />`,
    )

  DocumentedSidebar.propTypes = {
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        exact: PropTypes.bool,
        path: PropTypes.string.isRequired,
        main: PropTypes.func.isRequired,
      }),
    )
      .description('Array of routes to be rendered in the sidebar')
      .defaultValue([
        {
          label: 'Home',
          exact: true,
          path: '/',
          main: () => <Button label="Click me" />,
        },
      ]),
  }

  return DocumentedSidebar
}
