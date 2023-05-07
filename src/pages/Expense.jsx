import {
    Box,
    Grid,
    GridItem,
    Button,
    SimpleGrid,
    VStack,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Input,
    Card,
    CardBody,
    CardHeader,
    Heading
} from "@chakra-ui/react";
import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar";
import { useState } from "react";
import WritingComponent from "../components/WritingComponent";
import { useAccount } from "wagmi";
import { useDebounce } from "@usedapp/core/dist/esm/src/hooks";

export default function Expense() {
    const contractAddr = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    const ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"notGroupMember","type":"error"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"}],"name":"notMember","type":"error"},{"inputs":[],"name":"notOwner","type":"error"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"}],"name":"notValidAddress","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"Received","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"sentDonations","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"string","name":"_expenseName","type":"string"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_paidID","type":"address"},{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"addExpense","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_expenseName","type":"string"},{"internalType":"string","name":"_groupName","type":"string"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_paidID","type":"address"}],"name":"addExpenseEqualBetweenGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_expenseName","type":"string"},{"internalType":"string","name":"_groupName","type":"string"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256[]","name":"_portions","type":"uint256[]"},{"internalType":"address","name":"_paidID","type":"address"}],"name":"addExpenseUnequalBetweenGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_groupName","type":"string"},{"internalType":"address","name":"_id","type":"address"}],"name":"addMemberToGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_groupName","type":"string"},{"internalType":"address[]","name":"_group","type":"address[]"}],"name":"createGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_expenseName","type":"string"}],"name":"findExpense","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestPrice","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"groups","outputs":[{"internalType":"uint256","name":"groupExpense","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"members","outputs":[{"internalType":"uint256","name":"amountSpend","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_groupName","type":"string"},{"internalType":"address","name":"_id","type":"address"}],"name":"removeMemberFromGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"sendDonationsToOwner","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address payable","name":"_toID","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"settleBalanceInERC20Token","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_toID","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"settleBalanceInEther","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"showBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"showExpense","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_expenseName","type":"string"}],"name":"showExpenseAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_groupName","type":"string"}],"name":"showExpenseOfGroup","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_id","type":"address"}],"name":"showExpenseOfMember","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"showExpenses","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_groupName","type":"string"}],"name":"showGroupMembers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"showGroups","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]
    const method = "addExpense"
    const [inputName, setInputName] = useState('')
    // const [debouncedInputName] = useDebounce(inputName, 500)
    const handleChangeInputName = (e) => setInputName(e.target.value)
    const [inputTokenAddress, setInputTokenAddress] = useState('')
    // const [debouncedInputTokenAddress] = useDebounce(inputTokenAddress, 500)
    const handleChangeInputTokenAddress = (e) => setInputTokenAddress(e.target.value)
    const [inputPaidByAddress, setInputPaidByAddress] = useState('')
    // const [debouncedInputPaidByAddress] = useDebounce(inputPaidByAddress, 500)
    const handleChangeInputPaidByAddress = (e) => setInputPaidByAddress(e.target.value)
    const [inputAmount, setInputAmount] = useState(0)
    // const [debouncedInputAmount] = useDebounce(inputAmount, 500)
    const handleChangeInputAmount = (inputAmount) => setInputAmount(inputAmount)
    const { address, connector, isConnected } = useAccount()
    console.log(address)
    if(isConnected) {
        return (
            <Box>
                <NavBar/>
                <Grid gridTemplateColumns={"repeat(6, 1fr)"}
                    bg="gray.50">
                    <GridItem as="aside"
                        colSpan={"1"}
                        p="20px"
                        bg="yellow.100"
                        minHeight={"93vh"}>
                        <SideBar/>
                    </GridItem>
                    <GridItem as="main"
                        colSpan={"5"}>
                        <SimpleGrid p="10px"
                            spacing={5}
                            minChildWidth={"250px"}>
                            <Box>
                                <Card>
                                    <CardHeader>
                                        <Heading size="md">Add Expense</Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <VStack>
                                            <Input placeholder='Expense Name' size='sm' value={inputName} onChange={handleChangeInputName}/>
                                            <NumberInput value={inputAmount} onChange={handleChangeInputAmount}>
                                                <NumberInputField/>
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper/>
                                                    <NumberDecrementStepper/>
                                                </NumberInputStepper>
                                            </NumberInput>
                                            <Input placeholder='Token Address' size='sm' value={inputTokenAddress} onChange={handleChangeInputTokenAddress}/>
                                            <Input placeholder='Paid By' size='sm' value={inputPaidByAddress} onChange={handleChangeInputPaidByAddress}/>
                                            {/* <Button>Add</Button> */}
                                            <WritingComponent contractAddress={ contractAddr.toString() } abi={ABI} method={method} expenseName={inputName.toString()} amount={inputAmount} tokenAddress={inputTokenAddress.toString()} paidBy={inputPaidByAddress.toString()} />
                                        </VStack>
                                    </CardBody>
                                </Card>
                            </Box>
                            <Box>
                                <Card>
                                    <CardHeader>
                                        <Heading size="md">Remove Expense</Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <VStack>
                                            <Input placeholder='Expense Name' size='sm'
                                                width={"500px"}/>
                                            <NumberInput>
                                                <NumberInputField/>
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper/>
                                                    <NumberDecrementStepper/>
                                                </NumberInputStepper>
                                            </NumberInput>
                                            <Button>Remove</Button>
                                        </VStack>
                                    </CardBody>
                                </Card>
                            </Box>
                        </SimpleGrid>
                    </GridItem>
                </Grid>
            </Box>
        )
    }
}
