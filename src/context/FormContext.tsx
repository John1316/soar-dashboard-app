/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useState } from "react";

export const FormContext = createContext<FormContextProps | null>(null);

export default function FormContextProvider({
    children
}: {
    children: React.ReactNode
}) {
    const [editProfileSettingValues, setEditProfileSettingValues] = useState<EditProfile>({
        name: '',
        username: '',
        email: '',
        password: '',
        dateOfBirth: '',
        presentAddress: '',
        permanentAddress: '',
        postalCode: '',
        city: '',
        country: '',
        avatar: ''
    });
  // Retrieve data from local storage
    const retrieveFromLocalStorage = () => {
        const savedData: any = localStorage.getItem('userSettings');
        if (savedData) {
            setEditProfileSettingValues(JSON.parse(savedData))
        }
    };
    useEffect(() => {
        retrieveFromLocalStorage()
    
        return () => {
            
        }
    }, [])
    
    // Toggle the menu open/close state
    return (
        <FormContext.Provider value={{
            retrieveFromLocalStorage,
            editProfileSettingValues
        }}>
            {children}
        </FormContext.Provider>
    );
}