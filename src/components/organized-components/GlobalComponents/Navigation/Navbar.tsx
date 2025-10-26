'use client'

import { Button, useMediaQuery } from '@relume_io/relume-ui'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { RxChevronDown, RxChevronRight } from 'react-icons/rx'
import { cn } from '../../utils/cn'
import { getColorSchemeClasses } from '../../utils/colorSchemes'
import type { NavbarProps } from '../../types/components'

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width: 991px)')
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev)
  }
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true)
  }
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false)
  }
  const animateMobileMenu = isMobileMenuOpen ? 'open' : 'close'
  const animateMobileMenuButtonSpan = isMobileMenuOpen ? ['open', 'rotatePhase'] : 'closed'
  const animateDropdownMenu = isDropdownOpen ? 'open' : 'close'
  const animateDropdownMenuIcon = isDropdownOpen ? 'rotated' : 'initial'
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  }
}

/**
 * Enhanced Navbar Component with Color Scheme Support
 *
 * Features:
 * - Responsive mobile menu
 * - Dropdown navigation support
 * - Full color scheme support
 * - Toggleable action buttons
 *
 * @example
 * <Navbar
 *   logo={{ src: "/logo.svg", alt: "Logo" }}
 *   links={[
 *     { text: "Home", href: "/" },
 *     { text: "About", href: "/about" }
 *   ]}
 *   colorScheme="light"
 * />
 */
export function Navbar({
  logo,
  links = [
    { text: 'Cursussen Online', href: '#' },
    { text: 'Trainingen Aanbod', href: '#' },
    { text: 'Ouder Support', href: '#' },
  ],
  dropdowns,
  buttons = [
    { text: 'Bekijk', variant: 'secondary' },
    { text: 'Meer', variant: 'default' },
  ],

  // Toggleable features
  showButtons = true,

  colorScheme = 'light',
  className,
}: NavbarProps) {
  const useActive = useRelume()
  const colors = getColorSchemeClasses(colorScheme)

  return (
    <section
      id="relume"
      className={cn(
        'relative z-[999] flex min-h-16 w-full items-center px-[5%] md:min-h-18',
        colors.background,
        colors.border,
        'border-b',
        className,
      )}
    >
      <div className="mx-auto flex size-full max-w-full items-center justify-between">
        <a href="/">
          <img src={logo.src} alt={logo.alt} className={logo.className} />
        </a>
        <div
          className={cn(
            'absolute hidden h-screen overflow-auto px-[5%] pt-4 pb-24 md:pb-0',
            'lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-between lg:px-0 lg:pt-0',
            colors.background,
            colors.border,
            'border-b lg:border-none lg:bg-none',
          )}
        >
          <div className="flex flex-col items-center lg:flex-row">
            {links &&
              links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={cn(
                    'relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base',
                    colors.text,
                  )}
                >
                  {link.text}
                </a>
              ))}

            {dropdowns &&
              dropdowns.map((dropdown, index) => (
                <div
                  key={index}
                  onMouseEnter={useActive.openOnDesktopDropdownMenu}
                  onMouseLeave={useActive.closeOnDesktopDropdownMenu}
                >
                  <button
                    className={cn(
                      'relative flex w-full items-center justify-between py-3 text-md whitespace-nowrap',
                      'lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6 lg:text-base',
                      colors.text,
                    )}
                    onClick={useActive.openOnMobileDropdownMenu}
                  >
                    <span>{dropdown.label}</span>
                    <motion.span
                      animate={useActive.animateDropdownMenuIcon}
                      variants={{
                        rotated: { rotate: 180 },
                        initial: { rotate: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <RxChevronDown />
                    </motion.span>
                  </button>
                  {/* Dropdown menu content would go here */}
                </div>
              ))}
          </div>

          {/* TOGGLEABLE: Action buttons - controlled by showButtons prop */}
          {showButtons && buttons && buttons.length > 0 && (
            <div className="flex items-center gap-4">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  title={button.text}
                  variant={
                    button.variant ||
                    ((index === 0 ? colors.buttonSecondary : colors.buttonPrimary) as any)
                  }
                  size="sm"
                  onClick={button.onClick}
                >
                  {button.text}
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="-mr-2 flex size-12 cursor-pointer flex-col items-center justify-center lg:hidden"
          onClick={useActive.toggleMobileMenu}
        >
          <motion.span
            className={cn(
              'my-[3px] h-0.5 w-6',
              colors.text === 'text-white' ? 'bg-white' : 'bg-black',
            )}
            animate={useActive.animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: 8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
              closed: {
                translateY: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              },
            }}
          />
          <motion.span
            className={cn(
              'my-[3px] h-0.5 w-6',
              colors.text === 'text-white' ? 'bg-white' : 'bg-black',
            )}
            animate={useActive.animateMobileMenu}
            variants={{
              open: { width: 0, transition: { duration: 0.1 } },
              closed: {
                width: '1.5rem',
                transition: { delay: 0.3, duration: 0.2 },
              },
            }}
          />
          <motion.span
            className={cn(
              'my-[3px] h-0.5 w-6',
              colors.text === 'text-white' ? 'bg-white' : 'bg-black',
            )}
            animate={useActive.animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: -8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
              closed: {
                translateY: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              },
            }}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        <motion.div
          variants={{ open: { height: '100dvh' }, close: { height: 'auto' } }}
          animate={useActive.animateMobileMenu}
          initial="close"
          exit="close"
          className="absolute top-full right-0 left-0 w-full overflow-hidden lg:hidden"
          transition={{ duration: 0.4 }}
        >
          <motion.div
            variants={{ open: { y: 0 }, close: { y: '-100%' } }}
            animate={useActive.animateMobileMenu}
            initial="close"
            exit="close"
            transition={{ duration: 0.4 }}
            className={cn(
              'absolute top-0 right-0 left-0 block h-dvh overflow-auto px-[5%] pt-4 pb-8',
              colors.background,
              colors.border,
              'border-b',
            )}
          >
            <div className="flex flex-col">
              {links &&
                links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={cn('relative block w-auto py-3 text-md', colors.text)}
                  >
                    {link.text}
                  </a>
                ))}

              {showButtons && buttons && buttons.length > 0 && (
                <div className="mt-6 flex flex-col gap-4">
                  {buttons.map((button, index) => (
                    <Button
                      key={index}
                      title={button.text}
                      variant={
                        button.variant ||
                        ((index === 0 ? colors.buttonSecondary : colors.buttonPrimary) as any)
                      }
                      size="sm"
                      onClick={button.onClick}
                    >
                      {button.text}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
