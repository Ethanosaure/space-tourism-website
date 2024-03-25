import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";
import { TechnologyDescriptionProps } from "../../../types/interface";
const Component: React.FC<TechnologyDescriptionProps> = ({
  data,
  selectedTechnology,
}) => {
  return (
    <div className="flex flex-col items-center justify-center  xl:ml-[60px] xl:min-w-[530px] xl:max-w-[700px] xl:items-start">
      <Heading
        kind="h5"
        content={"the terminology..."}
        css="uppercase text-[20px] text-sm tracking-[2.36px] text-white mt-[30px] xl:text-[18px] xl:text-tropicalBlue "
      />
      <Heading
        kind="h3"
        content={data[selectedTechnology].name}
        css="uppercase mb-[20px] text-[38px] text-white md:text-[56px] "
      />
      <Paragraph
        kind="p"
        content={data[selectedTechnology].description}
        css="text-center w-[80%] max-w-[550px] text-[20px] text-tropicalBlue xl:text-start xl:leading-7 xl:tracking-[1.8px]"
      />
    </div>
  );
};

export default Component;
