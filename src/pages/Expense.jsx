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

export default function Expense() {
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
                                        <Input placeholder='Expense Name' size='sm'/>
                                        <NumberInput>
                                            <NumberInputField/>
                                            <NumberInputStepper>
                                                <NumberIncrementStepper/>
                                                <NumberDecrementStepper/>
                                            </NumberInputStepper>
                                        </NumberInput>
                                        <Input placeholder='Token Address' size='sm'/>
                                        <Input placeholder='Paid By' size='sm'/>
                                        <Button>Add</Button>
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
