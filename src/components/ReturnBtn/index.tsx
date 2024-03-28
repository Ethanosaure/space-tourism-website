import Heading from "../../typographies/Heading";

const Component = ({ css }: { css: string }) => {
  const pages = ["destination", "crew", "technology"];

  function randomPageIndex(): number {
    return Math.floor(Math.random() * pages.length);
  }

  function handleClick(): void {
    const randomPages = randomPageIndex();
    const randomPage = pages[randomPages];
    window.location.href = randomPage;
  }

  return (
    <button type="button" className="" onClick={handleClick}>
      <Heading kind="h4" content={"return somewhere safer"} css={css} />
    </button>
  );
};

export default Component;
