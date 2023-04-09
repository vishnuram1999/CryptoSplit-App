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
import ReadingComponent from "../components/ReadingComponent";

export default function Overview() {
    const contractAddress = "0x6Ad319Cd61A94f071AEC3a7e04663Bf793a4eb39";
    const abi = [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "num",
                    "type": "uint256"
                }
            ],
            "name": "store",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "retrieve",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]; // contract ABI
    const stateVariable = "number";

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
                                        <AccordionItem>
                                            <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                Expense Name 1
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                <UnorderedList>
                                                    <ListItem>Date</ListItem>
                                                    <ListItem>
                                                        {/* <ReadingComponent contractAddress={contractAddress} abi={abi} stateVariable={stateVariable} /> */}
                                                    </ListItem>
                                                </UnorderedList>
                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                Expense Name 2
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                <UnorderedList>
                                                    <ListItem>Date</ListItem>
                                                    <ListItem>Amount in USD</ListItem>
                                                </UnorderedList>
                                            </AccordionPanel>
                                        </AccordionItem>
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
                                        <AccordionItem>
                                            <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                Balance 1 Name (Address)
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                <HStack>
                                                    <UnorderedList>
                                                        <ListItem>Token Amount</ListItem>
                                                    </UnorderedList>
                                                    <Spacer />
                                                    <Button>Settle</Button>
                                                </HStack>
                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left'>
                                                Balance 1 Name (Address)
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                <HStack>
                                                    <UnorderedList>
                                                        <ListItem>Token Amount</ListItem>
                                                    </UnorderedList>
                                                    <Spacer />
                                                    <Button>Settle</Button>
                                                </HStack>
                                            </AccordionPanel>
                                        </AccordionItem>
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
