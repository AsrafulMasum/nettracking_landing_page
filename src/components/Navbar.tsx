"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const navLinks = (
    <>
      <li
        className={`text-[#767676] font-medium leading-[150%] ${
          pathname === "/" && "text-primary"
        }`}
      >
        <Link href="/">Home</Link>
      </li>
      <li
        className={`text-[#767676] font-medium leading-[150%] ${
          pathname === "/about" && "text-primary"
        }`}
      >
        <Link href="/about">About</Link>
      </li>
      <li
        className={`text-[#767676] font-medium leading-[150%] ${
          pathname === "/terms&condition" && "text-primary"
        }`}
      >
        <Link href="/terms&condition">Terms & Condition</Link>
      </li>
      <li
        className={`text-[#767676] font-medium leading-[150%] ${
          pathname === "/cookiePolicy" && "text-primary"
        }`}
      >
        <Link href="/cookiePolicy">Cookie-Policy</Link>
      </li>
      <li
        className={`text-[#767676] font-medium leading-[150%] ${
          pathname === "/privacyPolicy" && "text-primary"
        }`}
      >
        <Link href="/privacyPolicy">Privacy Policy</Link>
      </li>
    </>
  );
  return (
    <div className="relative z-50">
      <nav className="h-[99px] 2xl:px-[149px] flex items-center w-full fixed bg-white dark:bg-background">
        <div className="flex justify-between items-center gap-8 w-full">
          <div className="hidden lg:flex items-center gap-20">
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-bold leading-8">Nettracking</h4>
              <Switch checked={isDark} onCheckedChange={setIsDark} />
            </div>
            <ul className="flex justify-center items-center gap-8">
              {navLinks}
            </ul>
          </div>

          <div className="w-full lg:w-auto flex items-center justify-between gap-4">
            <Button variant="secondary">Sign in</Button>
            <Button className="bg-secondary/50 dark:bg-white dark:text-secondary">Sign up</Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
