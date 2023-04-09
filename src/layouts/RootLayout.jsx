import { Outlet } from "react-router-dom"
import { DAppProvider, ChainId } from "@usedapp/core";

export default function RootLayout() {
  const config = {
    readOnlyChainId: ChainId.Goerli,
    readOnlyUrls: {
      [ChainId.Goerli]: "https://goerli.infura.io/v3/9a543b6692c44e7087362ce2ebfa70b1",
    },
  };
  return (
    <div>
      <DAppProvider config={config}>
        <Outlet />
      </DAppProvider>
    </div>
  )
}