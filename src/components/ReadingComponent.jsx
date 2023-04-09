import { useState, useEffect } from "react";
import { useEthers, useCall, usePoller } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";

function ReadingComponent({contractAddress, abi, stateVariable}) {
    const {library} = useEthers();
    const contract = new Contract(contractAddress, abi, library);

    const [state, setState] = useState(null);

    const readState = async () => {
        const result = useCall(contractAddress && {
            contract: new Contract(contractAddress, contract.interface),
            method: stateVariable,
            args: []
        }) ?? {}
        if (error) {
            console.error(error.message)
            return undefined
        }
        setState(result);
    };

    usePoller(readState, 1000);

    return <div>{state}</div>;
}

export default ReadingComponent;
