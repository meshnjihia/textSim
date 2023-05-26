'use client'
import React from 'react'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
      <ThemeProvider>
          <SessionProvider>
              {children}
          </SessionProvider>
    </ThemeProvider>
  )
}

export default AppProvider