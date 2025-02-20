import { createFileRoute } from '@tanstack/react-router'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import ExchangeWidget from "@/components/exchange-widget"

export const Route = createFileRoute('/')({
  component: Home
})

function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Buy Crypto Safely & Easily
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your trusted platform for secure cryptocurrency purchases using your preferred fiat currency
          </p>
        </div>
        
        <ExchangeWidget />
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
            <p className="text-muted-foreground">Bank-grade security protocols and cold storage for your assets</p>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Competitive Rates</h3>
            <p className="text-muted-foreground">Real-time market rates with transparent pricing</p>
          </Card>

          <Card className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Transfers</h3>
            <p className="text-muted-foreground">Quick processing times for both fiat and crypto transactions</p>
          </Card>
        </div>
      </section>

      {/* Fees & Rates Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Transparent Fees & Rates</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Trading Fees</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Standard trading fee: 0.1%</li>
              <li>• High-volume discounts available</li>
              <li>• No hidden charges</li>
              <li>• Volume-based fee tiers</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Exchange Rates</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Real-time market rates</li>
              <li>• Competitive spreads</li>
              <li>• Multiple fiat currencies supported</li>
              <li>• Live price updates</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Card className="p-8 bg-primary/5">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of users who trust our platform for their crypto purchases
          </p>
          <Button size="lg" className="text-lg px-8">
            Create Account
          </Button>
        </Card>
      </section>
    </main>
  )
}