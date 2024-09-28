import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SidebarItem({
    icon,
    title,
    link,
}: {
    icon: React.ReactElement,
    title: string,
    link: string,
}) {
  return (
    <div className={`sidebar__content--item `}>
        <NavLink to={link} className={({isActive}) => `${(isActive && link !== '/#') ? `sidebar__content--item-active` : ``} flex items-center gap-[26px]`}>
            {icon}
            <p className='sidebar__content--item-text'>{title}</p>
        </NavLink>
    </div>
  )
}
