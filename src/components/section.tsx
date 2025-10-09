import { cn } from '../lib/utils'
import { Container } from './container'

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerSize?: 'sm' | 'md' | 'lg' | 'xl'
  id?: string
  eyebrow?: string
  title?: string
  description?: string
  actions?: React.ReactNode
}

export function Section({
  children,
  className,
  containerSize = 'lg',
  id,
  eyebrow,
  title,
  description,
  actions,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-16 lg:py-24', className)}
    >
      <Container size={containerSize}>
        {(eyebrow || title || description || actions) && (
          <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
            {eyebrow && (
              <p 
                className="mb-4 text-sm font-semibold uppercase tracking-wide"
                style={{ color: 'var(--brand)' }}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 
                className="mb-6 text-3xl lg:text-4xl font-bold tracking-tight leading-tight"
                style={{ color: 'var(--text)' }}
              >
                {title}
              </h2>
            )}
            {description && (
              <p 
                className="text-lg lg:text-xl leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                {description}
              </p>
            )}
            {actions && <div className="mt-8">{actions}</div>}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}