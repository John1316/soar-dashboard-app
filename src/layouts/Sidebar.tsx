import { useContext } from "react";
import HomeIcon from "../assets/svgs/HomeIcon";
import SettingIcon from "../assets/svgs/SettingIcon";
import SidebarItem from "../ui/components/sidebar/SidebarItem";
import { GlobalContext } from "../context/GlobalContext";
import TransactionsIcon from "../assets/svgs/TransactionsIcon";
import AccountIcon from "../assets/svgs/AccountIcon";
import InvestmentIcon from "../assets/svgs/InvestmentIcon";
import LoanIcon from "../assets/svgs/LoanIcon";
import CreditCardsIcon from "../assets/svgs/CreditCardsIcon";
import ServicesIcon from "../assets/svgs/ServicesIcon";
import MyPrivilegesIcon from "../assets/svgs/MyPrivilegesIcon";

export default function Sidebar() {
  const globalContext = useContext(GlobalContext)
  const {
    isMenuOpen,
  } = globalContext as GlobalContextProps
  return (
    <aside className={`sidebar ${isMenuOpen ? `active` : ``}`}>
      <div className="sidebar__logo">
        <img src='/logo.svg' alt="logo" />
      </div>
      <div className="sidebar__content">
        <SidebarItem icon={<HomeIcon />} link="/" title="Dashboard" />
        <SidebarItem icon={<TransactionsIcon />} link="/#" title="Transactions" />
        <SidebarItem icon={<AccountIcon />} link="/#" title="Accounts" />
        <SidebarItem icon={<InvestmentIcon />} link="/#" title="Investments" />
        <SidebarItem icon={<CreditCardsIcon />} link="/creditCards" title="Credit Cards" />
        <SidebarItem icon={<LoanIcon />} link="/#" title="Loans" />
        <SidebarItem icon={<ServicesIcon />} link="/#" title="Services" />
        <SidebarItem icon={<MyPrivilegesIcon />} link="/#" title="My Privileges" />
        <SidebarItem icon={<SettingIcon />} link="/setting" title="Setting" />
      </div>
    </aside>
  )
}
