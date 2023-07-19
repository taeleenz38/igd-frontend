import React from 'react'
import { Web3Button } from '@web3modal/react'


const Navbar = () => {
  return (
    <div class="flex w-screen bg-[#602F7D] mt-0 h-20 p-5 justify-between items-center shadow-lg">
      <h2 class="text-white text-2xl font-bold">Wagmi Invoices</h2>
      <Web3Button />
    </div>
  )
}

export default Navbar
