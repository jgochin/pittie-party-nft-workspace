import ethers, { BigNumber } from 'ethers'
import NetworkConfigInterface from '../../../smart-contract/lib/NetworkConfigInterface';

declare interface State {
    userAddress: string | null;
    network: ethers.providers.Network | null;
    networkConfig: NetworkConfigInterface;
    totalSupply: number;
    maxSupply: number;
    maxMintAmountPerTx: number;
    tokenPrice: BigNumber;
    isPaused: boolean;
    isWhitelistMintEnabled: boolean;
    isUserInWhitelist: boolean;
    merkleProofManualAddress: string;
    merkleProofManualAddressFeedbackMessage: string | null;
    errorMessage: string | null;
}

