import Heading from "../../../typographies/Heading";

const Component = () => {
  return (
    <button
      type="button"
      className="h-[200px] w-[200px] rounded-[100%] bg-white xl:h-[250px] xl:w-[250px] "
    >
      <Heading kind="h4" content={"EXPLORE"} css="" />
    </button>
  );
};

export default Component;
