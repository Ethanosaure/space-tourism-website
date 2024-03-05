import Paragraph from "../../typographies/Paragraphs";
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
      className={`text-white md:flex md:w-[100%] md:flex-row md:items-center md:justify-around ${isOpen ? "flex flex-col pt-[20%] md:pt-0" : "hidden"}`}
    >
      {navLinks.map((element, index) => (
        <a
          key={element.name}
          href={element.link}
          className="pb-[10%] pl-[10%] md:ml-0 md:pb-0 md:pl-0"
        >
          <Paragraph
            kind="span"
            content={`0${index}`}
            css="pr-[5%] font-bold md:hidden"
          />
          <Paragraph kind="span" content={element.name} />
        </a>
      ))}
    </div>
  );
};

export default Component;
