import Link from 'next/link'
import { Button } from './ui/button'
import { SheetHeader, SheetTitle } from './ui/sheet'

interface MobileNavProps {
  navigation: Array<{ name: string; href: string }>
  onClose: () => void
}

export function MobileNav({ navigation, onClose }: MobileNavProps) {
  return (
    <div className="flex max-w-xs flex-col">
      <SheetHeader className="pb-3">
        <SheetTitle className="text-base">Menu</SheetTitle>
      </SheetHeader>

      <nav className="flex flex-col gap-1" aria-label="Site">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={onClose}
            className="block rounded-md px-3 py-2 text-[15px] font-medium text-foreground transition-colors hover:bg-muted"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="border-t pt-3">
        <Button
          asChild
          className="w-full h-9 text-sm text-white"
          style={{ backgroundColor: 'var(--brand)', borderColor: 'var(--brand)' }}
          onClick={onClose}
        >
          <Link href="/contact">Book Free Meet & Greet</Link>
        </Button>
      </div>
    </div>
  )
}