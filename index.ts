import { analyzer } from "./src/analyzer/analyze";

const main = async () => {
    try {
        const token = "0x34DF29Dd880e9fe2cec0f85f7658B75606fB2870"
        const poolAddress = "0x70287106b99346a9058504cFBBe2f9BE4F929636"
        const makerAddress = "0xcC92FdeaD19F070B40C3AA6f85BB018051d1F39A"

        // TODO: Auto derive the pool address

        await analyzer.getBuyTxns(token, poolAddress, makerAddress)
    } catch (error) {
        console.log(error);
    }
}

main()