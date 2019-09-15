import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import colors from '../../utils/colors'
import { Text } from '../Text'

export const StyledText = styled(Text).attrs(props => ({ ...props }))`
  font-size: ${props => props.fontSize || '16px'};
  font-family: 'Bryant Pro';
`

export const StyledLink = styled(NavLink).attrs(props => ({ ...props }))`
  color: ${colors.primaryText};
  text-decoration: none;

  &:focus,
  &:hover {
    text-decoration: underline;
  }

  &:visited,
  &:link,
  &:active {
    color: ${colors.primaryText};
  }
`
