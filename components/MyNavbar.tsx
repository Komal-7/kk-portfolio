
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Avatar } from "flowbite-react";
import Link from "next/link";

export function MyNavbar() {
  return (
    <Navbar fluid rounded className="bg-[#EAEDE8]">
      <NavbarBrand className="gap-4">
        <div className="flex flex-wrap mt-1">
          <Avatar img="/avatar.png" alt="avatar of KK" rounded />
        </div>
        <span className="self-center whitespace-nowrap text-xl font-semibold text-[#485641] dark:text-white">Komal Kiri</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#about" active className="!pb-0.5 !text-[#485641] dark:!text-white shadow-lg shadow-[#283648]/20 dark:shadow-[#06AE92]/20">
          About
        </NavbarLink>
        <NavbarLink href="#journey">
          Journey
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
