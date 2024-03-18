import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";
import SubHeading from "../../../typographies/SubHeading";
import { DescriptionProps } from "../../../types/interface";
const Component: React.FC<DescriptionProps> = ({ data, selectedPlanet }) => {
  return (
    <div className="flex flex-col items-center justify-center xl:min-w-[530px] xl:max-w-[700px] xl:items-start xl:justify-start">
      <Heading
        kind="h3"
        content={data[selectedPlanet].name}
        css="uppercase mt-[20px] text-[70px] text-white md:text-[90px] "
      />
      <Paragraph
        kind="p"
        content={data[selectedPlanet].description}
        css="text-center w-[80%] text-[25px] text-tropicalBlue xl:text-start"
      />
      <div className="xl:justify-b mt-[40px] flex w-[80%] flex-col items-center justify-center border-t-[1px] border-white md:flex-row md:justify-evenly xl:items-start xl:justify-between">
        <div className="flex flex-col items-center justify-center xl:items-start ">
          <SubHeading
            kind="subHeading2"
            content={"avg. distance"}
            css="uppercase text-[20px] mt-[40px] text-tropicalBlue "
          />
          <Heading
            kind="h5"
            content={data[selectedPlanet].distance}
            css="uppercase text-[50px] text-white"
          />
        </div>
        <div className="flex flex-col items-center justify-center xl:items-start">
          <SubHeading
            kind="subHeading2"
            content={"est. travel time"}
            css="uppercase text-[20px] mt-[40px] text-tropicalBlue"
          />
          <Heading
            kind="h5"
            content={data[selectedPlanet].travel}
            css="uppercase text-[50px] text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Component;
