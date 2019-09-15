import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { Box } from '../../Box'
import RadioButton from '../RadioButton'
import README from '../README.md'

storiesOf('RadioButton', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Simple', () => <SimpleRadioButton />)

class SimpleRadioButton extends Component {
  constructor(props) {
    super(props)
    // eslint-disable-next-line react/prop-types
    this.state = { selected: props.selected }
  }

  onChange = event => this.setState({ selected: event.target.value })

  render() {
    const { selected } = this.state
    return (
      <Box align="center" pad="large" gap="small">
        <RadioButton
          label="Choice 1"
          name="radio"
          value="c1"
          checked={selected === 'c1'}
          onChange={this.onChange}
          {...this.props}
        />
        <RadioButton
          label="Choice 2"
          name="radio"
          value="c2"
          checked={selected === 'c2'}
          onChange={this.onChange}
          {...this.props}
        />
      </Box>
    )
  }
}
