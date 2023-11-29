import { abi, contractAddress } from "@/app/constants";
import { NextResponse } from "next/server";
import Web3 from "web3";

export const POST = async (req: Request, res: Response) => {
  const {
    cultureType,
    productionCycle,
    areaSize,
    plantingDate,
    varietiesUsed,
    fertilizersUsed,
    pesticidesUsed,
  } = await req.json();
  try {
    const privateKey = Buffer.from('b0057716d5917badaf911b193b12b910811c1497b5bada8d7711f758981c3773', "hex");

    const web3 = new Web3(
      "https://tame-hardworking-tent.matic-testnet.quiknode.pro/0af023f56f4d8aff72d47c9d55adcc968005da85/"
    );
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    const contract: any = new web3.eth.Contract(abi, contractAddress);
    const contractFunction = contract.methods.productionPlan(
      cultureType,
      productionCycle,
      areaSize,
      plantingDate,
      varietiesUsed,
      fertilizersUsed,
      pesticidesUsed
    );

    const encodedData = contractFunction.encodeABI();

    const transactionObject = {
      from: account.address,
      to: contract.options.address,
      data: encodedData,
      gasPrice: web3.utils.toHex(await web3.eth.getGasPrice()),
      gas: web3.utils.toHex(600000), // Ajuste conforme necessário
    };

    const signedTransaction = await account.signTransaction(transactionObject);
    const { transactionHash } = await web3.eth.sendSignedTransaction(
      signedTransaction.rawTransaction
    );

    return NextResponse.json(
      { message: "Ok", transactionHash: transactionHash.toString() },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error", error },
      {
        status: 500,
      }
    );
  }
};
