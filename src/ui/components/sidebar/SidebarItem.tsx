import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../../../context/GlobalContext'

export default function SidebarItem({
    icon,
    title,
    link,
}: {
    icon: React.ReactElement,
    title: string,
    link: string,
}) {
  const globalContext = useContext(GlobalContext)
  const {
    handleMenuToggle
  } = globalContext as GlobalContextProps 
  return (
    <NavLink to={link} onClick={handleMenuToggle} className={({isActive}) => `sidebar__content--item ${(isActive && link !== '/#') ? `sidebar__content--item-active` : ``} flex items-center gap-[26px]`}>
            {icon}
            <p className='sidebar__content--item-text'>{title}</p>
    </NavLink>
  )
}
