
import React from 'react';
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

function getLibrary(provider) {
    const library = new Web3Provider(provider)
    library.pollingInterval = 12000
    return library
}

function Web3ContextProvider({ children }) {

    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            {children}
        </Web3ReactProvider>
    )
}

export default Web3ContextProvider