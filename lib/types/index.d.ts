import { Account } from './account';
import { Claim } from './claim';
import * as CONST from './consts';
import * as Crypto from './crypto';
import { Identity } from './identity';
import * as NeoCore from './neocore';
import RestClient from './network/rest/restClient';
import RpcClient from './network/rpc/rpcClient';
import { WebsocketClient } from './network/websocket/websocketClient';
import * as scrypt from './scrypt';
import { SDK } from './sdk/index';
import AbiFunction from './smartcontract/abi/abiFunction';
import AbiInfo from './smartcontract/abi/abiInfo';
import { Parameter, ParameterType } from './smartcontract/abi/parameter';
import Struct from './smartcontract/abi/struct';
import * as GovernanceTxBuilder from './smartcontract/nativevm/governanceContractTxBuilder';
import * as OntAssetTxBuilder from './smartcontract/nativevm/ontAssetTxBuilder';
import * as OntidContract from './smartcontract/nativevm/ontidContractTxBuilder';
import * as Token from './smartcontract/nativevm/token';
import * as Oep4 from './smartcontract/neovm/oep4TxBuilder';
import * as Oep5 from './smartcontract/neovm/oep5TxBuilder';
import * as Oep8 from './smartcontract/neovm/oep8TxBuilder';
import { DDO, DDOAttribute } from './transaction/ddo';
import * as ScriptBuilder from './transaction/scriptBuilder';
import { Transaction } from './transaction/transaction';
import * as TransactionBuilder from './transaction/transactionBuilder';
import { Transfer } from './transaction/transfer';
import { TxSignature } from './transaction/txSignature';
import * as utils from './utils';
import { Wallet } from './wallet';
declare class ONT {
    Account: any;
    Identity: any;
    Claim: any;
    DDO: any;
    DDOAttribute: any;
    Transaction: any;
    Transfer: any;
    TxSignature: any;
    TransactionBuilder: any;
    OntAssetTxBuilder: any;
    Parameter: any;
    ParameterType: any;
    AbiFunction: any;
    AbiInfo: any;
    utils: any;
    scrypt: any;
    CONST: any;
    Wallet: any;
    SDK: any;
    Token: any;
    OntidContract: any;
    GovernanceTxBuilder: any;
    RestClient: any;
    RpcClient: any;
    WebsocketClient: any;
    Crypto: any;
    Struct: any;
    ScriptBuilder: any;
    NeoCore: any;
    Oep4: any;
    Oep8: any;
    Oep5: any;
    constructor();
    setNode(url: string): void;
    setRpcPort(port: string): void;
    setRestPort(port: string): void;
    setSocketPort(port: string): void;
}
export default ONT;
export { Account, Identity, Claim, DDO, DDOAttribute, Transaction, Transfer, TxSignature, Parameter, ParameterType, AbiFunction, AbiInfo, TransactionBuilder, OntAssetTxBuilder, GovernanceTxBuilder, utils, scrypt, CONST, Wallet, SDK, Token, OntidContract, RestClient, RpcClient, WebsocketClient, Crypto, Struct, ScriptBuilder, NeoCore, Oep4, Oep8, Oep5 };