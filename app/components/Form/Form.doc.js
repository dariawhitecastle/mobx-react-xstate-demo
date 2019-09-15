import { describe, PropTypes } from 'react-desc'

export const doc = Form => {
  const DocumentedForm = describe(Form)
    .description('A form that manages state for its fields.')
    .usage(
      `import { Form } from 'grommet';
<Form />`,
    )
    .intrinsicElement('form')

  DocumentedForm.propTypes = {
    errors: PropTypes.shape({})
      .description(
        `An object representing any errors in the data. They keys should
        match the keys in the value object.`,
      )
      .defaultValue({}),
    messages: PropTypes.shape({
      invalid: PropTypes.string,
      required: PropTypes.string,
    })
      .description('Custom validation messages.')
      .defaultValue({ invalid: 'invalid', required: 'required' }),
    onChange: PropTypes.func.description(
      'Function that will be called when any fields are updated.',
    ),
    onSubmit: PropTypes.func.description(
      `Function that will be called when the form is submitted. The
      single argument is an event containing the latest value object
      via \`event.value\`.`,
    ),
    onReset: PropTypes.func.description(
      `Function that will be called when the form is reset. The
      single argument is the event provided by react.`,
    ),
    value: PropTypes.shape({})
      .description('An object representing all of the data in the form.')
      .defaultValue({}),
  }

  return DocumentedForm
}
