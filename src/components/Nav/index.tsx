import Paragraph from "../../typographies/Paragraph";
interface NavLink {
  name: string;
  link: string;
}
const navLinks: NavLink[] = [
  {
    name: "HOME",
    link: "/",
  },
  {
    name: "DESTINATION",
    link: "/destination",
  },
  {
    name: "CREW",
    link: "/crew",
  },
  {
    name: "TECHNOLOGY",
    link: "/technology",
  },
];

const Component = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={` md:mt-0 md:flex md:h-[100%] md:w-[100%] md:flex-row md:justify-evenly xl:max-h-[80px] ${isOpen ? "flex flex-col md:pt-0" : "hidden"}`}
    >
      {navLinks.map((element, index) => (
        <a
          key={element.name}
          href={element.link}
          className="relative ml-[5%] mt-[5%] text-white hover:border-r-4 hover:border-r-white md:ml-0 md:mt-[25px] md:items-center md:text-center md:hover:border-b-4 md:hover:border-r-0 md:hover:border-b-white "
        >
          <Paragraph
            kind="span"
            content={`0${index}`}
            css="mr-[5%] font-bold md:hidden"
          />
          <Paragraph kind="span" content={element.name} />
        </a>
      ))}
    </div>
  );
};

export default Component;
