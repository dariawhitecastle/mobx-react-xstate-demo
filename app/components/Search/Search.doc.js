import { describe, PropTypes } from 'react-desc'

export const doc = Search => {
  const DocumentedSearch = describe(Search)
    .description('A Search component')
    .usage(
      `import { Search } from 'components/Search';
<Search />`,
    )

  DocumentedSearch.propTypes = {
    placeholder: PropTypes.string
      .description('Placeholder to be displayed in the text field.')
      .defaultValue(false),
    onSearch: PropTypes.func.description(
      'Search function that will filter the data in the main component based on user input',
    ),
  }

  return DocumentedSearch
}
