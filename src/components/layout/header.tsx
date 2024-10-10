import Link from "next/link";
import Button from "../ui/button";
import Icon from "../ui/icon";

interface INavListItem {
  title: string;
  href: string;
}

const navListItems: INavListItem[] = [
  {
    title: "Products",
    href: "#",
  },
  {
    title: "Solutions",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
  {
    title: "Resources",
    href: "#",
  },
  {
    title: "Log In",
    href: "#",
  },
];

const Header: React.FC = () => {
  return (
    <header className="h-auto md:h-24 w-full max-w-screen-xl mx-auto flex items-center justify-between py-4 px-4 lg:px-20">
      <h1 className="font-bold text-2xl text-secondary">Collers</h1>
      <button className="block md:hidden">
        <Icon name="menuScale" />
      </button>
      <nav className="hidden md:flex items-center space-x-4">
        <ul className="flex space-x-4 font-medium text-secondary">
          {navListItems.map((item: INavListItem, _idx: number) => (
            <li key={_idx}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <Button color="secondary" variant="outlined" size="small">
          Sign up now
        </Button>
      </nav>
    </header>
  );
};

export default Header;
