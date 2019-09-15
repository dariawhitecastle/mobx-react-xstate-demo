import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { FormClose } from 'grommet-icons'
import { Text } from 'grommet'
import { grommet } from 'grommet/themes'

import { Box } from '../../Box'
import { Button } from '../../Button'
import { Container } from '../../Container'
import { Select } from '..'
import README from '../README.md'

const ALL_OPTIONS = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10']

storiesOf('Select', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Multi', () => <MultiSelect />)

class MultiSelect extends Component {
  state = { selected: [] }

  onRemoveOption = option => {
    const { selected } = this.state
    const nextSelected = [...selected]
    nextSelected.splice(nextSelected.indexOf(ALL_OPTIONS.indexOf(option)), 1)
    this.setState({ selected: nextSelected })
  }

  renderOptions = option => (
    <Button
      key={`option_tag_${option}`}
      href="#"
      onClick={event => {
        event.preventDefault()
        event.stopPropagation()
        this.onRemoveOption(option)
      }}
      onFocus={event => event.stopPropagation()}
    >
      <Box
        align="center"
        direction="row"
        gap="xsmall"
        pad={{ vertical: 'xsmall', horizontal: 'small' }}
        margin="xsmall"
        background="accent-1"
        round="large"
      >
        <Text size="small" color="white">
          {option}
        </Text>
        <Box background="white" round="full" margin={{ left: 'xsmall' }}>
          <FormClose color="accent-1" size="small" style={{ width: '12px', height: '12px' }} />
        </Box>
      </Box>
    </Button>
  )

  renderOption = (option, index, options, state) => (
    <Box pad="small" background={state.active ? 'active' : undefined}>
      {option}
    </Box>
  )

  render() {
    const { selected } = this.state
    return (
      <Container full theme={grommet}>
        <Box fill align="center" justify="center">
          <Select
            closeOnChange={false}
            multiple
            value={
              <Box wrap direction="row" width="small">
                {selected && selected.length ? (
                  selected.map(index => this.renderOptions(ALL_OPTIONS[index]))
                ) : (
                  <Box pad={{ vertical: 'xsmall', horizontal: 'small' }} margin="xsmall">
                    Select Option
                  </Box>
                )}
              </Box>
            }
            options={ALL_OPTIONS}
            selected={selected}
            disabled={[2, 6]}
            onChange={({ selected: nextSelected }) => {
              this.setState({ selected: nextSelected.sort() })
            }}
          >
            {this.renderOption}
          </Select>
        </Box>
      </Container>
    )
  }
}
