import { useEthers, useCall } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";

function ReadingComponent({ contractAddress, abi, stateVariable }) {
    const { library } = useEthers();
    const contract = new Contract(contractAddress, abi, library);

    const { value, error } = useCall(contractAddress && {
        contract,
        method: stateVariable,
        args: []
    }) ?? {}
    
    if (error) {
        return <div> {error.message} </div>
    }
    console.log(value)
    if (!value) {
        return <div> Loading... </div>
    }

    return <div> Balance: { value[0].toNumber() } </div>
}

export default ReadingComponent;