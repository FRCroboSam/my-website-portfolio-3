import { Roboto } from 'next/font/google';
import './globals.css'; // Assuming you have your global styles here
import Navbar from "./components/Navbar";
import { AnalyticsWrapper } from './components/Analytics2';

const roboto = Roboto({
  weight: '100',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="bg-black text-primary-100"> {/* Set your desired text color and background color */}
        <Navbar />
        <div className="mt-16"> {/* Add margin-top to create space */}
          {children}
        </div>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
