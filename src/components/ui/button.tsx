import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-white shadow-[0_1px_3px_rgba(0,0,0,0.12)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:scale-[1.02] active:scale-[0.98]",
        destructive:
          "bg-destructive text-white hover:opacity-90 shadow-[0_1px_3px_rgba(0,0,0,0.12)]",
        outline:
          "border-2 bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:scale-[1.01] active:scale-[0.99]",
        secondary:
          "text-white shadow-[0_1px_3px_rgba(0,0,0,0.12)] hover:opacity-90",
        ghost: "hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:scale-[1.01] active:scale-[0.99]",
        link: "underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Apply semantic colors based on variant
    const getVariantStyles = () => {
      switch (variant) {
        case 'default':
          return {
            backgroundColor: 'var(--brand)',
            borderColor: 'var(--brand)',
            '--ring-color': 'var(--brand)',
            ...style
          }
        case 'outline':
          return {
            borderColor: 'var(--hairline)',
            color: 'var(--text)',
            backgroundColor: 'var(--surface)',
            '--ring-color': 'var(--brand)',
            ...style
          }
        case 'secondary':
          return {
            backgroundColor: 'var(--bg-tint)',
            color: 'var(--text)',
            '--ring-color': 'var(--brand)',
            ...style
          }
        case 'ghost':
          return {
            backgroundColor: 'transparent',
            color: 'var(--text)',
            '--ring-color': 'var(--brand)',
            ...style
          }
        case 'link':
          return {
            color: 'var(--brand)',
            backgroundColor: 'transparent',
            '--ring-color': 'var(--brand)',
            ...style
          }
        default:
          return style
      }
    }
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        style={{
          ...getVariantStyles(),
          '--ring-offset-color': 'var(--bg)',
        } as React.CSSProperties & { '--ring-color': string; '--ring-offset-color': string }}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }