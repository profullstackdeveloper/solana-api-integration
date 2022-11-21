import axios from "axios";
import { APIResponseType, Transaction, TxHistory } from "./types";

export const fetchTx = async (accountAddress: string, key: string, pageLimit: number, pageNumber: number): Promise<APIResponseType<TxHistory>> => {

    try {
        const result: APIResponseType<TxHistory> = await axios.get(
            `https://svc.blockdaemon.com/universal/v1/solana/mainnet/account/${accountAddress}/txs`,
            {
                headers: {
                    Authorization: `Bearer ${key}`,
                },
                params: {
                    page_size: pageLimit,
                }
            }
        );

        return result;
    } catch (err) {
        throw new Error(`ERROR: ${err}`);
    }

};