import styled from 'styled-components'
import colors from '../../utils/colors'
import { fontSizes } from '../../utils/sizes'
import Drop from './Drop'

export const StyledToolTip = styled(Drop)`
  border: 1px solid ${colors.darkGrey}};
  border-radius: 4px;
  border-bottom-left-radius: 0;
  padding: 15px;
  font-size: ${fontSizes.small};
  margin-bottom: 30px;

  &:after,
  &:before {
    content: '';
    display: block;
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
