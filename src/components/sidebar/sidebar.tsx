import React from 'react'

import { MdEmail } from 'react-icons/md'
import { IoLocationSharp, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

// import Image from 'next/image'

import {
  github,
  linkedin,
  email,
  secondary_email,
  full_name,
  title,
} from '@configs/author'

import { isDev } from '@utils/env'

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar_inner">
        <div className="sidebar_inner_pic">
          <div className="sidebar_inner_pic_override">
            <img
              src={require('@images/ray.png?webp')}
              alt="Ray Andrew"
              className="sidebar_inner_pic_override_img"
              width={158}
              height={158}
            />
          </div>
        </div>
        <div className="sidebar_inner_info">
          <div className="sidebar_inner_info_name">{full_name}</div>
          <div className="sidebar_inner_info_additional">{title}</div>
          <a href={`mailto:${email}`} className="sidebar_inner_info_additional">
            <MdEmail size={16} className="sidebar_inner_info_additional_icon" />
            {email}
          </a>
          <a
            href={`mailto:${secondary_email}`}
            className="sidebar_inner_info_additional"
          >
            <MdEmail size={16} className="sidebar_inner_info_additional_icon" />
            {secondary_email}
          </a>
          <a href={github} className="sidebar_inner_info_additional">
            <IoLogoGithub
              size={16}
              className="sidebar_inner_info_additional_icon"
            />{' '}
            rayandrews
          </a>
          <a href={linkedin} className="sidebar_inner_info_additional">
            <IoLogoLinkedin
              size={16}
              className="sidebar_inner_info_additional_icon"
            />{' '}
            ray-andrew
          </a>
          <a
            href="https://www.google.com/maps/place/Jakarta"
            className="sidebar_inner_info_additional"
          >
            <IoLocationSharp
              size={16}
              className="sidebar_inner_info_additional_icon"
            />{' '}
            Jakarta, Indonesia
          </a>
        </div>
      </div>
    </aside>
  )
}

if (isDev) {
  Sidebar.displayName = 'Sidebar'
}

export default Sidebar
