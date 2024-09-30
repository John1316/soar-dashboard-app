
type GlobalContextProps = {
    isMenuOpen: boolean,
    handleMenuToggle : () => void
}
type FormContextProps = {
    retrieveFromLocalStorage: () => void,
    editProfileSettingValues: EditProfile,
    setEditProfileSettingValues: SetStateAction<EditProfile>
}
type ResponseModalProps = {
    type: string, 
    message: string, 
    visible:boolean, 
    onClose: () => void
}