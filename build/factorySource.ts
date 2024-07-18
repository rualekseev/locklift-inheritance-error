const aliceAbi = {"ABIversion":2,"version":"2.3","header":["time"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"hello","inputs":[],"outputs":[]}],"data":[],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"}]} as const

export const factorySource = {
    Alice: aliceAbi
} as const

export type FactorySource = typeof factorySource
export type AliceAbi = typeof aliceAbi
