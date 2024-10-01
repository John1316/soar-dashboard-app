import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FormContext } from "../../../context/FormContext";
export default function AvatarButton() {
  const formContext = useContext(FormContext)
  const {editProfileSettingValues} = formContext as FormContextProps
  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <Avatar
          as="button"
          classNames={{
            img: '!opacity-1'
          }}
          className="transition-transform p-0 bg-white header__right--avatar"
          src={
            (() => {
              if(editProfileSettingValues.avatar){
                return editProfileSettingValues.avatar
              }
              return '/avatar.svg'
            })()
          }
        />
      </DropdownTrigger>
      {editProfileSettingValues?.email && <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{editProfileSettingValues?.email.slice(0,25) || ""}</p>
        </DropdownItem>
        <DropdownItem key="settings">
          <Link to={"/setting"}>My Settings</Link>
        </DropdownItem>
      </DropdownMenu>}
    </Dropdown>
  );
}
