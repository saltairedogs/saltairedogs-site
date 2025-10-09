// Update the import path below to the correct relative path if alias is not configured
import { Badge as UIBadge } from '../components/ui/badge'
import { cn } from '../lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <UIBadge variant={variant} className={cn(className)}>
      {children}
    </UIBadge>
  )
}