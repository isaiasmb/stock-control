export type MenuItem = {
  label: string
  to?: string
  onClick?: () => void
}

export type Menu = {
  submenu?: Menu[]
} & MenuItem

export const mainMenu: Menu[] = [
  {
    label: 'Dashboard',
    to: '/dashboard'
  },
  {
    label: 'Products',
    submenu: [
      {
        label: 'Stock',
        to: '/stock'
      },
      {
        label: 'New product',
        to: '/new-product'
      },
      {
        label: 'Categories',
        to: '/categories'
      }
    ]
  },
  {
    label: 'Shops',
    to: '/shops'
  },
  {
    label: 'Users',
    submenu: [
      {
        label: 'All users',
        to: '/users'
      },
      {
        label: 'New user',
        to: '/new-user'
      }
    ]
  }
]

export const profileMenu: Menu[] = [
  {
    label: 'Profile',
    submenu: [
      {
        label: 'Profile',
        to: '/profile'
      },
      {
        label: 'My account',
        to: '/my-account'
      }
    ]
  }
]
