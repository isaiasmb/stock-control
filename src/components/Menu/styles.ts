import styled, { css } from 'styled-components'
import * as MC from '@material-ui/core'

type GrowProps = {
  placement: MC.PopperPlacementType
} & MC.GrowProps

export const Grow = styled(MC.Grow as React.FunctionComponent<GrowProps>)`
  ${({ placement }) => css`
    transform-origin: ${placement === 'bottom'
      ? 'center top'
      : 'center bottom'};
  `}
`

export const Toolbar = styled(MC.Toolbar)`
  display: flex;
  justify-content: space-between;
`

export const MobileMenu = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacing(3)}px;
  `}
`

export const SubmenuMobile = styled.div`
  ${({ theme }) => css`
    padding-left: ${theme.spacing(3)}px;
    background-color: ${theme.palette.grey[100]};
  `}
`

export const MainMenu = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    display: flex;
    margin-left: ${theme.spacing(5)}px;
  `}
`

export const MenuItem = styled.li`
  ${({ theme }) => css`
    margin-right: ${theme.spacing(3)}px;
  `}
`

export const LeftMenu = styled.div`
  display: flex;
  align-items: center;
`

export const RightMenu = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
`
