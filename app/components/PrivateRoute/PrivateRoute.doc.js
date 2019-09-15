import { describe, PropTypes } from 'react-desc'

export const doc = PrivateRoute => {
  const DocumentedPrivateRoute = describe(PrivateRoute)
    .description('A PrivateRoute')
    .usage(
      `import { PrivateRoute } from 'components/PrivateRoute';
<PrivateRoute />`,
    )

  DocumentedPrivateRoute.propTypes = {
    // this should be PropTypes.elementType but PropTypes imported from
    // react-desc do not support that type
    component: PropTypes.func.description(
      'Component type that should be rendered for the specified path',
    ),
  }

  return DocumentedPrivateRoute
}
