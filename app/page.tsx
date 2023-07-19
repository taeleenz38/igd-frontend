'use client'
import MintInvoice from "./components/MintInvoice"
import Navbar from "./components/Navbar"
import Greeting from "./components/Greeting"
import { useAccount } from "wagmi"
import Head from 'next/head';


export default function Home() {

  const { isConnected } = useAccount()

  if (isConnected) {
    return (
      <main className="flex min-h-screen flex-col items-center  bg-white">
        <Head>
          <title>Wagmi Invoices</title>
        </Head>
        <Navbar />
        <MintInvoice />
      </main>
    )
  }
  else {
    return (
      <main className="flex min-h-screen flex-col items-center bg-white">
        <Head>
          <title>Wagmi Invoices</title>
        </Head>
        <Navbar />
        <Greeting />
      </main>
    )
  }
}
