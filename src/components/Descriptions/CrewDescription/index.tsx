import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";
import { CrewDescriptionProps } from "../../../types/interface";

const Component: React.FC<CrewDescriptionProps> = ({
  selectedMember,
  data,
}) => {
  return (
    <div className="flex flex-col items-center justify-center xl:absolute xl:top-[350px] xl:ml-[10%] xl:min-w-[530px] xl:max-w-[700px] xl:items-start">
      <Heading
        kind="h4"
        content={data[selectedMember].role}
        css="uppercase text-sm text-white opacity-50 mt-[30px] md:text-[25px] xl:text-[32px] "
      />
      <Heading
        kind="h3"
        content={data[selectedMember].name}
        css="uppercase text-[30px] text-white md:text-[90px] md:text-[39px] xl:text-[56px]"
      />
      <div className="mt-[20px] ">
        <div className="flex flex-col items-center justify-center xl:items-start xl:justify-between">
          <Paragraph
            kind="p"
            content={data[selectedMember].bio}
            css="text-center w-[500px] md:w-[580px] text-[20px] text-tropicalBlue xl:text-start tracking-[1px] md:text-[17px] xl:text-[25px] xl:leading-8 "
          />
        </div>
      </div>
    </div>
  );
};

export default Component;
