import { CONFIG } from "../config/constants";
import { helpers } from "../utils/helpers";
import { zeroPadValue } from "ethers";

class Analyzer {
    getBuyTxns = async (
        tokenAddress: string,
        poolAddress: string,
        makerAddress: string
    ) => {
        const buyTxns = await helpers.axiosGet(
            `${CONFIG.ETHERSCAN_BASE_URL
            }?module=logs&action=getLogs&fromBlock=0&toBlock=99999999&address=${tokenAddress}&topic0=0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef&topic0_1_opr=and&topic1=${zeroPadValue(
                poolAddress,
                32
            )}&topic1_2_opr=and&topic2=${zeroPadValue(makerAddress, 32)}&apikey=${CONFIG.ETHERSCAN_API_KEY
            }`
        );

        console.log(buyTxns);
    };

    getSellTxns = async (
        tokenAddress: string,
        poolAddress: string,
        makerAddress: string
    ) => {
        const sellTxns = await helpers.axiosGet(
            `${CONFIG.ETHERSCAN_BASE_URL
            }?module=logs&action=getLogs&fromBlock=0&toBlock=99999999&address=${tokenAddress}&topic0=0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef&topic0_1_opr=and&topic1=${zeroPadValue(
                makerAddress,
                32
            )}&topic1_2_opr=and&topic2=${zeroPadValue(poolAddress, 32)}&apikey=${CONFIG.ETHERSCAN_API_KEY
            }`
        );

        console.log(sellTxns);
    };
}

export const analyzer = new Analyzer();
