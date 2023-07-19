import React from 'react'

const InvoiceCard = ({
    issueDate,
    dueDate,
    issuingEntityName,
    issuingEntityABN,
    invoiceToEntityName,
    invoiceToEntityABN,
    invoiceToWalletAddress,
}) => {
    return (
        <div class="min-w-max border-t-2 pt-5">
            <h3 class="text-xl font-bold">Invoice Details</h3>
            <p class="text-xl font-normal">
                <span class="font-semibold">Issue Date:</span> {issueDate}
            </p>
            <p class="text-xl font-normal">
                <span class="font-semibold">Due Date:</span> {dueDate}
            </p>
            <p class="text-xl font-normal">
                <span class="font-semibold">Issuing Entity Name:</span> {issuingEntityName}
            </p>
            <p class="text-xl font-normal">
                <span class="font-semibold">Issuing Entity ABN:</span> {issuingEntityABN}
            </p>
            <p class="text-xl font-normal">
                <span class="font-semibold">Invoice To Entity Name:</span> {invoiceToEntityName}
            </p>
            <p class="text-xl font-normal">
                <span class="font-semibold">Invoice To Entity ABN:</span> {invoiceToEntityABN}
            </p>
            <p class="text-xl font-normal">
                <span class="font-semibold">Invoice To Wallet Address:{" "}</span>
                {invoiceToWalletAddress}
            </p>
        </div>
    )
}

export default InvoiceCard
