import datas from "../../data/data.json";
import Paragraph from "../../typographies/Paragraph";
import Slider from "../../components/Sliders/CrewSlider";
const Component = () => {
  const data = datas.crew;
  const dataMember: string[] = [];
  data.map((member) => {
    dataMember.push(member.name);
  });
  return (
    <div className="flex h-screen min-h-[840px] w-screen flex-col bg-[url('../../../public/assets/crew/background-crew-mobile.jpg')] bg-cover bg-center bg-no-repeat md:min-h-[1020px]   md:bg-[url('../../../public/assets/crew/background-crew-tablet.jpg')] xl:min-h-[850px] xl:bg-[url('../../../public/assets/crew/background-crew-desktop.jpg')]">
      <div className="flex flex-col items-center justify-start pt-[15%] xl:pt-[170px]  ">
        <div className=" md:ml-[30px] md:self-start xl:ml-[10%]">
          <Paragraph
            kind="span"
            content={"02"}
            css="text-[25px] text-white font-bold text-opacity-[25%] text-center tracking-[4.2px] mb-[20px] md:mb-0 xl:text-[27px] uppercase pr-[20px]  "
          />
          <Paragraph
            kind="span"
            content={"Meet your crew"}
            css="text-tropicalBlue text-[25px] text-center tracking-[4.2px] mb-[20px] md:mb-0  xl:text-[27px] uppercase"
          />
        </div>
        <div>
          <Slider array={dataMember} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Component;
