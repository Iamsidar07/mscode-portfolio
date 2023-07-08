import BlurEffect from '@/components/BlurEffect'
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


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
