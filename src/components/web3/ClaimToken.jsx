
import { burnToken, claimToken } from './transaction'
import "../App.css"

export default function TransactionMetaMask(props) {

    // const { useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

    // const chainId = useChainId()
    // const accounts = useAccounts()
    // const provider = useProvider()

    // attempt to connect eagerly on mount
    // useEffect(() => {
    //     void metaMask.connectEagerly()
    // }, [])

    const claimTokenTx = () => {
        if (props.chainId === 97 || props.chainId === 80001) {
            claimToken(props.provider, props.accounts, props.chainId, /* amount || */ 1)
        } else {
            scrollTo(0, 0)
            alert('Tokens are only available in BSC and Polygon testnets')
        }
    }
    const burnTokenTx = () => {
        if (props.chainId === 97 || props.chainId === 80001) {
            burnToken(props.provider, props.accounts, props.chainId, 1)
        } else {
            scrollTo(0, 0)
            alert('Tokens are only available in BSC and Polygon testnets')
        }
    }

    return (
        <div className='token-buttons'>
            <button type="button" className='button-3' onClick={claimTokenTx}>
                Claim Token
            </button>
            <button type="button" className='button-3' onClick={burnTokenTx}>
                Burn Token
            </button>
            {/* <Card
                accounts={accounts}
                setbuttonOpenModal={props.setbuttonOpenModal}
                buttonOpenModal={props.buttonOpenModal}
                disabled={props.tokens}
                buttonContent={'Claim'}
                buttonTwoContent={'Burn'}
                claim={claimTokenTx}
                burn={burnTokenTx}
                photo={'/cardPhotos/metamask.jpg'}
                url={'https://dev.to/metamask/a-guide-to-metamask-ecosystem-leading-ethereum-blockchain-wallet-59k7'}
                urlText={' Metamask'}
            /> */}
        </div>
    )
}
