import { useContractRead, useAccount } from 'wagmi'
import { AccordionItem, AccordionButton, Box, AccordionIcon, UnorderedList, ListItem, AccordionPanel } from "@chakra-ui/react";

function ReadingComponentForOverviewExpenses({ contractAddress, abi, stateVariable }) {
    const { address } = useAccount()
    const { data, isError, isLoading } = useContractRead({
        address: contractAddress,
        abi: abi,
        functionName: 'showExpenses',
        overrides: { from: address },
      })
    
    if (isError) {
        return <div> Error </div>
    }

    if (isLoading) {
        return <div> Loading... </div>
    }

    console.log(data)


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
            <AccordionItem key={number.toString()}>
                <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    { number }
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <UnorderedList>
                        <ListItem>Date</ListItem>
                        <ListItem>{ data.toString() } </ListItem>
                    </UnorderedList>
                </AccordionPanel>
            </AccordionItem>
        )
    });

    return listItems
}

export default ReadingComponentForOverviewExpenses;