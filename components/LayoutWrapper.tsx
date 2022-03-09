import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { ReactNode } from 'react'
import { useRouter } from 'next/router'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  const router = useRouter()
  return (
    <>
      <header className="fixed z-30 w-screen border-b-[1px] border-gray-700/10 bg-white/50 py-4 backdrop-blur dark:bg-black/50">
        <SectionContainer>
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" aria-label="Tailwind CSS Blog">
                <div className="flex items-center justify-between text-2xl font-semibold">
                  ~{router.asPath}
                </div>
              </Link>
            </div>
            <div className="flex items-center text-base leading-5">
              <div className="hidden sm:block">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <ThemeSwitch />
              <MobileNav />
            </div>
          </div>
        </SectionContainer>
      </header>
      <SectionContainer>
        <div className="h-20"></div>
        <div className="flex h-screen flex-col justify-between">
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
