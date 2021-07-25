import * as MC from '@material-ui/core'

import { useTheme } from 'styled-components'

import MobileMenu from './MobileMenu'
import MainMenu from './MainMenu'
import RightMenu from './RightMenu'
import * as S from './styles'

const App = () => {
  const theme = useTheme()
  const maxSm = MC.useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <MC.AppBar position="static">
      <MC.Container maxWidth="lg">
        <S.Toolbar>
          {maxSm && <MobileMenu />}
          <S.LeftMenu>
            <MC.Typography variant="h6" noWrap>
              Stock Control
            </MC.Typography>

            {!maxSm && <MainMenu />}
          </S.LeftMenu>
          <RightMenu />
        </S.Toolbar>
      </MC.Container>
    </MC.AppBar>
  )
}

export default App
