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
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import ShoppingCart from "../home/ShoppingCart";

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
      <ShoppingCart open={cartOpen} setOpen={setCartOpen} />
      <Navbar shouldHideOnScroll>
        <NavbarBrand>
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
            <DropdownMenu aria-label="Instrument sections" className="w-[340px]">
              <DropdownItem key="guitars" description="Explore guitars & basses." startContent={icons.guitar}>
                <Link href="/guitars-and-bass" color="foreground">Guitars & Basses</Link>
              </DropdownItem>
              <DropdownItem key="drums" description="Discover drum kits & percussion." startContent={icons.drum}>
                <Link href="/drums" color="foreground">Drums</Link>
              </DropdownItem>
              <DropdownItem key="keys" description="Find pianos & keyboards." startContent={icons.keys}>
                <Link href="/keys" color="foreground">Keys</Link>
              </DropdownItem>
              <DropdownItem key="studio" description="Equip your studio." startContent={icons.studio}>
                <Link href="/studio" color="foreground">Studio</Link>
              </DropdownItem>
              <DropdownItem key="dj" description="Get the latest DJ gear." startContent={icons.dj}>
                <Link href="/dj" color="foreground">DJ</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem>
            <Link href="/music-store">Music Store</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/contact">Contact Us</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          {user ? (
            <>
              <Button as={Link} color="default" href="/" variant="flat" onClick={handleLogout}>
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
            </>
          )}
          <NavbarItem>
            <Button variant="flat" onClick={() => setCartOpen(true)}>
              🛒
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
