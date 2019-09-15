import styled from 'styled-components'
import { FormField } from 'grommet'
import colors from '../../utils/colors'

export const StyledFormField = styled(FormField)`
  input {
    height: 60px;
    padding-left: 20px;
    font-size: 16px;
    font-weight: normal;
    color: ${colors.primaryText};
  }

  label + div {
    border: solid 1px;
    border-radius: 4px;
    border-color: ${({ error }) => (error ? colors.coral : colors.mediumGrey)};
    &:focus-within {
      transition: 0.3s ease-in-out;
      border-color: ${colors.accent};
    }
  }

  div {
    border-bottom: none;
  }
  label {
    margin-left: 0;
    div {
      input {
        display: none;
      }
      div {
        margin-top: 20px;
        border: solid 1px ${colors.primaryText};
        svg {
          stroke: ${colors.primaryText};
        }
      }
    }
    span {
      padding-top: 20px;
      font-size: 16px;
      color: ${colors.primaryText};
    }
  }
`
