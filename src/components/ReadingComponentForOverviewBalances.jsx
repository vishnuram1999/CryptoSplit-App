import { useContractRead, useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { AccordionItem, AccordionButton, Box, AccordionIcon, UnorderedList, ListItem, AccordionPanel, HStack, Spacer, Button } from "@chakra-ui/react";

function ReadingComponentForOverviewBalances({ contractAddress, abi, stateVariable }) {
    const { address } = useAccount()
    const { data, isError, isLoading } = useContractRead({
        address: contractAddress,
        abi: abi,
        functionName: 'showBalanceAddresses',
        overrides: { from: address },
        // args: ['0x90F79bf6EB2c4f870365E785982E1f101E93b906', '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48']
      })
    
    if (isError) {
        return <div> Error </div>
    }

    if (isLoading) {
        return <div> Loading... </div>
    }

    const { config, error } = usePrepareContractWrite({
        address: contractAddress,
        abi: abi,
        functionName: 'settleBalanceInERC20Token',
        args: ['0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', '0x90F79bf6EB2c4f870365E785982E1f101E93b906', 10, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'],
      })

    const { write } = useContractWrite(config)


    const listItems = data.map((number) => {
        const { data, isError2, isLoading2 } = useContractRead({
            address: contractAddress,
            abi: abi,
            functionName: 'showExpenseAmount',
            args: [number],
            overrides: { from: address }
        })

        if (isError2) {
            return <div> Error </div>
        }

        if (isLoading2) {
            return <div> Loading... </div>
        }

        return (
            <AccordionItem>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        { number }
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <HStack>
                        <UnorderedList>
                            <ListItem>Token Amount Symbol</ListItem>
                        </UnorderedList>
                        <Spacer />
                        <Button disabled={!write} onClick={() => write?.()}>
                            Settle
                        </Button>
                    </HStack>
                </AccordionPanel>
            </AccordionItem>
        )
    });

    return listItems
}

export default ReadingComponentForOverviewBalances;