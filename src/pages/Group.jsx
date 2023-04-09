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

export default function Group() {
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
                        minChildWidth={"400px"}>
                        <Box>
                            <Card>
                                <CardHeader>
                                    <Heading size="md">Create Group</Heading>
                                </CardHeader>
                                <CardBody>
                                    <VStack>
                                        <Input placeholder='Group Name' size='sm'/>
                                        
                                        <Button>Create</Button>
                                    </VStack>
                                </CardBody>
                            </Card>
                        </Box>
                        <Box>
                            <Card>
                                <CardHeader>
                                    <Heading size="md">Add Expense Equally</Heading>
                                </CardHeader>
                                <CardBody>
                                    <VStack>
                                        <Input placeholder='Expense Name' size='sm'/>
                                        <Input placeholder='Group Name' size='sm'/>
                                        <NumberInput>
                                            <NumberInputField/>
                                            <NumberInputStepper>
                                                <NumberIncrementStepper/>
                                                <NumberDecrementStepper/>
                                            </NumberInputStepper>
                                        </NumberInput>
                                        <Input placeholder='Token Address' size='sm'/>
                                        <Input placeholder='Paid By Address' size='sm'/>
                                        <Button>Add</Button>
                                    </VStack>
                                </CardBody>
                            </Card>
                        </Box>
                        <Box>
                            <Card>
                                <CardHeader>
                                    <Heading size="md">Add Expense Unequally</Heading>
                                </CardHeader>
                                <CardBody>
                                    <VStack>
                                        <Input placeholder='Expense Name' size='sm'/>
                                        <Input placeholder='Group Name' size='sm'/>
                                        <NumberInput>
                                            <NumberInputField/>
                                            <NumberInputStepper>
                                                <NumberIncrementStepper/>
                                                <NumberDecrementStepper/>
                                            </NumberInputStepper>
                                        </NumberInput>
                                        <Input placeholder='Token Address' size='sm'/>
                                        <Input placeholder='Paid By Address' size='sm'/>
                                        <Input placeholder='Portions' size='sm'/>
                                        <Button>Add</Button>
                                    </VStack>
                                </CardBody>
                            </Card>
                        </Box>
                        <Box>
                            <Card>
                                <CardHeader>
                                    <Heading size="md">Remove Member</Heading>
                                </CardHeader>
                                <CardBody>
                                    <VStack>
                                        <Input placeholder='Member Address' size='sm'/>
                                        <Input placeholder='Group Name' size='sm'/>
                                        <Button>Remove Member</Button>
                                    </VStack>
                                </CardBody>
                            </Card>
                        </Box>
                        <Box>
                            <Card>
                                <CardHeader>
                                    <Heading size="md">Add Member</Heading>
                                </CardHeader>
                                <CardBody>
                                    <VStack>
                                        <Input placeholder='Member Address' size='sm'/>
                                        <Input placeholder='Group Name' size='sm'/>
                                        <Button>Add Member</Button>
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
