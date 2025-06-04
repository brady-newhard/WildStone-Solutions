import * as React from "react"
import { cn } from "@/lib/utils"

function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-white p-6 shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Card } 