import React from 'react';

export default function Header(): JSX.Element {
    return (
        <div className="w-full h-[100px] flex items-center justify-center bg-[#313e54] text-white">
            <h1 className="text-4xl font-serif text-center p-5">
                Account's Transactions
            </h1>
        </div>
    )
}