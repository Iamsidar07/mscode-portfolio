import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: "Manoj kumar's Portfolio",
  description: 'Manoj kumar is a full stack developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
              <Toaster
                  position="top-center"
                  reverseOrder={false}
              />
        <Navbar />
        <main>
          {
            children
          }
        </main>
        <Footer/>
      </body>
    </html>
  )
}
