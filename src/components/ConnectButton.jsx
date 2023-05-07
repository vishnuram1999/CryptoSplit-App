import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers, useEtherBalance, Localhost } from "@usedapp/core";
import { formatEther, parseEther } from "@ethersproject/units";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  useBalance
} from 'wagmi'
import { foundry, localhost } from "wagmi/chains";

// export default function ConnectButton() {
//   const { activateBrowserWallet, account } = useEthers();
//   const etherBalance = useEtherBalance(account);

//   function handleConnectWallet() {
//     activateBrowserWallet();
//   }

//   return account ? (
//     <Box
//       display="flex"
//       alignItems="center"
//       background="gray.700"
//       borderRadius="xl"
//       py="0"
//     >
//       <Box px="3">
//         <Text color="white" fontSize="md">
//           { etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3) } ETH
//         </Text>
//       </Box>
//       <Button
//         bg="gray.800"
//         border="1px solid transparent"
//         _hover={{
//           border: "1px",
//           borderStyle: "solid",
//           borderColor: "blue.400",
//           backgroundColor: "gray.700",
//         }}
//         borderRadius="xl"
//         m="1px"
//         px={3}
//         height="38px"
//       >
//         <Text color="white" fontSize="md" fontWeight="medium" mr="2">
//           {account &&
//             `${account.slice(0, 6)}...${account.slice(
//               account.length - 4,
//               account.length
//             )}`}
//         </Text>
//       </Button>
//     </Box>
//   ) : (
//     <Button onClick={handleConnectWallet}>
//       Connect to a wallet
//     </Button>
//   );
// }

export default function ConnectButton() {
  const { address, connector, isConnected } = useAccount(({
    onConnect({ address, connector, isReconnected }) {
      console.log('Connected', { address, connector, isReconnected })
    },
    chainId: foundry.id,
  }))
  const { data, isError, isLoading1 } = useBalance({
    address: address,
  })

  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
  const { disconnect } = useDisconnect({
    onDisconnect() {
      console.log('Disconnected')
    },
  })
  if (isConnected) {
    return (
      // <Button onClick={disconnect}> {address} {data?.formatted} {data?.symbol}</Button>
      <Box
        display="flex"
        alignItems="center"
        background="gray.700"
        borderRadius="xl"
        py="0"
      >
        <Box px="3">
          <Text color="white" fontSize="md">
            {data?.formatted && parseFloat(data?.formatted).toFixed(3)} {data?.symbol}
          </Text>
        </Box>
        <Button
          onClick={disconnect}
          bg="gray.800"
          border="1px solid transparent"
          _hover={{
            border: "1px",
            borderStyle: "solid",
            borderColor: "blue.400",
            backgroundColor: "gray.700",
          }}
          borderRadius="xl"
          m="1px"
          px={3}
          height="38px"
        >
          <Text color="white" fontSize="md" fontWeight="medium" mr="2">
            {address &&
              `${address.slice(0, 6)}...${address.slice(
                address.length - 4,
                address.length
              )}`}
          </Text>
        </Button>
      </Box>
    )
  }
 
  return (
    <div>
      {connectors.map((connector) => (
        <Button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
          {!connector.ready && ' (unsupported)'}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            ' (connecting)'}
        </Button>
      ))}
 
      {error && <div>{error.message}</div>}
    </div>
  )
}