import { describe, PropTypes } from 'react-desc'

export const doc = MultiStepForm => {
  const DocumentedMultiStepForm = describe(MultiStepForm)
    .description('A MultiStepForm')
    .usage(
      `import { MultiStepForm } from 'components/MultiStepForm';
<MultiStepForm />`,
    )

  DocumentedMultiStepForm.propTypes = {
    questions: PropTypes.array.isRequired.description(
      'An array of questions to be cycled through within the form.',
    ),
  }

  return DocumentedMultiStepForm
}
