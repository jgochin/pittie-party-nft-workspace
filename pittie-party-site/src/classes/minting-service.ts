import NftContractType from "./nft-contract-type";
import StateManager from "./state-manager";
import Whitelist from '../classes/whitelist'
import CollectionConfig from "../../../smart-contract/config/CollectionConfig";

export default class MintingService {
    constructor(private contract: NftContractType, private stateManager: StateManager) { }

    async mintTokens(amount: number): Promise<void> {
        try {
            await this.contract.mint(amount, { value: this.stateManager.current.tokenPrice.mul(amount) });
        } catch (e) {
            this.stateManager.setError(e);
        }
    }


    /**
     * 
     * @param amount 
     */
    async whitelistMintTokens(amount: number): Promise<void> {
        try {
            await this.contract.whitelistMint(amount, Whitelist.getProofForAddress(this.stateManager.current.userAddress!), { value: this.stateManager.current.tokenPrice.mul(amount) });
        } catch (e) {
            this.stateManager.setError(e);
        }
    }

    isWalletConnected(): boolean {
        return this.stateManager.current.userAddress !== null;
    }

    isContractReady(): boolean {
        return this.contract !== undefined;
    }

    isSoldOut(): boolean {
        return this.stateManager.current.maxSupply !== 0 && this.stateManager.current.totalSupply < this.stateManager.current.maxSupply;
    }

    isNotMainnet(): boolean {
        return this.stateManager.current.network !== null && this.stateManager.current.network.chainId !== CollectionConfig.mainnet.chainId;
    }

    copyMerkleProofToClipboard(): void {
        const merkleProof = Whitelist.getRawProofForAddress(this.stateManager.current.userAddress ?? this.stateManager.current.merkleProofManualAddress);

        if (merkleProof.length < 1) {
            this.stateManager.setState({
                merkleProofManualAddressFeedbackMessage: 'The given address is not in the whitelist, please double-check.',
            });

            return;
        }

        navigator.clipboard.writeText(merkleProof);

        this.stateManager.setState({
            merkleProofManualAddressFeedbackMessage: `<strong>Congratulations!</strong> <span className="emoji">🎉</span><br />
        Your Merkle Proof <strong>has been copied to the clipboard</strong>. You can adopt your Pittie!` });
    }

    generateContractUrl(): string {
        return this.stateManager.current.networkConfig.blockExplorer.generateContractUrl(CollectionConfig.contractAddress!);
    }    
}