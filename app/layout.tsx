"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Provider from './_trpc/Provider'
const inter = Inter({ subsets: ['latin'] })
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/lib/redux/store';

//comeny
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <ReduxProvider store={store}>
     <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
   </ReduxProvider>
  )
}
