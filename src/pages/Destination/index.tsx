import datas from "../../data/data.json";
// import Heading from "../../typographies/Heading";
import Paragraph from "../../typographies/Paragraph";
// import SubHeading from "../../typographies/SubHeading";
import Slider from "../../components/Buttons/Slider";
const Component = () => {
  const data = datas.destinations;
  const dataPlanet: string[] = [];
  data.forEach((destination) => {
    dataPlanet.push(destination.name);
  });
  console.log(dataPlanet);
  return (
    <div className=" flex h-screen w-screen flex-col bg-[url('../../../public/assets/destination/background-destination-mobile.jpg')] bg-cover bg-center bg-no-repeat md:bg-[url('../../../public/assets/destination/background-destination-tablet.jpg')] xl:bg-[url('../../../public/assets/destination/background-destination-desktop.jpg')] ">
      <div className="flex flex-col items-center pt-[25%]">
        <div>
          <Paragraph
            kind="span"
            content={"01"}
            css="text-[25px] font-bold text-opacity-[25%] text-center tracking-[4.2px] mb-[20px] md:mb-0 md:text-[20px] xl:text-[27px] uppercase pr-[20px]"
          />
          <Paragraph
            kind="span"
            content={"Pick your destination"}
            css="text-tropicalBlue text-[25px] text-center tracking-[4.2px] mb-[20px] md:mb-0 md:text-[20px] xl:text-[27px] uppercase"
          />
        </div>
        <div>
          <Slider arrayNames={dataPlanet} />
        </div>
      </div>
    </div>
  );
};

export default Component;
