import { describe, PropTypes } from 'react-desc'

import { genericProps } from '../../utils/propTypes'
import { themeDocUtils } from '../../utils/themeDocUtils'

export const doc = Table => {
  const DocumentedTable = describe(Table)
    .description('A table of data organized in cells.')
    .usage(
      `import { Table, TableHeader, TableFooter, TableBody, TableRow } from 'components/Table';
<Table />`,
    )
    .intrinsicElement('table')

  DocumentedTable.propTypes = {
    ...genericProps,
    caption: PropTypes.string.description('One line description.'),
  }

  return DocumentedTable
}

export const themeDoc = {
  ...themeDocUtils.responsiveBreakpoint('The actual breakpoint to trigger changes in Table.'),
  'global.size': {
    description: 'The size that impacts max-width and width.',
    defaultValue: `{
      xxsmall: '48px',
      xsmall: '96px',
      small: '192px',
      medium: '384px',
      large: '768px',
      xlarge: '1152px',
      xxlarge: '1536px',
      full: '100%',
      }`,
  },
  'table.extend': {
    description: 'Any additional style for Table.',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
}
