import SubHeading from "../../../typographies/SubHeading";
import { useState } from "react";
interface ComponentProps {
  arrayNames?: string[];
  arrayNumbers?: number[];
}

const Component: React.FC<ComponentProps> = ({ arrayNames, arrayNumbers }) => {
  const [isSelected, setIsSelected] = useState(false);
  if (!arrayNames && !arrayNumbers) {
    throw new Error("must have arrayNames or arrayNumbers");
  }
  return (
    <div className="flex flex-row items-center justify-center">
      {arrayNames
        ? arrayNames.map((planet, index) => (
            <div>
              <SubHeading
                kind="subHeading2"
                key={planet}
                content={planet}
                css="text-[20px] font-thin uppercase ml-[15px] mr-[15px] pb-[10px] hover:border-b-[4px] hover:border-b-white "
              />
            </div>
          ))
        : arrayNumbers?.map((element) => (
            <div key={element} className=""></div>
          ))}
    </div>
  );
};

export default Component;
