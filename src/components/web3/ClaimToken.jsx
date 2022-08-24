
import { burnToken, claimToken } from './transaction'
import "../App.css"

export default function TransactionMetaMask(props) {

    const claimTokenTx = () => {
        if (props.chainId === 97 || props.chainId === 80001) {
            claimToken(props.provider, props.account, props.chainId, /* amount || */ 1)
        } else {
            scrollTo(0, 0)
            alert('Tokens are only available in BSC and Polygon testnets')
        }
    }
    const burnTokenTx = () => {
        if (props.chainId === 97 || props.chainId === 80001) {
            burnToken(props.provider, props.account, props.chainId, 1)
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
        </div>
    )
}
