import styled, { css } from 'styled-components'
import * as MC from '@material-ui/core'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacing(4)}px;
  `}
`

export const Subtitle = styled(MC.Typography)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing(2)}px;
  `}
`

export const TableCell = styled(MC.TableCell)`
  border-bottom: none;
`
