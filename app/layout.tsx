import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FoodSafety Assistant - Rui Oliveira Dias',
  description: 'Assistente de Segurança Alimentar com IA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <main className="min-h-screen bg-white">
          {children}
        </main>
      </body>
    </html>
  )
}
