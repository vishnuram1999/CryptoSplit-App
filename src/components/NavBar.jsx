import { Flex, Heading, Spacer, Link, HStack } from "@chakra-ui/react";
import ConnectButton from "./ConnectButton";

export default function NavBar() {
  return (
    <Flex as="nav" p="20px" bg="orange" alignItems={"center"}>
        <Heading as="h1">CryptoSplit</Heading>
        <Spacer />
        <HStack spacing={"15px"}>
            <Link href="/">Home</Link>s
            <Link href="/about">About</Link>
            <ConnectButton />
        </HStack>
    </Flex>
  )
}
