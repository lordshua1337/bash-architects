import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BASH Architects - Workflow Automation, APIs & Integrations',
  description: 'Not just building tools -- architecting the workflows, APIs, and integrations that make your business run. With or without us.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
