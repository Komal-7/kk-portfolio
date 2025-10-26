
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Avatar } from "flowbite-react";
import Link from "next/link";

export function MyNavbar() {
  return (
    <Navbar fluid rounded className="bg-[#EAEDE8] sticky top-0 z-10">
      <NavbarBrand className="gap-4 pl-14 h-8">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-[#485641] dark:text-white">Komal Kiri &nbsp;|&nbsp; Software Developer</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="pr-48">
        <NavbarLink href="#home" active className="!pb-0.5 !text-[#485641] dark:!text-white shadow-none shadow-[0_6px_4px_-4px_rgba(40,54,72,0.25)] dark:shadow-[0_6px_4px_-4px_rgba(6,174,146,0.25)]">
          Home
        </NavbarLink>
        <NavbarLink href="#journey">
          Journey
        </NavbarLink>
        <NavbarLink href="#">Projects</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
