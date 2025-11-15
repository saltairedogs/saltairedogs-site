import Link from 'next/link'
import Image from 'next/image'
import { SheetHeader, SheetTitle } from './ui/sheet'
import { ChevronRight } from 'lucide-react'

interface MobileNavProps {
  navigation: Array<{ name: string; href: string }>
  currentPath: string
  onClose: () => void
}

export function MobileNav({ navigation, currentPath, onClose }: MobileNavProps) {
  return (
    <div className="flex max-w-xs flex-col">
      {/* Brand header */}
      <SheetHeader className="pb-3">
        <div className="flex items-center gap-3">
          <Image
            src="/saltaire-dogs-logo-official.webp"
            alt="Saltaire Dogs + Pets"
            width={28}
            height={28}
            className="h-7 w-7"
            priority
          />
          <SheetTitle className="text-[15px] font-semibold tracking-wide">
            Saltaire Dogs + Pets
          </SheetTitle>
        </div>
      </SheetHeader>

      {/* Nav list */}
      <nav className="mt-1 flex flex-col" aria-label="Site">
        {navigation.map((item) => {
          const active =
            currentPath === item.href || (item.href !== '/' && currentPath?.startsWith(item.href))

        return (
          <Link
            key={item.name}
            href={item.href}
            onClick={onClose}
            className={[
              'flex items-center justify-between rounded-lg px-3 py-3 transition-colors',
              'text-[15px] font-medium',
              active
                ? 'bg-[#EDE9DF] text-[#131415]'
                : 'text-[#131415]/80 hover:bg-[#EFEDE6] hover:text-[#131415]'
            ].join(' ')}
            aria-current={active ? 'page' : undefined}
          >
            <span className="uppercase tracking-[0.06em]">{item.name}</span>
            <ChevronRight className="h-4 w-4 opacity-60" />
          </Link>
        )
        })}
      </nav>

      {/* Soft divider + tagline */}
      <div className="mt-3 border-t border-[#E6E3DA]" />
      <p className="pt-3 text-xs text-[#131415]/60">
        Friendly local walks, visits & pet care across Saltaire.
      </p>
    </div>
  )
}
