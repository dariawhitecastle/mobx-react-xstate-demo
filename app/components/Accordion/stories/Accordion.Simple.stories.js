import React from 'react'
import PropTypes from 'prop-types'
import { storiesOf } from '@storybook/react'

import { Grommet, grommet } from 'grommet'
import { Box } from '../../Box'
import Accordion from '../Accordion'
import AccordionPanel from '../AccordionPanel'

storiesOf('Accordion', module).add('SimpleAccordion', () => <SimpleAccordion />)

const SimpleAccordion = props => {
  const { animate, multiple, ...rest } = props
  return (
    <Grommet theme={grommet}>
      <Box {...rest}>
        <Accordion animate={animate} multiple={multiple}>
          <AccordionPanel label="Panel 1">
            <Box background="light-2" overflow="auto" height="medium">
              <Box height="large" flex={false}>
                Panel 1 contents
              </Box>
            </Box>
          </AccordionPanel>
          <AccordionPanel label="Panel 2">
            <Box background="light-2" style={{ height: '50px' }}>
              Panel 2 contents
            </Box>
          </AccordionPanel>
          <AccordionPanel label="Panel 3">
            <Box background="light-2" style={{ height: '300px' }}>
              Panel 3 contents
            </Box>
          </AccordionPanel>
        </Accordion>
      </Box>
    </Grommet>
  )
}

SimpleAccordion.propTypes = {
  animate: PropTypes.bool.isRequired,
  multiple: PropTypes.bool.isRequired,
}
