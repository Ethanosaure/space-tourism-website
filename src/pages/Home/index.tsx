import Paragraph from "../../typographies/Paragraph";
import Heading from "../../typographies/Heading";
import ExploreBtn from "../../components/ExploreBtn";
import datas from "../../data/data.json";

const Component = () => {
  const data = datas.home;
  const subHeadingContent = data.subheading.toUpperCase();
  const textContent = data.text;
  const titleContent = data.title.toUpperCase();

  return (
    <div className="flex h-screen min-h-[930px] w-screen flex-col items-center justify-start bg-[url('/assets/home/background-home-mobile.jpg')] bg-cover bg-center bg-no-repeat pt-[25%] md:bg-[url('/assets/home/background-home-tablet.jpg')]  xl:min-h-[830px] xl:flex-row  xl:justify-around xl:bg-[url('/assets/home/background-home-desktop.jpg')] xl:pt-[10%]">
      <div className="flex  flex-col text-center xl:w-auto xl:items-start">
        <Paragraph
          kind="span"
          content={subHeadingContent}
          css="text-tropicalBlue text-[25px] text-center tracking-[4.2px] mb-[20px] md:mb-0 md:text-[20px] xl:text-[27px] "
        />
        <Heading
          kind="h1"
          content={titleContent}
          css="text-center text-white text-[110px] mb-[20px] md:text-[150px] md:mb-0"
        />
        <Paragraph
          kind="p"
          content={textContent}
          css="text-tropicalBlue tracking-[1.5px] text-center text-[16px] w-[350px] mb-[20%] md:w-[490px] md:text-[18px] xl:text-justify xl:text-[20px] "
        />
      </div>
      <div>
        <ExploreBtn />
      </div>
    </div>
  );
};

export default Component;
