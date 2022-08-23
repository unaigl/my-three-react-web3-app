import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import "../App.css"
import "../Button.css"
import "../Select.css"
import { changeChainById } from "./chains"

const ConnectWallet = () => {
    const injectedConnector = new InjectedConnector({
        supportedChainIds: [1, 97, 80001],
    })

    const { chainId, account, activate, active, library, deactivate } = useWeb3React()

    const activateWallet = () => {
        activate(injectedConnector)
    }
    const deactivateWallet = () => {
        deactivate(injectedConnector)
    }
    const changeChain = (_chainID) => {
        changeChainById(_chainID)
    }

    useEffect(() => {
        if (!chainId) return
        document.getElementById('select-form').value = chainId
    }, [chainId])



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
            <div className='box'>
                <select id='select-form' onChange={e => {
                    let _chainID = e.target.value
                    changeChain(_chainID)
                }}>
                    <option key={1} value={1}>Ethereum Chain</option>
                    <option key={97} value={97}>BSC testnet</option>
                    <option key={80001} value={80001}>Mumbai testnet</option>
                </select>
            </div>
        </main>
    )
}

export default ConnectWallet