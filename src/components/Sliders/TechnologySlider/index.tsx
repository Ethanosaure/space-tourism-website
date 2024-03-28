import SubHeading from "../../../typographies/SubHeading";
import { useState } from "react";
import { SliderTechnologyProps } from "../../../types/interface";
import Description from "../../Descriptions/TechnologyDescription";

const TechnologyImage = ({
  landscapeImage,
  portraitImage,
  isVisible,
}: {
  landscapeImage: string;
  portraitImage: string;
  isVisible: boolean;
}) => {
  return (
    <div>
      <img
        src={portraitImage}
        alt="technology portrait picture"
        className={isVisible ? "hidden xl:flex" : ""}
      />
      <img
        src={landscapeImage}
        alt="Technology landscape picture"
        className={isVisible ? "w-screen xl:hidden" : ""}
      />
    </div>
  );
};

const Component: React.FC<SliderTechnologyProps> = ({ array, data }) => {
  const [technoPicture, setTechnoPicture] = useState(data[0].images.landscape);
  const [selectedTechno, setSelectedTechno] = useState(0);
  const selected = selectedTechno;

  const showTechnoPicture = (index: number) => {
    setTechnoPicture(data[index].images.landscape);
    setSelectedTechno(index);
  };

  return (
    <div className="flex flex-col items-center justify-center xl:flex-row ">
      <div className="xl:order-last">
        {array.map((_, index) => (
          <div key={index}>
            {technoPicture === data[index].images.landscape && (
              <TechnologyImage
                landscapeImage={data[index].images.landscape}
                portraitImage={data[index].images.portrait}
                isVisible={true}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center xl:col-span-1 xl:flex-row xl:justify-between">
        <div className="flex flex-row xl:flex-col">
          {array.map((planet, index) => (
            <div key={planet} className="">
              <SubHeading
                kind="subHeading1"
                content={index + 1}
                onClickFunction={() => showTechnoPicture(index)}
                css={`text-[20px] pr-[20px] pl-[20px] pb-[5px] pt-[5px] border-[1px] mt-[40px] ml-[30px] rounded-full hover:cursor-pointer xl:pr-[30px] xl:pl-[30px] xl:pb-[15px] xl:pt-[15px] xl:ml-0
                  ${selected === index ? "bg-white" : "text-white hover:bg-tropicalBlue hover:text-[black]"}
                `}
              />
            </div>
          ))}
        </div>
        <Description selectedTechnology={selected} data={data} />
      </div>
    </div>
  );
};

export default Component;
