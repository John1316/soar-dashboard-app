import { useContext } from "react";
import HomeIcon from "../assets/svgs/HomeIcon";
import SettingIcon from "../assets/svgs/SettingIcon";
import SidebarItem from "../ui/components/sidebar/SidebarItem";
import { GlobalContext } from "../context/GlobalContext";
import TransactionsIcon from "../assets/svgs/TransactionsIcon";

export default function Sidebar() {
  const globalContext = useContext(GlobalContext)
  const {
    isMenuOpen,
  } = globalContext as GlobalContextProps
  return (
    <aside className={`sidebar ${isMenuOpen ? `active` : ``}`}>
      <div className="sidebar__logo">
        <img src='/logo.svg' />
      </div>
      <div className="sidebar__content">
        <SidebarItem icon={<HomeIcon />} link="/" title="Dashboard" />
        <SidebarItem icon={<TransactionsIcon />} link="/#" title="Transactions" />
        <SidebarItem icon={<SettingIcon />} link="/setting" title="Setting" />
      </div>
    </aside>
  )
}
