import { Component, Input, OnInit } from "@angular/core";
import CollectionConfig from "../../../../smart-contract/config/CollectionConfig";
import NftContractType from '../../classes/nft-contract-type';
import { ethers } from "ethers"
import { ExternalProvider, Web3Provider } from "@ethersproject/providers";
import detectEthereumProvider from "@metamask/detect-provider";
import NetworkConfigInterface from "../../../../smart-contract/lib/NetworkConfigInterface";
import Whitelist from "../../classes/whitelist"
import StateManager from "src/classes/state-manager";

const ContractAbi = require('../../../../smart-contract/artifacts/contracts/' + CollectionConfig.contractName + '.sol/' + CollectionConfig.contractName + '.json').abi;

@Component({
  selector: "wallet-connector",
  templateUrl: "./wallet-connector.component.html",
  styleUrls: ["./wallet-connector.component.scss"]
})
export class WalletConnectorComponent implements OnInit {
  @Input() stateManager: StateManager | null = null
  walletConnected: boolean = false;
  provider!: Web3Provider;
  contract!: NftContractType;

  // constructor() {
  //   this.state = defaultState;
  // }

  /**
   * For now we only support MetaMask.
   */
  async connectWallet() {
    console.info('[connectWallet] Attempting to connect to wallet.')

    const browserProvider = await detectEthereumProvider() as ExternalProvider;

    this.walletConnected = browserProvider?.isMetaMask ?? false;

    if(this.walletConnected) {

      console.info('[connectWallet] Connected! Get a reference to the Web3Provider.')
      this.provider = new ethers.providers.Web3Provider(browserProvider);

      
      console.info('[connectWallet] Registering wallet events.')
      this.registerWalletEvents(browserProvider);

      console.info('[connectWallet] Initializing wallet.')
      await this.initWallet();

      console.info('[connectWallet] Wallet initialized.')
    }
  }

  async initWallet(): Promise<void> {
    const walletAccounts = await this.provider.listAccounts();

    if (walletAccounts.length === 0) {
      return;
    }

    const network = await this.provider.getNetwork();
    let networkConfig: NetworkConfigInterface;

    if (network.chainId === CollectionConfig.mainnet.chainId) {
      networkConfig = CollectionConfig.mainnet;
    } else if (network.chainId === CollectionConfig.testnet.chainId) {
      networkConfig = CollectionConfig.testnet;
    } else {
      this.stateManager!.setError("Unsupported network!") 

      return;
    }

    this.stateManager!.setState({
      userAddress: walletAccounts[0],
      network,
      networkConfig,
    })

    if (await this.provider.getCode(CollectionConfig.contractAddress!) === '0x') {
      this.stateManager?.setError({errorMessage: "Could not find the contract, are you connected to the right chain?"})

      return;
    }

    this.contract = new ethers.Contract(
      CollectionConfig.contractAddress!,
      ContractAbi,
      this.provider.getSigner()
    ) as unknown as NftContractType;

    this.stateManager!.setState({
      maxSupply: (await this.contract.maxSupply()).toNumber(),
      totalSupply: (await this.contract.totalSupply()).toNumber(),
      maxMintAmountPerTx: (await this.contract.maxMintAmountPerTx()).toNumber(),
      tokenPrice: await this.contract.cost(),
      isPaused: await this.contract.paused(),
      isWhitelistMintEnabled: await this.contract.whitelistMintEnabled(),
      isUserInWhitelist: Whitelist.contains(this.stateManager?.current.userAddress ?? ''),
    });
  }

  registerWalletEvents(browserProvider: ExternalProvider): void {
    // @ts-ignore
    browserProvider.on('accountsChanged', () => {
      this.initWallet();
    });

    // @ts-ignore
    browserProvider.on('chainChanged', () => {
      window.location.reload();
    });
  }

  ngOnInit(): void {
    this.connectWallet();
  }

}
