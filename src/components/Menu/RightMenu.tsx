import * as MC from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import NotificationsIcon from '@material-ui/icons/Notifications'

import * as S from './styles'
import { profileMenu } from './menus'
import MenuDropdown from './MenuDropdown'

const menuWithLogout = [...profileMenu]
menuWithLogout[0].submenu?.push({
  label: 'Logout',
  onClick: () => console.log('Logout')
})

const RightMenu = () => {
  return (
    <S.RightMenu>
      <MC.IconButton aria-label="show 17 new notifications" color="inherit">
        <MC.Badge badgeContent={17} color="secondary">
          <NotificationsIcon />
        </MC.Badge>
      </MC.IconButton>

      {menuWithLogout.map((menuItem) => (
        <MenuDropdown
          key={menuItem.label}
          label={<PersonIcon />}
          menuItems={menuItem.submenu!}
        />
      ))}
    </S.RightMenu>
  )
}

export default RightMenu
