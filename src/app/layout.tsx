import BlurEffect from '@/components/BlurEffect'
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'aicodebuddy',
  description: 'aicodebuddy: ai coder friend.',
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
