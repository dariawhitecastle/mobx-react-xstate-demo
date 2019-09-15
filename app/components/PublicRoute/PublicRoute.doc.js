import { describe, PropTypes } from 'react-desc'

export const doc = PublicRoute => {
  const DocumentedPublicRoute = describe(PublicRoute)
    .description('A PublicRoute')
    .usage(
      `import { PublicRoute } from 'components/PublicRoute';
<PublicRoute />`,
    )

  DocumentedPublicRoute.propTypes = {
    // this should be PropTypes.elementType but PropTypes imported from
    // react-desc do not support that type
    component: PropTypes.func.description(
      'Component type that should be rendered for the specified path',
    ),
  }

  return DocumentedPublicRoute
}
