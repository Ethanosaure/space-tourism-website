interface NavLink {
  name: string;
  link: string;
}
const navLinks: NavLink[] = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "destination",
    link: "/destination",
  },
  {
    name: "crew",
    link: "/crew",
  },
  {
    name: "technology",
    link: "/technology",
  },
];

const Component = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`md:flex ${isOpen ? "flex flex-col text-white " : "hidden"}`}
    >
      {navLinks.map((element) => (
        <a key={element.name} href={element.link}>
          {element.name}
        </a>
      ))}
    </div>
  );
};

export default Component;
