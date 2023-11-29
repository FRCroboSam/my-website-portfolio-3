'use client';

import {Roboto } from 'next/font/google'
import './globals.css'
import Navbar from "./components/Navbar";
import { Analytics } from '@vercel/analytics/react';// import { Analytics } from '@vercel/analytics/react'
 
const roboto = Roboto({
  weight: '100',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}