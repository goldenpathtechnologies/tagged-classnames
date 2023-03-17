type NavItem = {
  name: string;
  url: string;
};

export default function Navbar(): JSX.Element {
  const navItems: NavItem[] = [
    { name: `Home`, url: `/` },
    { name: `Demo`, url: `/demo/` },
    { name: `Code of Conduct`, url: `/code-of-conduct/` },
    { name: `Changelog`, url: `/changelog/` },
    { name: `License`, url: `/license/` },
  ];

  return (
    <div className="bg-gray-900 container mx-auto px-5 py-1 max-w-5xl uppercase">
      <ul className="md:flex">
        {navItems.map((item: NavItem) => (
          <li className="mx-4">
            <a href={item.url} className="text-amber-50 text-sm">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
