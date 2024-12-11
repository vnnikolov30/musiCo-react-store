import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import {
  ChevronDown,
  Guitar,
  Drum,
  Keys,
  Studio,
  Dj,
} from "../../../public/icons/Icons";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ShopingCart from "../home/ShoppingCart";

export default function Nav() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [cartOpen, setCartOpen] = useState(false);

  function handleLogout() {
    logout();
    navigate("/");
  }
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    studio: <Studio className="text-success" fill="currentColor" size={30} />,
    dj: <Dj className="text-danger" fill="currentColor" size={30} />,

    guitar: <Guitar className="text-warning" fill="currentColor" size={30} />,
    drum: <Drum className="text-secondary" fill="currentColor" size={30} />,
    keys: <Keys className="text-primary" fill="currentColor" size={30} />,
  };

  return (
    <>
    <ShopingCart open={cartOpen} setOpen={setCartOpen}/>
      <Navbar shouldHideOnScroll>
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <Link href="/" color="foreground">
            <p className="font-bold text-inherit">MusiCo</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-20" justify="center">
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Categories
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Instrument sections"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="guitars"
                description="Explore a wide range of guitars and basses, from electric to acoustic, perfect for every musician."
                startContent={icons.guitar}
              >
                <Link href="/guitars-and-bass" color="foreground">
                  Guitars & Basses
                </Link>
              </DropdownItem>

              <DropdownItem
                key="drums"
                description="Discover top-quality drum kits, cymbals, and percussion instruments for all skill levels."
                startContent={icons.drum}
              >
                <Link href="/drums" color="foreground">
                  Drums
                </Link>
              </DropdownItem>
              <DropdownItem
                key="keys"
                description="Find the perfect piano or keyboard to enhance your sound, from digital to grand pianos."
                startContent={icons.keys}
              >
                <Link href="/keys" color="foreground">
                  Keys
                </Link>
              </DropdownItem>
              <DropdownItem
                key="studio"
                description="Equip your studio with the best recording gear, interfaces, and microphones for professional sound."
                startContent={icons.studio}
              >
                <Link href="/studio" color="foreground">
                  Studio
                </Link>
              </DropdownItem>

              <DropdownItem
                key="dj"
                description=" Get the latest DJ equipment, from controllers to turntables, and elevate your next performance."
                startContent={icons.dj}
              >
                <Link href="/dj" color="foreground">
                  Dj
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem>
            <Link href="#" aria-current="page">
              Music store
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Contact us!
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          {user ? (
            <>
              <Button
                as={Link}
                color="default"
                href="/"
                variant="flat"
                onClick={handleLogout}
              >
                Logout
              </Button>

              <Button as={Link} color="warning" href="/profile" variant="flat">
                Profile
              </Button>
            </>
          ) : (
            <>
              <NavbarItem className="hidden lg:flex">
                <Button as={Link} color="default" href="/login" variant="flat">
                  Log In
                </Button>
              </NavbarItem>
              <NavbarItem>
                <Button as={Link} color="primary" href="/signup" variant="flat">
                  Sign Up
                </Button>
              </NavbarItem>

              <NavbarItem>
                <Button
                  variant="flat"
                  onClick={() => setCartOpen(true)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                </Button>
              </NavbarItem>
            </>
          )}
        </NavbarContent>
      </Navbar>
    </>
  );
}
