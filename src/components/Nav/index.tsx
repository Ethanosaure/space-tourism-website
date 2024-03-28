import { Link } from "react-router-dom";
import Paragraph from "../../typographies/Paragraph";

interface NavLink {
  name: string;
  link: string;
}

const navLinks: NavLink[] = [
  {
    name: "HOME",
    link: "/space-tourism-website/",
  },
  {
    name: "DESTINATION",
    link: "/space-tourism-website/destination",
  },
  {
    name: "CREW",
    link: "/space-tourism-website/crew",
  },
  {
    name: "TECHNOLOGY",
    link: "/space-tourism-website/technology",
  },
];

const Component = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={` md:mt-0 md:flex md:h-[100%] md:w-[100%] md:flex-row md:justify-evenly xl:max-h-[80px] ${isOpen ? "flex flex-col md:pt-0" : "hidden"}`}
    >
      {navLinks.map((element, index) => (
        <Link
          key={element.name}
          to={element.link}
          className="relative ml-[5%] mt-[5%] text-white hover:border-r-4 hover:border-r-white md:ml-0 md:mt-[25px] md:items-center md:text-center md:hover:border-b-4 md:hover:border-r-0 md:hover:border-b-white "
        >
          <Paragraph
            kind="span"
            content={`0${index}`}
            css="mr-[5%] font-bold md:hidden"
          />
          <Paragraph kind="span" content={element.name} />
        </Link>
      ))}
    </div>
  );
};

export default Component;
