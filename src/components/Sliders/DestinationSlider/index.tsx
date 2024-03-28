import SubHeading from "../../../typographies/SubHeading";
import { useState } from "react";
import { SliderDestinationProps } from "../../../types/interface";
import Description from "../../Descriptions/DestinationDescription";

const Component: React.FC<SliderDestinationProps> = ({ array, data }) => {
  const [planetPicture, setPlanetPicture] = useState(data[0].images.webp);
  const [selectedPlanet, setSelectedPlanet] = useState(0);
  const picture = planetPicture;
  const selected = selectedPlanet;
  const showPlanetPictures = (index: number) => {
    setPlanetPicture(data[index].images.webp);
    setSelectedPlanet(index);
  };

  return (
    <div className="flex flex-col items-center justify-center xl:flex-row xl:justify-evenly xl:pt-[5%]">
      <div className="xl:ml-[5%] xl:mr-[5%]">
        <img
          src={picture}
          alt="planet picture"
          className="mt-[50px] h-[250px] w-[250px] md:h-[300px] md:w-[300px] xl:min-h-[500px] xl:min-w-[500px]"
        />
      </div>
      <div className="">
        <div className="flex flex-row justify-center xl:justify-start">
          {array.map((planet, index) => (
            <div key={planet} className="">
              <SubHeading
                kind="subHeading2"
                content={planet}
                onClickFunction={() => showPlanetPictures(index)}
                css={`text-[20px] font-thin uppercase ml-[15px] mr-[15px] ${selected === index ? "border-b-white border-b-[4px]" : "hover:border-b-[4px] hover:border-b-[#D0D6F9]"} pb-[10px] mt-[25px] text-[#D0D6F9]  `}
              />
            </div>
          ))}
        </div>
        <Description selectedPlanet={selectedPlanet} data={data} />
      </div>
    </div>
  );
};

export default Component;
