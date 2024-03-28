import datas from "../../data/data.json";
import Heading from "../../typographies/Heading";
import ReturnBtn from "../../components/ReturnBtn";
const Component = () => {
  const destinations = datas.destinations.length;
  function randomPageIndex(): number {
    return Math.floor(Math.random() * destinations);
  }
  const randomPage = randomPageIndex();
  const planetPictures = datas.destinations[randomPage].images.webp;
  return (
    <div
      id="error-page"
      className="flex h-screen min-h-[500px] w-screen flex-col items-center justify-center bg-[url('../../../public/assets/destination/background-destination-mobile.jpg')] bg-cover bg-center bg-no-repeat  md:min-h-[550px] md:bg-[url('../../../public/assets/destination/background-destination-tablet.jpg')] xl:min-h-[630px] xl:bg-[url('../../../public/assets/destination/background-destination-desktop.jpg')] "
    >
      <Heading
        kind="h1"
        content={"Page not Found"}
        css=" text-tropicalBlue text-[60px] md:text-[80px] "
      />
      <ReturnBtn css="text-white hover:text-tropicalBlue" />
      <img
        src={planetPictures}
        alt="moon picture"
        className="w-[300px] md:w-[400px] xl:w-[500px]"
      />
    </div>
  );
};

export default Component;
