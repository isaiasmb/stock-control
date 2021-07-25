import * as S from './styles'
import { mainMenu } from './menus'
import MenuItemLink from './MenuItemLink'
import MenuDropdown from './MenuDropdown'

const MainMenu = () => (
  <S.MainMenu>
    {mainMenu.map((menu) => {
      if (!menu.submenu) {
        return (
          <S.MenuItem>
            <MenuItemLink to={menu.to!}>{menu.label}</MenuItemLink>
          </S.MenuItem>
        )
      }

      if (menu.submenu) {
        return <MenuDropdown label={menu.label} menuItems={menu.submenu} />
      }
    })}
  </S.MainMenu>
)

export default MainMenu
