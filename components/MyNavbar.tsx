
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Avatar, createTheme, ThemeProvider } from "flowbite-react";
import Link from "next/link";

const navTheme = createTheme({
  "navbar": {
    "link": {
      "active": {
        "on": "!pb-0.5 !text-[#485641] dark:!text-white shadow-none shadow-[0_6px_4px_-4px_rgba(40,54,72,0.25)] dark:shadow-[0_6px_4px_-4px_rgba(6,174,146,0.25)]",
      }
    }
  }
})
export function MyNavbar() {
  return (
    <ThemeProvider theme={navTheme}>
    <Navbar fluid rounded className="bg-[#EAEDE8] sticky top-0 z-10">
      <NavbarBrand className="gap-4 h-8">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-[#485641] dark:text-white">Komal Kiri</span>
        <span className="self-center hidden md:inline whitespace-nowrap text-xl font-semibold text-[#485641] dark:text-white">| &nbsp; Software Developer</span>
      </NavbarBrand>
      <NavbarToggle className="mr-20"/>
      <NavbarCollapse className="pr-34">
        <NavbarLink as={Link} href="#home">
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#journey">
          Journey
        </NavbarLink>
        <NavbarLink as={Link} href="#projects">Projects</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
    </ThemeProvider>
  );
}
