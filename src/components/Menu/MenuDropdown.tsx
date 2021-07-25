import { useRef, useState } from 'react'
import * as MC from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

import * as S from './styles'
import * as helpers from './helpers'
import MenuItemLink from './MenuItemLink'
import { MenuItem } from './menus'

type MenuDropdownProps = {
  label: string | React.ReactNode
  menuItems: MenuItem[]
}

const MenuDropdown = ({ label, menuItems }: MenuDropdownProps) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLLIElement>(null)

  return (
    <>
      <S.MenuItem>
        <MC.MenuItem
          ref={ref}
          color="inherit"
          onClick={() => helpers.handleToggle(setOpen)}
        >
          {label}
          <KeyboardArrowDownIcon />
        </MC.MenuItem>
      </S.MenuItem>
      <MC.Popper open={open} anchorEl={ref.current} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <S.Grow {...TransitionProps} placement={placement}>
            <MC.Paper>
              <MC.ClickAwayListener
                onClickAway={(event) =>
                  helpers.handleClose(event, setOpen, ref)
                }
              >
                <MC.MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={(event) =>
                    helpers.handleListKeyDown(event, setOpen)
                  }
                >
                  {menuItems.map(
                    (menuItem) =>
                      (menuItem.to && (
                        <MenuItemLink
                          key={`${menuItem.label}-${
                            menuItem.to && menuItem.to
                          }`}
                          onClick={(event) => {
                            menuItem.onClick?.()
                            helpers.handleClose(event, setOpen, ref)
                          }}
                          to={menuItem.to}
                        >
                          {menuItem.label}
                        </MenuItemLink>
                      )) || (
                        <MC.MenuItem
                          key={`${menuItem.label}-${
                            menuItem.to && menuItem.to
                          }`}
                          onClick={(event) => {
                            menuItem.onClick?.()
                            helpers.handleClose(event, setOpen, ref)
                          }}
                        >
                          {menuItem.label}
                        </MC.MenuItem>
                      )
                  )}
                </MC.MenuList>
              </MC.ClickAwayListener>
            </MC.Paper>
          </S.Grow>
        )}
      </MC.Popper>
    </>
  )
}

export default MenuDropdown
