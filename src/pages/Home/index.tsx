import Paragraph from "../../typographies/Paragraphs";
import Heading from "../../typographies/Headings";
import ExploreBtn from "../../components/Buttons/ExploreBtn";

import datas from "../../data/data.json";

const Component = () => {
  const data = datas.home;
  const subHeadingContent = data.subheading.toUpperCase();
  const textContent = data.text;
  const titleContent = data.title.toUpperCase();
  return (
    <div className="flex h-screen w-screen flex-row items-center justify-center bg-[url('../../../public/assets/home/background-home-mobile.jpg')] bg-cover bg-center bg-no-repeat  pt-[100px] md:bg-[url('../../../public/assets/home/background-home-tablet.jpg')] xl:bg-[url('../../../public/assets/home/background-home-desktop.jpg')]">
      <div className="flex flex-col text-center">
        <Paragraph kind="span" content={subHeadingContent} css="text-white " />
        <Heading kind="h1" content={titleContent} css="text-white" />
        <Paragraph kind="p" content={textContent} css="text-white" />
      </div>
      <div>
        <ExploreBtn />
      </div>
    </div>
  );
};

export default Component;
