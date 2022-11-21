import React from 'react';
import Header from '../component/header/Header';

interface PropTypes {
    children: React.ReactNode;
}

export default function Layout({ children }: PropTypes): JSX.Element {
    return (
        <div className='w-full h-full flex flex-col overflow-hidden'>
            <div className='flex-grow-0 flex-shrink-0'>
                <Header></Header>
            </div>
            <div className='flex-grow flex-shrink overflow-auto'>
                {
                    children
                }
            </div>
        </div>
    )
}