import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  Logo,
} from "@/components/icons";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky" className="backdrop-blur-md bg-black/20 border-b border-white/10">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-2 group" href="/">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Logo className="relative text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">WebinarWizard</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-6 justify-start ml-6">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href} className="relative group">
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <NextLink
                className={clsx(
                  "text-white/80 hover:text-white transition-colors duration-300",
                  "data-[active=true]:text-transparent data-[active=true]:bg-clip-text data-[active=true]:bg-gradient-to-r data-[active=true]:from-primary data-[active=true]:to-secondary",
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-4">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter} className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <TwitterIcon className="text-primary group-hover:text-white transition-colors duration-300" />
            </div>
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <div className="relative group">
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>

            <Button
              as={Link}
              className="relative glow-button py-6 px-6 rounded-full text-white font-medium group-hover:scale-105 transition-transform duration-300"
              href="#register"
            >
              Register Now
            </Button>
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter} className="relative group">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <TwitterIcon className="text-primary group-hover:text-white transition-colors duration-300" />
          </div>
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle className="text-white" />
      </NavbarContent>

      <NavbarMenu className="backdrop-blur-md bg-black/80">
        <div className="mx-4 mt-8 flex flex-col gap-4">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="relative group">
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <Link
                className={
                  index === siteConfig.navMenuItems.length - 1
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-medium"
                    : "text-white/80 hover:text-white transition-colors duration-300"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
