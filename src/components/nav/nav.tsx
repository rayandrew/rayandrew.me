import React from 'react'

import { FiSun, FiMoon } from 'react-icons/fi'

import { useColorMode } from '@contexts/color-mode'

import { name } from '@configs/author'
import routes from '@configs/routes'

import { NavLink } from '@components/link'
import { isDev } from '@utils/env'

const Nav: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <nav className="nav">
      <div className="nav_inner">
        <NavLink spanClassName="logo" href="/">
          {name}
        </NavLink>
        <div className="nav_ext">
          {routes.map(({ href, label }) => (
            <NavLink
              className="nav_ext_link"
              spanClassName="nav_link_label"
              key={`${href}${label}`}
              href={href}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="nav_inner">
        <button
          onClick={toggleColorMode}
          className="nav_toggle"
          aria-label="Toggle Color Mode"
        >
          {colorMode === 'dark' ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </nav>
  )
}

if (isDev) {
  Nav.displayName = 'Nav'
}

export default Nav
