import { BigNumber } from "ethers";
import { State } from "src/app/types";
import CollectionConfig from "../../../smart-contract/config/CollectionConfig";

const defaultState: State = {
    userAddress: null,
    network: null,
    networkConfig: CollectionConfig.mainnet,
    totalSupply: 0,
    maxSupply: 0,
    maxMintAmountPerTx: 0,
    tokenPrice: BigNumber.from(0),
    isPaused: true,
    isWhitelistMintEnabled: false,
    isUserInWhitelist: false,
    merkleProofManualAddress: "",
    merkleProofManualAddressFeedbackMessage: null,
    errorMessage: null,
};

export default class StateManager {
    current: State = defaultState

    setState(changes: any, clearError: boolean = true): void {
        if (clearError) this.current.errorMessage = null
        this.current = Object.assign({}, this.current, changes)
    }

    setError(error: any = null): void {
        let errorMessage = 'Unknown error...';

        if (null === error || typeof error === 'string') {
            errorMessage = error;
        } else if (typeof error === 'object') {
            // Support any type of error from the Web3 Provider...
            if (error?.error?.message !== undefined) {
                errorMessage = error.error.message;
            } else if (error?.data?.message !== undefined) {
                errorMessage = error.data.message;
            } else if (error?.message !== undefined) {
                errorMessage = error.message;
            }
        }

        this.setState({
            errorMessage: null === errorMessage ? null : errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1),
        }, false);
    }
}