import { useState } from "react";
import { useEthers, useCall, usePoller } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import { Interface } from "ethers/lib/utils";

export default function ReadingComponent() {

    const contractAddr = "0x6Ad319Cd61A94f071AEC3a7e04663Bf793a4eb39";
    const ABI = new Interface(
        [{"inputs":[],"name":"retrieve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"store","outputs":[],"stateMutability":"nonpayable","type":"function"}]
        );
    const method1 = "retrieve";
    const { library } = useEthers();
    const contract = new Contract(contractAddr, ABI, library);
    console.log(library);

    const [ state, setState ] = useState(null);

    const readState = async () => {
        const result = useCall(contractAddr && {
            contract: new Contract(contractAddr, contract.interface),
            method: method1,
            args: []
        }) ?? {};
        if (error) {
            console.error(error.message);
            return undefined;
        }
        setState(result);
    };

    usePoller(readState, 1000);

    return (
        <div>
            { state }
        </div>
    )
}
// export default ReadingComponent;
