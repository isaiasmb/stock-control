import { useState } from 'react'
import * as MC from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import * as S from './styles'
import ListItemLink from './ListItemLink'
import { mainMenu } from './menus'

const MobileMenu = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setOpen(!open)
  }

  return (
    <S.MobileMenu>
      <MC.IconButton
        onClick={toggleOpen}
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </MC.IconButton>

      <MC.Drawer anchor="left" open={open} onClose={toggleOpen}>
        <MC.List>
          {mainMenu.map((menu) => {
            if (!menu.submenu) {
              return (
                <ListItemLink
                  key={menu.label}
                  onClick={toggleOpen}
                  to={menu.to ? menu.to : ''}
                  button
                >
                  <MC.ListItemText primary={menu.label} />
                </ListItemLink>
              )
            }

            if (menu.submenu) {
              return (
                <S.SubmenuMobileWrapper key={menu.label}>
                  <MC.ListItem>
                    <MC.ListItemText primary={menu.label} />
                  </MC.ListItem>

                  <S.SubmenuMobile>
                    {menu.submenu.map((submenu) => (
                      <ListItemLink
                        key={submenu.label}
                        onClick={toggleOpen}
                        to={submenu.to ? submenu.to : ''}
                        button
                      >
                        <MC.ListItemText primary={submenu.label} />
                      </ListItemLink>
                    ))}
                  </S.SubmenuMobile>
                </S.SubmenuMobileWrapper>
              )
            }
          })}
        </MC.List>
      </MC.Drawer>
    </S.MobileMenu>
  )
}

export default MobileMenu
