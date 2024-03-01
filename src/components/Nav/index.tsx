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

const Component = () => {
  return (
    <div>
      {navLinks.map((element) => (
        <a href={element.link}>{element.name}</a>
      ))}
    </div>
  );
};

export default Component;
