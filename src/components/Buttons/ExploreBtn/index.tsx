import Heading from "../../../typographies/Heading";

const Component = () => {
  const pages = ["destination", "crew", "technology"];
  function randomPageIndex(): number {
    return Math.floor(Math.random() * pages.length);
  }
  function handleClick(): void {
    const randomPages = randomPageIndex();
    const randomPage = pages[randomPages];
    const newURL = window.location.href + randomPage;
    window.location.href = newURL;
  }

  return (
    <button
      type="button"
      className="h-[200px] w-[200px] rounded-[100%] bg-white xl:h-[250px] xl:w-[250px] "
      onClick={handleClick}
    >
      <Heading kind="h4" content={"EXPLORE"} css="text-black" />
    </button>
  );
};

export default Component;
