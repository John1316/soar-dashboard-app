type GlobalContextProps = {
    isMenuOpen: boolean,
    handleMenuToggle : () => void
}
type FormContextProps = {
    retrieveFromLocalStorage: () => void,
    editProfileSettingValues: EditProfile,
}