import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import "../App.css"
import "../Button.css"

const ConnectWallet = () => {
    const injectedConnector = new InjectedConnector({
        supportedChainIds: [1, 4, 5, 10, 42, 56, 69, 97, 137, 80001, 42161, 43113, 43114, 421611],
    })


    const { chainId, account, activate, active, library, deactivate } = useWeb3React()

    const activateWallet = () => {
        activate(injectedConnector)
    }
    const deactivateWallet = () => {
        deactivate(injectedConnector)
    }

    // useEffect(() => {
    // });


    return (
        <main className="web3-navbar">
            <h2 >Welcome to 3D web3 series</h2>
            <div className='connect-box'>
                <b>ChainId: {chainId}</b>
                <div>Account: {account}</div>
                {active ? (
                    <button type="button" className='button-4' onClick={deactivateWallet}>
                        Disconnect
                    </button>
                ) : (
                    <button type="button" className='button-3' onClick={activateWallet}>
                        Connect Wallet
                    </button>
                )}
            </div>
        </main>
    )
}

export default ConnectWallet