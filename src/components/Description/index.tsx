import Heading from "../../typographies/Heading";
import Paragraph from "../../typographies/Paragraph";
import SubHeading from "../../typographies/SubHeading";
import { DescriptionProps } from "../../types/interface";
const Component: React.FC<DescriptionProps> = ({ data, selectedPlanet }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading
        kind="h3"
        content={data[selectedPlanet].name}
        css="uppercase mt-[20px] text-[70px]"
      />
      <Paragraph
        kind="p"
        content={data[selectedPlanet].description}
        css="text-center w-[80%] text-[25px] text-[tropicalBlue] "
      />
      <div className="mt-[40px] flex w-[80%] flex-col items-center justify-center border-t-[1px] border-white ">
        <SubHeading
          kind="subHeading2"
          content={"avg. distance"}
          css="uppercase text-[20px] mt-[40px] "
        />
        <Heading
          kind="h5"
          content={data[selectedPlanet].distance}
          css="uppercase text-[50px]"
        />
        <SubHeading
          kind="subHeading2"
          content={"est. travel time"}
          css="uppercase text-[20px] mt-[40px]"
        />
        <Heading
          kind="h5"
          content={data[selectedPlanet].travel}
          css="uppercase text-[50px]"
        />
      </div>
    </div>
  );
};

export default Component;
