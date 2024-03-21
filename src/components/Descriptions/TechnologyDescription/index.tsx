import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";
import { TechnologyDescriptionProps } from "../../../types/interface";
const Component: React.FC<TechnologyDescriptionProps> = ({
  data,
  selectedTechnology,
}) => {
  return (
    <div className="flex flex-col items-center justify-center xl:min-w-[530px] xl:max-w-[700px] xl:items-start xl:justify-start">
      <Heading
        kind="h4"
        content={"the terminology ..."}
        css="uppercase text-sm text-white mt-[30px] md:text-[25px] xl:text-[32px] "
      />
      <Heading
        kind="h3"
        content={data[selectedTechnology].name}
        css="uppercase text-[33px] text-white md:text-[90px] "
      />
      <Paragraph
        kind="p"
        content={data[selectedTechnology].description}
        css="text-center w-[80%] text-[25px] text-tropicalBlue xl:text-start"
      />
    </div>
  );
};

export default Component;
