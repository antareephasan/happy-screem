"use client";

import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { cn } from "../../utils/cn";
import { getColorSchemeClasses } from "../../utils/colorSchemes";
import type { FooterProps, SocialLink } from "../../types/components";

/**
 * Enhanced Footer Component with Color Scheme Support
 *
 * Features:
 * - Contact information section
 * - Multiple link columns
 * - Social media links
 * - Legal links
 * - Full color scheme support
 * - Toggleable sections
 *
 * @example
 * <Footer
 *   logo={{ src: "/logo.svg", alt: "Logo" }}
 *   address="123 Main St, City"
 *   phone="0800 123 4567"
 *   email="info@example.com"
 *   colorScheme="dark"
 * />
 */
export function Footer({
  logo,
  address = "Level 1, 12 Voorbeeldstraat, Amsterdam 1000 AB",
  phone = "0800 123 4567",
  email = "info@relume.io",
  linkSections = [
    {
      links: [
        { text: "Link Eén", href: "#" },
        { text: "Link Twee", href: "#" },
        { text: "Link Drie", href: "#" },
        { text: "Link Vier", href: "#" },
        { text: "Link Vijf", href: "#" },
      ]
    },
    {
      links: [
        { text: "Link Zes", href: "#" },
        { text: "Link Zeven", href: "#" },
        { text: "Link Acht", href: "#" },
        { text: "Link Negen", href: "#" },
        { text: "Link Tien", href: "#" },
      ]
    }
  ],
  socialLinks = [
    { platform: 'facebook', href: '#' },
    { platform: 'instagram', href: '#' },
    { platform: 'twitter', href: '#' },
    { platform: 'linkedin', href: '#' },
    { platform: 'youtube', href: '#' },
  ],
  copyright = "© 2024 Relume. All rights reserved.",
  legalLinks = [
    { text: "Privacybeleid", href: "#" },
    { text: "Algemene Voorwaarden", href: "#" },
    { text: "Cookies Instellingen", href: "#" },
  ],

  // Toggleable features
  showAddress = true,
  showContact = true,
  showSocial = true,
  showLegalLinks = true,

  colorScheme = 'light',
  className,
}: FooterProps) {
  const colors = getColorSchemeClasses(colorScheme);

  const getSocialIcon = (platform: SocialLink['platform']) => {
    const iconClass = cn("size-6", colors.text);

    switch (platform) {
      case 'facebook':
        return <BiLogoFacebookCircle className={iconClass} />;
      case 'instagram':
        return <BiLogoInstagram className={iconClass} />;
      case 'twitter':
        return <FaXTwitter className={cn("size-6 p-0.5", colors.text)} />;
      case 'linkedin':
        return <BiLogoLinkedinSquare className={iconClass} />;
      case 'youtube':
        return <BiLogoYoutube className={iconClass} />;
      default:
        return null;
    }
  };

  return (
    <footer
      id="relume"
      className={cn(
        "px-[5%] py-12 md:py-18 lg:py-20",
        colors.background,
        className
      )}
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="mb-6 md:mb-8">
              <a href="#">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={cn("inline-block", logo.className)}
                />
              </a>
            </div>

            {/* TOGGLEABLE: Address and contact info - controlled by showAddress and showContact props */}
            {(showAddress || showContact) && (
              <div className="mb-6 md:mb-8">
                {showAddress && address && (
                  <>
                    <p className={cn("mb-1 text-sm font-semibold", colors.text)}>
                      Adres:
                    </p>
                    <p className={cn("mb-5 text-sm md:mb-6", colors.text)}>
                      {address}
                    </p>
                  </>
                )}

                {showContact && (phone || email) && (
                  <>
                    <p className={cn("mb-1 text-sm font-semibold", colors.text)}>
                      Contact:
                    </p>
                    {phone && (
                      <a
                        href={`tel:${phone}`}
                        className={cn(
                          "block text-sm underline decoration-current underline-offset-1",
                          colors.text
                        )}
                      >
                        {phone}
                      </a>
                    )}
                    {email && (
                      <a
                        href={`mailto:${email}`}
                        className={cn(
                          "block text-sm underline decoration-current underline-offset-1",
                          colors.text
                        )}
                      >
                        {email}
                      </a>
                    )}
                  </>
                )}
              </div>
            )}

            {/* TOGGLEABLE: Social links - controlled by showSocial prop */}
            {showSocial && socialLinks && socialLinks.length > 0 && (
              <div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.href}>
                    {getSocialIcon(social.platform)}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Link sections */}
          {linkSections && linkSections.length > 0 && (
            <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
              {linkSections.map((section, sectionIndex) => (
                <ul key={sectionIndex}>
                  {section.title && (
                    <li className={cn("pb-4 text-sm font-semibold", colors.text)}>
                      {section.title}
                    </li>
                  )}
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="py-2 text-sm font-semibold">
                      <a href={link.href} className={colors.text}>
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          )}
        </div>

        <div className={cn("h-px w-full", colors.text === 'text-white' ? 'bg-white' : 'bg-black')} />

        <div className="flex flex-col-reverse items-start justify-between pt-6 pb-4 text-sm md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className={cn("mt-8 md:mt-0", colors.text)}>
            {copyright}
          </p>

          {/* TOGGLEABLE: Legal links - controlled by showLegalLinks prop */}
          {showLegalLinks && legalLinks && legalLinks.length > 0 && (
            <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
              {legalLinks.map((link, index) => (
                <li key={index} className="underline">
                  <a href={link.href} className={colors.text}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}
