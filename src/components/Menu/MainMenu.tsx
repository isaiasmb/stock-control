import * as S from './styles'
import { mainMenu } from './menus'
import MenuItemLink from './MenuItemLink'
import MenuDropdown from './MenuDropdown'

const MainMenu = () => (
  <S.MainMenu>
    {mainMenu.map((menu) => {
      if (!menu.submenu) {
        return (
          <MenuItemLink key={menu.label} to={menu.to!}>
            {menu.label}
          </MenuItemLink>
        )
      }

      if (menu.submenu) {
        return (
          <MenuDropdown
            key={menu.label}
            label={menu.label}
            menuItems={menu.submenu}
          />
        )
      }
    })}
  </S.MainMenu>
)

export default MainMenu
