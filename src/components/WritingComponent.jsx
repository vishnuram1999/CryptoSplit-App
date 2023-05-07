import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { Box, Button } from "@chakra-ui/react";

function WritingComponent({ contractAddress, abi, method, expenseName, amount, tokenAddress, paidBy }) {
  console.log(tokenAddress)
    const { config, error } = usePrepareContractWrite({
        address: '0x82C6D3ed4cD33d8EC1E51d0B5Cc1d822Eaa0c3dC',
        abi: abi,
        functionName: 'addExpense',
        args: [expenseName, 1, '0x90F79bf6EB2c4f870365E785982E1f101E93b906', '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'],
      })

    const { write } = useContractWrite(config)
    
    return (
        <>
        <Button disabled={!write} onClick={() => write?.()}>
            Add
        </Button>
        <Box>
          {error && (
              <div>An error occurred preparing the transaction: {error.message}</div>
            )}
        </Box>
        </>
    );
}

export default WritingComponent;