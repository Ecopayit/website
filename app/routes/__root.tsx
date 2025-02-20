import type { ReactNode } from 'react'
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'

import '@/styles/app.css'

const meta = [
  { charSet: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  { title: 'EcoPay - Secure Crypto Exchange' },
]

export const Route = createRootRoute({
  head: () => ({
    meta,
  }),
  component: RootComponent,
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-destructive">Something went wrong!</h1>
        <p className="text-muted-foreground">{error?.message || 'An unexpected error occurred'}</p>
        <a href="/" className="text-primary hover:underline">Return to home</a>
      </div>
    </div>
  ),
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div id="app">
          {children}
        </div>
        <Scripts />
      </body>
    </html>
  )
}