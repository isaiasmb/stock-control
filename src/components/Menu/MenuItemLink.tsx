import { MenuItem, TypographyProps } from '@material-ui/core'
import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

type MenuItemLinkProps = {
  to: string
} & TypographyProps<typeof MenuItem, { component?: typeof MenuItem }>

const MenuItemLink = ({ to, children, ...props }: MenuItemLinkProps) => {
  const renderLink = React.useMemo(
    () =>
      // eslint-disable-next-line react/display-name
      React.forwardRef<any, Omit<LinkProps, 'to'>>((itemProps, ref) => (
        <Link to={to} ref={ref} {...itemProps} />
      )),
    [to]
  )

  return (
    <MenuItem component={renderLink} {...props}>
      {children}
    </MenuItem>
  )
}

export default MenuItemLink
