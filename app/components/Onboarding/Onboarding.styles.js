import styled from 'styled-components'

import colors from '../../utils/colors'
import { fontSizes } from '../../utils/sizes'
import { Box } from '../Box'
import { Button } from '../Button'
import { Drop } from '../Drop'
import { BUTTON_MAX_WIDTH } from './constants'

export const StyledLink = styled(Button)`
  border-bottom: 2px solid ${colors.primaryText};
`
export const StyledRadioButtonWrapper = styled(Box).attrs(props => ({ ...props }))`
  padding: 16px;
  margin: 10px;
  border: ${props =>
    props.selected ? `2px solid ${colors.primaryText}` : `1px solid ${colors.mediumGrey}`};
  border-radius: 4px;
  max-width: ${BUTTON_MAX_WIDTH}px;
`

export const StyledToolTip = styled(Drop)`
  border: 1px solid ${colors.darkGrey}};
  border-radius: 4px;
  border-bottom-left-radius: 0;
  padding: 15px;
  max-height: 150px;
  max-width: 250px;
  font-size: ${fontSizes.small};
  margin: 5px;

  &:after,
  &:before {
    content: '';
    position: absolute;
    width: 0;
    border-style: solid;
  }

  &:after {
    border-color: transparent transparent transparent white;
    border-width: 21px 1px 0px 20px;
    transform: rotate(90deg);
    left: 0;
    bottom: -17px;
  }

  &:before {
    content: '';
    background-color: transparent;
    position: absolute;
    left: 0;
    bottom: -19px;
    transform: rotate(90deg);
    border-color: transparent transparent transparent ${colors.darkGrey};
    border-style: solid;
    border-width: 20px 0px 0px 18px;
  }
`
