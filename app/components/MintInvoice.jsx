"use client"
import React, { useState } from "react";
import InvoiceCard from "./InvoiceCard";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction
} from "wagmi";
import InvoiceTokenABI from "../ABI/InvoiceToken.json";


function MintInvoice() {
  const [issueDate, setissueDate] = useState("");
  const [dueDate, setdueDate] = useState("");
  const [issuingEntityName, setissuingEntityName] = useState("");
  const [issuingEntityABN, setissuingEntityABN] = useState("");
  const [invoiceToEntityName, setinvoiceToEntityName] = useState("");
  const [invoiceToEntityABN, setinvoiceToEntityABN] = useState("");
  const [invoiceToWalletAddress, setinvoiceToWalletAddress] = useState("");

  const invoiceData = {
    issueDate: issueDate,
    dueDate: dueDate,
    issuingEntityName: issuingEntityName,
    issuingEntityABN: issuingEntityABN,
    invoiceToEntityName: invoiceToEntityName,
    invoiceToEntityABN: invoiceToEntityABN,
    invoiceToWalletAddress: invoiceToWalletAddress,
  };

  const abi = InvoiceTokenABI.abi;
  const ca = "0x1a8F38eBc399aE79E93E4533A1bd07454F4110b1";

  const { config } = usePrepareContractWrite({
    address: ca,
    abi: abi,
    args: [
      issueDate,
      dueDate,
      issuingEntityName,
      issuingEntityABN,
      invoiceToEntityName,
      invoiceToEntityABN,
      invoiceToWalletAddress,
    ],
    functionName: "issueInvoice",
  });

  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });



  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        write?.();
      }}
      class="flex flex-col p-6 border-[#404B5C] text-[#602F7D] border-2 rounded-lg my-auto shadow-2xl text-lg font-semibold"
    >
      <div class="flex mb-5 justify-between">
        <label htmlFor="issueDate" class="hover:cursor-pointer">Issue Date:</label>
        <input
          type="date"
          id="issueDate"
          name="issueDate"
          onChange={(e) => setissueDate(e.target.value)}
          value={issueDate}
          class="hover:cursor-pointer focus:cursor-text border-2 w-2/5 rounded-md"
        />
      </div>
      <div class="flex mb-5 justify-between">
        <label htmlFor="dueDate" class="hover:cursor-pointer">Due Date:</label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          onChange={(e) => setdueDate(e.target.value)}
          value={dueDate}
          class="hover:cursor-pointer focus:cursor-text border-2 w-2/5 rounded-md"
        />
      </div>
      <div class="flex mb-5 justify-between">
        <label htmlFor="issuingEntityName" class="hover:cursor-pointer">Issuing Entity Name:</label>
        <input
          type="text"
          id="issuingEntityName"
          name="issuingEntityName"
          onChange={(e) => setissuingEntityName(e.target.value)}
          value={issuingEntityName}
          class="hover:cursor-pointer focus:cursor-text border-2 w-2/5 rounded-md text-right"
        />
      </div>
      <div class="flex mb-5 justify-between">
        <label htmlFor="issuingEntityABN" class="hover:cursor-pointer">Issuing Entity ABN:</label>
        <input
          type="text"
          id="issuingEntityABN"
          name="issuingEntityABN"
          onChange={(e) => setissuingEntityABN(parseInt(e.target.value))}
          value={issuingEntityABN}
          class="hover:cursor-pointer focus:cursor-text border-2 w-2/5 rounded-md text-right"
        />
      </div>
      <div class="flex mb-5 justify-between">
        <label htmlFor="invoiceToEntityName" class="hover:cursor-pointer">Invoice to Entity Name:</label>
        <input
          type="text"
          id="invoiceToEntityName"
          name="invoiceToEntityName"
          onChange={(e) => setinvoiceToEntityName(e.target.value)}
          value={invoiceToEntityName}
          class="hover:cursor-pointer focus:cursor-text border-2 w-2/5 rounded-md text-right"
        />
      </div>
      <div class="flex mb-5 justify-between">
        <label htmlFor="invoiceToEntityABN" class="hover:cursor-pointer">Invoice to Entity ABN:</label>
        <input
          type="text"
          id="invoiceToEntityABN"
          name="invoiceToEntityABN"
          onChange={(e) => setinvoiceToEntityABN(parseInt(e.target.value))}
          value={invoiceToEntityABN}
          class="hover:cursor-pointer focus:cursor-text border-2 w-2/5 rounded-md text-right"
        />
      </div>
      <div class="flex mb-5 justify-between">
        <label htmlFor="invoiceToWalletAddress" class="hover:cursor-pointer">Invoice To Wallet Address:</label>
        <input
          type="text"
          id="invoiceToWalletAddress"
          name="invoiceToWalletAddress"
          onChange={(e) => setinvoiceToWalletAddress(e.target.value)}
          value={invoiceToWalletAddress}
          class="hover:cursor-pointer focus:cursor-text border-2 w-2/5 rounded-md text-right"
        />
      </div>

      <div class="flex mb-5 justify-center">
        <button class="border-2 border-[#404B5C] py-2 px-8 rounded-xl text-center hover:bg-[#602F7D] hover:text-white hover:border-[#602F7D] duration-200" disabled={!write || isLoading}>
          {isLoading ? "Issuing Invoice..." : "Issue Invoice"}
        </button>
      </div>

      {isSuccess && (
        <>
          <div class="flex mb-5 justify-center">
            Invoice successfully issued!
            <a href={`https://sepolia.etherscan.io/tx/${data?.hash}`} target="_blank" class="ml-4 hover:underline">
              Tx Link
            </a>
          </div>
          <div>
            <InvoiceCard {...invoiceData} />
          </div>
          </>

      )}
    </form>
  );
}

export default MintInvoice;

