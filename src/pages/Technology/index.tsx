import datas from "../../data/data.json";
import Paragraph from "../../typographies/Paragraph";
import Slider from "../../components/Sliders/TechnologySlider";

const Component = () => {
  const data = datas.technology;
  const dataTechno = data.map((techno) => techno.name);

  return (
    <div className="flex h-screen min-h-[880px] w-screen flex-col bg-[url('/assets/technology/background-technology-mobile.jpg')] bg-cover  bg-center bg-no-repeat md:min-h-[1035px] md:bg-[url('/assets/technology/background-technology-tablet.jpg')] xl:min-h-[880px] xl:min-w-[1150px] xl:bg-[url('/assets/technology/background-technology-desktop.jpg')] ">
      <div className="flex flex-col items-center justify-start pt-[15%] md:items-start xl:justify-center xl:pt-[170px]">
        <div className=" mb-[40px] md:ml-[30px] xl:ml-[10%]">
          <Paragraph
            kind="span"
            content={"03"}
            css="text-[25px] text-white font-bold text-opacity-[25%] text-center tracking-[4.2px] mb-[20px] md:mb-0 xl:text-[27px] uppercase pr-[20px]  "
          />
          <Paragraph
            kind="span"
            content={"Space launch 101"}
            css="text-tropicalBlue text-[25px] text-center tracking-[4.2px] md:mb-0  xl:text-[27px] uppercase"
          />
        </div>
        <div className="xl:w-[100%]">
          <Slider array={dataTechno} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Component;
