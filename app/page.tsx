"use client"
import MintInvoice from "./components/MintInvoice"
import Navbar from "./components/Navbar"
import Greeting from "./components/Greeting"
import { useAccount } from "wagmi"


export default function Home() {

  const { address, isConnected, isDisconnected } = useAccount()

  if (isConnected) {
    return (
      <main className="flex min-h-screen flex-col items-center  bg-white">
        <Navbar />
        <MintInvoice />
      </main>
    )
  }
  else {
    return (
      <main className="flex min-h-screen flex-col items-center bg-white">
        <Navbar />
        <Greeting />
      </main>
    )
  }
}
