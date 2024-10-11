"use client";

import Link from "next/link";
import Button from "../ui/button";
import Icon from "../ui/icon";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface INavListItem {
  title: string;
  href: string;
}

const navListItems: INavListItem[] = [
  { title: "Products", href: "#" },
  { title: "Solutions", href: "#" },
  { title: "Pricing", href: "#" },
  { title: "Resources", href: "#" },
  { title: "Log In", href: "#" },
];

const Header: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const mobileNavRef = useRef<HTMLDivElement | null>(null);

  const onMenuButtonClick = () => setIsMobileNavOpen(true);
  const onMenuCloseButtonClick = () => setIsMobileNavOpen(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(e.target as Node)) onMenuCloseButtonClick();
    };

    if (isMobileNavOpen) {
      document.addEventListener("click", handleClickOutside);
      return;
    }

    document.removeEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileNavOpen]);

  return (
    <header className="h-auto md:h-24 w-full max-w-screen-xl mx-auto flex items-center justify-between py-4 px-4 lg:px-20">
      <h1 className="font-bold text-2xl text-secondary leading-[35.2px]">
        Collers
      </h1>
      <button className="block md:hidden" onClick={onMenuButtonClick}>
        <Icon name="menuScale" />
      </button>
      <nav className="hidden md:flex items-center space-x-4">
        <ul className="flex space-x-4 font-medium text-secondary">
          {navListItems.map((item: INavListItem, _idx: number) => (
            <li key={_idx} className="py-3 px-2 leading-6">
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <Button color="secondary" variant="outlined" size="small">
          Sign up now
        </Button>
      </nav>
      
      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 left-0 top-0 h-[100vh] transition-all duration-300 ease-in w-[70vw] sm:w-[70vw] md:hidden bg-primary z-50",
          isMobileNavOpen ? `translate-x-0` : `-translate-x-[120%]`
        )}
        ref={mobileNavRef}
      >
        <button
          className="text-white font-extrabold absolute right-2 border-4 w-8 h-8 border-white hover:bg-white hover:text-primary flex items-center justify-center top-2 text-xl"
          onClick={onMenuCloseButtonClick}
        >
          -
        </button>

        <nav className="ml-4 space-y-16 font-semibold">
          <h1 className="text-4xl text-white mt-16">Collers</h1>
          <ul className="flex flex-col space-y-4 font-medium text-white">
            {navListItems.map((item: INavListItem, _idx: number) => (
              <li
                key={_idx}
                className={cn(
                  "py-3 px-2 leading-6 text-sxl transition-all duration-500 ease-linear",
                  isMobileNavOpen
                    ? `translate-x-0 opacity-1`
                    : `-translate-x-[120%] opacity-0`
                )}
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
