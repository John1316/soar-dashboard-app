import React from 'react'
import GlobalContextProvider from './context/GlobalContext'
import FormContextProvider from './context/FormContext'
import { NextUIProvider } from '@nextui-org/react'

export default function Providers({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <GlobalContextProvider>
            <FormContextProvider>
                <NextUIProvider>
                    {children}
                </NextUIProvider>
            </FormContextProvider>
        </GlobalContextProvider>
    )
}
