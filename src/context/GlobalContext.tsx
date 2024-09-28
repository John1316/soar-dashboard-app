/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";

export const GlobalContext = createContext<GlobalContextProps | null>(null);

export default function GlobalContextProvider({
    children
}: {
    children: React.ReactNode
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle the menu open/close state
    const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
    return (
        <GlobalContext.Provider value={{
            handleMenuToggle,
            isMenuOpen
        }}>
            {children}
        </GlobalContext.Provider>
    );
}