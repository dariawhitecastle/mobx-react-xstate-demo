import { describe, PropTypes } from 'react-desc'

export const doc = ExampleQuestion => {
  const DocumentedExampleQuestion = describe(ExampleQuestion)
    .description('A ExampleQuestion')
    .usage(
      `import { ExampleQuestion } from 'components/ExampleQuestion';
<ExampleQuestion />`,
    )

  DocumentedExampleQuestion.propTypes = {
    id: PropTypes.string
      .description('The DOM id attribute value to use for the element.')
      .defaultValue(false),
    index: PropTypes.number.isRequired.description('The index of the question component.'),
    goToNextQuestion: PropTypes.func
      .description(
        'The function to call that will increment to the next question in the parent form.',
      )
      .defaultValue(null),
  }

  return DocumentedExampleQuestion
}
