import datas from "../../data/data.json";
import Paragraph from "../../typographies/Paragraph";
import Slider from "../../components/Sliders/DestinationSlider";

const Component = () => {
  const data = datas.destinations;
  const dataPlanet = data.map((destination) => destination.name);

  return (
    <div className="flex h-screen min-h-[1200px] w-screen flex-col bg-[url('/assets/destination/background-destination-mobile.jpg')] bg-cover  bg-center bg-no-repeat md:min-h-[1070px] md:bg-[url('/assets/destination/background-destination-tablet.jpg')] xl:min-h-[880px] xl:min-w-[1150px] xl:bg-[url('/assets/destination/background-destination-desktop.jpg')] ">
      <div className="flex flex-col items-center justify-start pt-[15%] md:items-start xl:pt-[170px] ">
        <div className=" md:ml-[30px] xl:ml-[10%]">
          <Paragraph
            kind="span"
            content={"01"}
            css="text-[25px] text-white font-bold text-opacity-[25%] text-center tracking-[4.2px] mb-[20px] md:mb-0 xl:text-[27px] uppercase pr-[20px]  "
          />
          <Paragraph
            kind="span"
            content={"Pick your destination"}
            css="text-tropicalBlue text-[25px] text-center tracking-[4.2px] mb-[20px] md:mb-0  xl:text-[27px] uppercase"
          />
        </div>
        <div className="xl:w-[100%]">
          <Slider array={dataPlanet} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Component;
