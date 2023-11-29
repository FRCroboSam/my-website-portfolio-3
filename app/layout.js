
import {Roboto } from 'next/font/google'
import './globals.css'
import Navbar from "./components/Navbar";
 import { AnalyticsWrapper } from './components/Analytics2'
 
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
        <AnalyticsWrapper />
      </body>
    </html>
  )
}