import React from 'react'

import classname from '@utils/classname'

import Link, { LinkProps } from './link'

const NavLink = React.memo(
  React.forwardRef<HTMLAnchorElement, LinkProps>(
    ({ className, ...props }, ref) => {
      return (
        <Link
          {...props}
          ref={ref}
          className={classname('link', 'nav_link', className)}
        />
      )
    },
  ),
)

export default NavLink
