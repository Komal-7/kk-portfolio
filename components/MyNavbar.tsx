
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Avatar } from "flowbite-react";
import Link from "next/link";

export function MyNavbar() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand className="gap-4">
        <div className="flex flex-wrap mt-1">
          <Avatar img="/avatar.png" alt="avatar of KK" rounded />
        </div>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Komal Kiri</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#about" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          About
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
