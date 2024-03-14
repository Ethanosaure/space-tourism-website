import SubHeading from "../../../typographies/SubHeading";
import { useState } from "react";
import { ComponentProps } from "../../../types/interface";

const Component: React.FC<ComponentProps> = ({ arrayNames, data }) => {
  const [planetPicture, setPlanetPicture] = useState(data[0].images.png);
  const [selectedPlanet, setSelectedPlanet] = useState(0);
  const picture = planetPicture;
  const selected = selectedPlanet;
  function showPlanetPictures(index: number) {
    setPlanetPicture(data[index].images.png);
    setSelectedPlanet(index);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <img
          src={picture}
          alt="planet picture"
          className="mt-[50px] h-[250px] w-[250px]"
        />
      </div>
      <div className="flex flex-row">
        {arrayNames.map((planet, index) => (
          <div key={planet} className="">
            <SubHeading
              kind="subHeading2"
              content={planet}
              onClickFunction={() => showPlanetPictures(index)}
              css={`text-[20px] font-thin uppercase ml-[15px] mr-[15px] ${selected === index ? "border-b-white border-b-[4px]" : "hover:border-b-[4px] hover:border-b-tropicalBlue"} pb-[10px] mt-[25px] text-tropicalBlue  `}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component;
