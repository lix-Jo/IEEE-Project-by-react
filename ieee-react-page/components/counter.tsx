"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Minus, RotateCcw } from "lucide-react"

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <Card className="bg-white/95 dark:bg-ieee-card border-ieee-light dark:border-white/10">
      <CardHeader className="text-center">
        <CardTitle className="text-ieee-blue dark:text-white">Interactive Counter</CardTitle>
        <CardDescription className="dark:text-gray-300">Increase or decrease the counter value</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className="text-7xl font-bold text-ieee-blue dark:text-white mb-4">{count}</div>
        </div>

        <div className="flex gap-3 justify-center flex-wrap">
          <Button
            onClick={() => setCount(count - 1)}
            size="lg"
            variant="outline"
            className="bg-white dark:bg-ieee-dark hover:bg-ieee-light dark:hover:bg-ieee-accent/20 text-ieee-blue dark:text-white border-ieee-blue dark:border-white/20"
          >
            <Minus className="mr-2 h-5 w-5" />
            Decrease
          </Button>

          <Button
            onClick={() => setCount(0)}
            size="lg"
            variant="outline"
            className="bg-white dark:bg-ieee-dark hover:bg-ieee-light dark:hover:bg-ieee-accent/20 text-ieee-blue dark:text-white border-ieee-blue dark:border-white/20"
          >
            <RotateCcw className="mr-2 h-5 w-5" />
            Reset
          </Button>

          <Button
            onClick={() => setCount(count + 1)}
            size="lg"
            className="bg-ieee-blue hover:bg-ieee-blue-hover dark:bg-ieee-accent dark:hover:bg-ieee-accent/80 text-white"
          >
            <Plus className="mr-2 h-5 w-5" />
            Increase
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
