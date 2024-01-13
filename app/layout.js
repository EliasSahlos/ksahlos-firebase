'use client'
import './globals.css'
import { AOSInit } from '@/aos';
import LeftWhitebar from '@/components/Layout/Borders/LeftWhitebar';
import RightWhitebar from '@/components/Layout/Borders/RightWhitebar';
import Footer from '@/components/Layout/Footer/Footer';
import Header from '@/components/Layout/Header/Header';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <AOSInit/>
        <body>
        <div className='flex flex-row min-h-screen'>
            <LeftWhitebar/>
            <div className="flex flex-col w-full">
                <div className="sticky top-0 z-50"> {/* Use Tailwind CSS classes for sticky Header */}
                    <Header/>
                </div>
                <div className="flex-grow">
                    {children}
                </div>
            </div>
            <RightWhitebar/>
            <div className="fixed bottom-0 z-50 w-full"> {/* Use Tailwind CSS classes for fixed Footer */}
                <Footer/>
            </div>
        </div>
        </body>
        </html>
    )
}
