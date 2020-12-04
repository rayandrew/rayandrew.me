import React from 'react'

import Sidebar from '@components/sidebar'

import { isDev } from '@utils/env'

const Layout: React.FC = ({ children }) => {
  return (
    <main className="layout">
      <Sidebar />
      <div className="layout_inner">{children}</div>
    </main>
  )
}

if (isDev) {
  Layout.displayName = 'Layout'
}

export default Layout
