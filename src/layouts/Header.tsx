import SearchInput from '../ui/components/header/SearchInput'
import SettingButton from '../ui/components/header/SettingButton'
import NotificationButton from '../ui/components/header/NotificationButton'
import AvatarButton from '../ui/components/header/AvatarButton'
import SidebarBurgerIcon from '../assets/svgs/SidebarBurgerIcon';
import { useContext } from 'react';
import { Button } from '@nextui-org/react';
import { GlobalContext } from '../context/GlobalContext';

export default function Header({name}: HeaderProps) {
  const globalContext = useContext(GlobalContext)
  const {
    handleMenuToggle
  } = globalContext as GlobalContextProps
  return (
    <header className='header'>
        <Button 
          className='header__menu--button lg:hidden' 
          onClick={handleMenuToggle}
        >
          <SidebarBurgerIcon />
        </Button>
      <div className='header__left'>
        <h4 className='header__title'>{name}</h4>
        {/* Burger icon for small screens */}
      </div>

      {/* Show this menu conditionally based on screen size or menu state */}
      <div className={`header__right`}>
        <div className="header__right--apps lg:flex hidden">
          <SearchInput />
          <SettingButton />
          <NotificationButton />

        </div>
        <AvatarButton />
      </div>
    </header>
  )
}
