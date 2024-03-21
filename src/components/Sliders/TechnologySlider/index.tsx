import SubHeading from "../../../typographies/SubHeading";
import { useState } from "react";
import { SliderTechnologyProps } from "../../../types/interface";
import Description from "../../Descriptions/TechnologyDescription";

const Component: React.FC<SliderTechnologyProps> = ({ array, data }) => {
  const [technoPicture, setTechnoPicture] = useState(data[0].images.landscape);
  const [selectedTechno, setSelectedTechno] = useState(0);
  const picture = technoPicture;
  const selected = selectedTechno;
  const showTechnoPicture = (index: number) => {
    setTechnoPicture(data[index].images.landscape);
    setSelectedTechno(index);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="">
        <img src={picture} alt="planet picture" className="" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row">
          {array.map((planet, index) => (
            <div key={planet} className="">
              <SubHeading
                kind="subHeading2"
                content={index + 1}
                onClickFunction={() => showTechnoPicture(index)}
                css={` text-white
                  ${selected === index ? "" : ""}
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
