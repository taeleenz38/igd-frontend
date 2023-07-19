'use client'
import './globals.css'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, sepolia, WagmiConfig } from 'wagmi'
import { Montserrat } from 'next/font/google'


const chains = [sepolia]
const projectId = '964b841e547249f9dcdec49810c2d6ac'
const montserrat = Montserrat({ 
  subsets: ['latin'] 
})

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
        <WagmiConfig config={wagmiConfig}>

        <body className={montserrat.className}>{children}

          <Web3Modal
            projectId={projectId}
            ethereumClient={ethereumClient}
            themeVariables={{
              "--w3m-accent-color": "#602F7D",
              "--w3m-accent-fill-color": "#FFFFFF",	
              "--w3m-overlay-background-color": "rgba(0, 0, 0, 0.3)",
              "--w3m-background-color": "#602F7D",
            }}
          />
        </body>
      </WagmiConfig>

    </html>

  )
}
