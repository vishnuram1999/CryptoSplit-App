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
    Heading,
    Accordion,
    AccordionPanel,
    AccordionButton,
    AccordionItem,
    AccordionIcon,
    UnorderedList,
    ListItem,
    Spacer,
    HStack
} from "@chakra-ui/react";
import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar";
import ReadingComponentForOverviewExpenses from "../components/ReadingComponentForOverviewExpenses";
import ReadingComponentForOverviewBalances from "../components/ReadingComponentForOverviewBalances";
import { Interface } from "ethers/lib/utils.js";

export default function Overview() {
    const contractAddr="0x82C6D3ed4cD33d8EC1E51d0B5Cc1d822Eaa0c3dC"
    const ABI = new Interface([{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"notGroupMember","type":"error"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"}],"name":"notMember","type":"error"},{"inputs":[],"name":"notOwner","type":"error"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"}],"name":"notValidAddress","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"Received","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"sentDonations","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"string","name":"_expenseName","type":"string"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_paidID","type":"address"},{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"addExpense","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_expenseName","type":"string"},{"internalType":"string","name":"_groupName","type":"string"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_paidID","type":"address"}],"name":"addExpenseEqualBetweenGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_expenseName","type":"string"},{"internalType":"string","name":"_groupName","type":"string"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256[]","name":"_portions","type":"uint256[]"},{"internalType":"address","name":"_paidID","type":"address"}],"name":"addExpenseUnequalBetweenGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_groupName","type":"string"},{"internalType":"address","name":"_id","type":"address"}],"name":"addMemberToGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_groupName","type":"string"},{"internalType":"address[]","name":"_group","type":"address[]"}],"name":"createGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_expenseName","type":"string"}],"name":"findExpense","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestPrice","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"groups","outputs":[{"internalType":"uint256","name":"groupExpense","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"members","outputs":[{"internalType":"uint256","name":"amountSpend","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_groupName","type":"string"},{"internalType":"address","name":"_id","type":"address"}],"name":"removeMemberFromGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"sendDonationsToOwner","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address payable","name":"_toID","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"settleBalanceInERC20Token","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_toID","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"settleBalanceInEther","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"showBalanceAddresses","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"showBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"showExpense","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_expenseName","type":"string"}],"name":"showExpenseAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_groupName","type":"string"}],"name":"showExpenseOfGroup","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_id","type":"address"}],"name":"showExpenseOfMember","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"showExpenses","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_groupName","type":"string"}],"name":"showGroupMembers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"showGroups","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}])
    //const ABI = new Interface([{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"notGroupMember","type":"error"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"}],"name":"notMember","type":"error"},{"inputs":[],"name":"notOwner","type":"error"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"}],"name":"notValidAddress","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"Received","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"sentDonations","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"string","name":"_expenseName","type":"string"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_paidID","type":"address"},{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"addExpense","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_expenseName","type":"string"},{"internalType":"string","name":"_groupName","type":"string"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_paidID","type":"address"}],"name":"addExpenseEqualBetweenGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_expenseName","type":"string"},{"internalType":"string","name":"_groupName","type":"string"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"uint256[]","name":"_portions","type":"uint256[]"},{"internalType":"address","name":"_paidID","type":"address"}],"name":"addExpenseUnequalBetweenGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_groupName","type":"string"},{"internalType":"address","name":"_id","type":"address"}],"name":"addMemberToGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_groupName","type":"string"},{"internalType":"address[]","name":"_group","type":"address[]"}],"name":"createGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_expenseName","type":"string"}],"name":"findExpense","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestPrice","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"groups","outputs":[{"internalType":"uint256","name":"groupExpense","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"members","outputs":[{"internalType":"uint256","name":"amountSpend","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_groupName","type":"string"},{"internalType":"address","name":"_id","type":"address"}],"name":"removeMemberFromGroup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"sendDonationsToOwner","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"address payable","name":"_toID","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"settleBalanceInERC20Token","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_toID","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"settleBalanceInEther","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"showBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"showExpense","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_expenseName","type":"string"}],"name":"showExpenseAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_groupName","type":"string"}],"name":"showExpenseOfGroup","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_id","type":"address"}],"name":"showExpenseOfMember","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"showExpenses","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_groupName","type":"string"}],"name":"showGroupMembers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"showGroups","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}])
    const method = "showExpenses"

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
                                    <Heading size="md">Your Groups</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Accordion allowToggle>
                                        <AccordionItem>
                                            <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                Group Name 1
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                Group Name 2
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </CardBody>
                            </Card>
                        </Box>
                        <Box>
                            <Card>
                                <CardHeader>
                                    <Heading size="md">Your Expenses</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Accordion allowToggle>
                                        <ReadingComponentForOverviewExpenses contractAddress={contractAddr} abi={ABI} stateVariable={method} />
                                    </Accordion>
                                </CardBody>
                            </Card>
                        </Box>
                        <Box>
                            <Card>
                                <CardHeader>
                                    <Heading size="md">Your Balances</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Accordion allowToggle>
                                        <ReadingComponentForOverviewBalances contractAddress={contractAddr} abi={ABI} stateVariable={method} />
                                    </Accordion>
                                </CardBody>
                            </Card>
                        </Box>
                    </SimpleGrid>
                </GridItem>
            </Grid>
        </Box>
    )
}
