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
            <AOSInit />
            <body className="flex flex-col min-h-screen">
                <div className="sticky top-0 z-50">
                    <Header />
                </div>
                <div className="flex-grow">
                    <div className="flex flex-row min-h">
                        <LeftWhitebar className="sticky top-0 z-50" />
                        <div className="flex flex-col w-full">
                            {children}
                        </div>
                        <RightWhitebar className="sticky top-0 right-0 z-50" />
                    </div>
                </div>
                <div className="fixed bottom-0 z-50 w-full">
                    <Footer />
                </div>
            </body>
        </html>
    )
}
