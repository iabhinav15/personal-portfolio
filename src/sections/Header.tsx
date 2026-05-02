"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Project",
    href: "#project-section",
  },
  {
    label: "About",
    href: "#about-section",
  },
  {
    label: "Contact",
    href: "#contact-section",
  },
];

const activeClasses =
  "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900";

export const Header = () => {
  const [activeSection, setActiveSection] = useState(navItems[0].href);

  useEffect(() => {
    const getActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      const sections = navItems
        .filter(({ href }) => href.startsWith("#") && href.length > 1)
        .map(({ href }) => ({
          href,
          element: document.querySelector(href),
        }))
        .filter(
          (section): section is { href: string; element: Element } =>
            section.element !== null,
        );

      const currentSection = sections
        .filter(({ element }) => {
          const top = element.getBoundingClientRect().top + window.scrollY;
          return top <= scrollPosition;
        })
        .at(-1);

      setActiveSection(currentSection?.href ?? navItems[0].href);
    };

    getActiveSection();
    window.addEventListener("scroll", getActiveSection, { passive: true });
    window.addEventListener("resize", getActiveSection);

    return () => {
      window.removeEventListener("scroll", getActiveSection);
      window.removeEventListener("resize", getActiveSection);
    };
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border bg-white/10 backdrop-blur border-white/15 rounded-full">
        {navItems.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={`nav-item ${activeSection === href ? activeClasses : ""}`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
};
