/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.32.0
  Forc version: 0.32.2
  Fuel-Core version: 0.17.2
*/

import type {
  Interface,
  FunctionFragment,
  DecodedValue,
  Contract,
  BytesLike,
  BigNumberish,
  InvokeFunction,
  BN,
} from 'fuels';

export type ContractIdInput = { value: string };
export type ContractIdOutput = ContractIdInput;
export type PoolInfoInput = {
  eth_reserve: BigNumberish;
  token_reserve: BigNumberish;
  lp_token_supply: BigNumberish;
};
export type PoolInfoOutput = { eth_reserve: BN; token_reserve: BN; lp_token_supply: BN };
export type PositionInfoInput = {
  eth_amount: BigNumberish;
  token_amount: BigNumberish;
  eth_reserve: BigNumberish;
  token_reserve: BigNumberish;
  lp_token_supply: BigNumberish;
};
export type PositionInfoOutput = {
  eth_amount: BN;
  token_amount: BN;
  eth_reserve: BN;
  token_reserve: BN;
  lp_token_supply: BN;
};
export type PreviewAddLiquidityInfoInput = {
  token_amount: BigNumberish;
  lp_token_received: BigNumberish;
};
export type PreviewAddLiquidityInfoOutput = { token_amount: BN; lp_token_received: BN };
export type PreviewInfoInput = { amount: BigNumberish; has_liquidity: boolean };
export type PreviewInfoOutput = { amount: BN; has_liquidity: boolean };
export type RemoveLiquidityInfoInput = { eth_amount: BigNumberish; token_amount: BigNumberish };
export type RemoveLiquidityInfoOutput = { eth_amount: BN; token_amount: BN };

interface ExchangeContractAbiInterface extends Interface {
  functions: {
    add_liquidity: FunctionFragment;
    deposit: FunctionFragment;
    get_add_liquidity: FunctionFragment;
    get_balance: FunctionFragment;
    get_pool_info: FunctionFragment;
    get_position: FunctionFragment;
    get_swap_with_maximum: FunctionFragment;
    get_swap_with_minimum: FunctionFragment;
    remove_liquidity: FunctionFragment;
    swap_with_maximum: FunctionFragment;
    swap_with_minimum: FunctionFragment;
    withdraw: FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'add_liquidity',
    values: [BigNumberish, BigNumberish]
  ): Uint8Array;
  encodeFunctionData(functionFragment: 'deposit', values: []): Uint8Array;
  encodeFunctionData(
    functionFragment: 'get_add_liquidity',
    values: [BigNumberish, string]
  ): Uint8Array;
  encodeFunctionData(functionFragment: 'get_balance', values: [ContractIdInput]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_pool_info', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'get_position', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_swap_with_maximum', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'get_swap_with_minimum', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(
    functionFragment: 'remove_liquidity',
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: 'swap_with_maximum',
    values: [BigNumberish, BigNumberish]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: 'swap_with_minimum',
    values: [BigNumberish, BigNumberish]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: 'withdraw',
    values: [BigNumberish, ContractIdInput]
  ): Uint8Array;

  decodeFunctionData(functionFragment: 'add_liquidity', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'deposit', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_add_liquidity', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_balance', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_pool_info', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_position', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_swap_with_maximum', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_swap_with_minimum', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'remove_liquidity', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'swap_with_maximum', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'swap_with_minimum', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'withdraw', data: BytesLike): DecodedValue;
}

export class ExchangeContractAbi extends Contract {
  interface: ExchangeContractAbiInterface;
  functions: {
    add_liquidity: InvokeFunction<[min_liquidity: BigNumberish, deadline: BigNumberish], BN>;
    deposit: InvokeFunction<[], void>;
    get_add_liquidity: InvokeFunction<
      [amount: BigNumberish, asset_id: string],
      PreviewAddLiquidityInfoOutput
    >;
    get_balance: InvokeFunction<[asset_id: ContractIdInput], BN>;
    get_pool_info: InvokeFunction<[], PoolInfoOutput>;
    get_position: InvokeFunction<[amount: BigNumberish], PositionInfoOutput>;
    get_swap_with_maximum: InvokeFunction<[amount: BigNumberish], PreviewInfoOutput>;
    get_swap_with_minimum: InvokeFunction<[amount: BigNumberish], PreviewInfoOutput>;
    remove_liquidity: InvokeFunction<
      [min_eth: BigNumberish, min_tokens: BigNumberish, deadline: BigNumberish],
      RemoveLiquidityInfoOutput
    >;
    swap_with_maximum: InvokeFunction<[amount: BigNumberish, deadline: BigNumberish], BN>;
    swap_with_minimum: InvokeFunction<[min: BigNumberish, deadline: BigNumberish], BN>;
    withdraw: InvokeFunction<[amount: BigNumberish, asset_id: ContractIdInput], void>;
  };
}
