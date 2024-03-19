import SubHeading from "../../../typographies/SubHeading";
import { useState } from "react";
import { SliderCrewProps } from "../../../types/interface";
import Description from "../../Descriptions/CrewDescription";

const Component: React.FC<SliderCrewProps> = ({ array, data }) => {
  const [memberPicture, setMemberPicture] = useState(data[0].images.png);
  const [selectedMember, setSelectedMember] = useState(0);
  const picture = memberPicture;
  const selected = selectedMember;

  const showMemberPicture = (index: number) => {
    setMemberPicture(data[index].images.png);
    setSelectedMember(index);
  };

  return (
    <div className="flex flex-col items-center justify-center md:flex-col-reverse">
      <div className="flex w-[80%] flex-col items-center justify-center md:flex-col-reverse md:border-b-0 xl:ml-[5%] xl:mr-[5%]">
        <div className="flex w-[100%] justify-center border-b-[1px] border-b-white">
          <img
            src={picture}
            alt="Member picture"
            className="mt-[50px] h-[350px] w-[300px]  md:h-[550px] md:w-[400px]"
          />
        </div>

        <div className="flex flex-row items-center justify-center">
          {array.map((member, index) => (
            <div key={member}>
              <SubHeading
                kind="subHeading2"
                content={""}
                onClickFunction={() => showMemberPicture(index)}
                css={`w-[13px] h-[13px]  m-[10px] rounded-xl ${selected === index ? "bg-white" : "bg-white opacity-50 hover:bg-white hover:opacity-100"} pb-[10px] mt-[25px] text-[#D0D6F9]  `}
              />
            </div>
          ))}
        </div>
      </div>
      <Description selectedMember={selectedMember} data={data} />
    </div>
  );
};

export default Component;
