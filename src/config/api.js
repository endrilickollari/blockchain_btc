export const BLOCKCHAIN_BTC_API = "https://blockchain.info/rawaddr/";

export const formatToBtc = (val) => {
    return ((val) / 100000000).toFixed(8);
}