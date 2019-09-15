import React, { createRef, Component } from 'react'
import { storiesOf } from '@storybook/react'

import { Grommet } from 'grommet'
import { grommet } from 'grommet/themes'
import { Box } from '../../Box'
import { Button } from '../../Button'
import { StyledToolTip } from '../Drop.styles'

import README from '../README.md'
class TooltipDrop extends Component {
  state = {
    over: false,
  }

  ref = createRef()

  render() {
    const { over } = this.state
    return (
      <Grommet theme={grommet} full>
        <Box fill align="center" justify="center">
          <Button
            label="Button"
            ref={this.ref}
            onMouseOver={() => this.setState({ over: true })}
            onMouseOut={() => this.setState({ over: false })}
            onFocus={() => {}}
            onBlur={() => {}}
          />
          {this.ref.current && over && (
            <StyledToolTip
              overflow="visible"
              elevation="large"
              align={{ bottom: 'top', left: 'right' }}
              target={this.ref.current}
            >
              <Box>tooltip contents</Box>
            </StyledToolTip>
          )}
        </Box>
      </Grommet>
    )
  }
}

storiesOf('Drop', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Tooltip', () => <TooltipDrop />)
