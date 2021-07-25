import { ListItem, TypographyProps } from '@material-ui/core'
import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

type ListItemLinkProps = {
  to: string
} & TypographyProps<typeof ListItem, { component?: typeof ListItem }>

const ListItemLink = ({ to, children, ...props }: ListItemLinkProps) => {
  const renderLink = React.useMemo(
    () =>
      // eslint-disable-next-line react/display-name
      React.forwardRef<any, Omit<LinkProps, 'to'>>((itemProps, ref) => (
        <Link to={to} ref={ref} {...itemProps} />
      )),
    [to]
  )

  return (
    <ListItem component={renderLink} {...props}>
      {children}
    </ListItem>
  )
}

export default ListItemLink
