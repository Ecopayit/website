import { useState, useEffect } from "react"
import { ArrowDown, Info } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Mock exchange rates and fees
const EXCHANGE_RATES = {
  USD: {
    BTC: 0.000023,
    ETH: 0.00037,
    USDT: 1,
    USDC: 1,
  },
  EUR: {
    BTC: 0.000025,
    ETH: 0.0004,
    USDT: 1.08,
    USDC: 1.08,
  },
  GBP: {
    BTC: 0.000029,
    ETH: 0.00046,
    USDT: 1.26,
    USDC: 1.26,
  },
}

type Currency = "USD" | "EUR" | "GBP"
type Crypto = "BTC" | "ETH" | "USDT" | "USDC"

const TRANSACTION_FEE_PERCENT = 0.01 // 1%

export default function ExchangeWidget() {
  const [amount, setAmount] = useState<string>("")
  const [fromCurrency, setFromCurrency] = useState<string>("USD")
  const [toCurrency, setToCurrency] = useState<string>("BTC")
  const [exchangeAmount, setExchangeAmount] = useState<number>(0)
  const [fee, setFee] = useState<number>(0)

  // Handle client-side initialization
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    if (amount && !isNaN(Number(amount))) {
      const numAmount = Number(amount)
      const exchangeRate = EXCHANGE_RATES[fromCurrency as Currency][toCurrency as Crypto]
      const calculatedAmount = numAmount * exchangeRate
      const calculatedFee = numAmount * TRANSACTION_FEE_PERCENT

      setExchangeAmount(calculatedAmount)
      setFee(calculatedFee)
    } else {
      setExchangeAmount(0)
      setFee(0)
    }
  }, [amount, fromCurrency, toCurrency, isClient])

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Exchange Currency</CardTitle>
        <CardDescription>Convert fiat to crypto with real-time rates</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">You Pay</label>
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD</SelectItem>
                <SelectItem value="EUR">EUR</SelectItem>
                <SelectItem value="GBP">GBP</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Input
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="text-lg"
          />
        </div>

        <div className="flex justify-center">
          <div className="bg-muted p-2 rounded-full">
            <ArrowDown className="h-6 w-6" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">You Receive</label>
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Select crypto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BTC">BTC</SelectItem>
                <SelectItem value="ETH">ETH</SelectItem>
                <SelectItem value="USDT">USDT</SelectItem>
                <SelectItem value="USDC">USDC</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="p-4 bg-muted rounded-lg text-lg font-medium" suppressHydrationWarning>
            {isClient ? `${exchangeAmount.toFixed(8)} ${toCurrency}` : '0.00000000'}
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              Exchange Rate
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Current market exchange rate</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <span suppressHydrationWarning>
              {isClient ? `1 ${fromCurrency} = ${EXCHANGE_RATES[fromCurrency as Currency][toCurrency as Crypto]} ${toCurrency}` : 'Loading...'}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              Network Fee
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Transaction processing fee (1%)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <span suppressHydrationWarning>
              {isClient ? `${fee.toFixed(2)} ${fromCurrency}` : '0.00'}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" size="lg">
          Exchange Now
        </Button>
      </CardFooter>
    </Card>
  )
}

