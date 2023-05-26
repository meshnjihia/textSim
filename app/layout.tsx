import '@app/styles/globals.css'
import { Quicksand } from 'next/font/google'
import { cn } from './libs/utils'
import ToasterProvider from '@app/providers/ToastProvider'
import AppProvider from '@app/providers/AppProvider'
import Navbar from '@app/components/Navbar'

const font = Quicksand({ subsets: ['latin'] })

export const metadata = {
  title: 'TextSim',
  description: 'Text similarity test app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn('bg-white text-slate-900 antialiased', font.className)}
    >
      <body
        className={cn(
          'min-h-screen bg-slate-50 dark:bg-slate-900 antialiased',
          font.className,
        )}
      >
        <AppProvider>
          <ToasterProvider />
          <Navbar/>
          {children}
        </AppProvider>
        {/* allow for more height for mobile devices */}
        <div className="h-40 md:hidden" />
      </body>
    </html>
  )
}
