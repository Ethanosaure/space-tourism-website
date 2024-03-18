import { useState } from "react";
import NavBar from "../Nav";

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="flex h-[100%] w-[100%] justify-between md:absolute md:h-[10%] xl:mt-[2%] ">
      <div className="absolute pl-[2.5%] pt-[20px]">
        <img src="../../../public/assets/shared/logo.svg" alt="logo" />
      </div>
      <div className="hidden xl:absolute xl:z-20 xl:ml-[10%] xl:mt-[40px] xl:flex xl:h-[2px] xl:w-[30%] xl:border-[1px] xl:border-solid xl:border-white"></div>
      <div
        className={`fixed right-0 top-0 z-10 m-0 flex h-[100%] flex-col md:absolute md:h-[100%] md:max-h-[80px] md:min-h-[70px] md:w-[65%] md:flex-row md:bg-white md:bg-opacity-5 md:backdrop-blur-xl xl:max-h-[80px] ${isOpen ? " h-[100%] w-[70%] bg-white bg-opacity-5 backdrop-blur-xl" : ""}`}
      >
        <div
          className={`m-[40px] h-[21px] w-[24px] ${isOpen ? " self-end bg-[url('../../../public/assets/shared/icon-close.svg')] bg-contain bg-no-repeat" : "bg-[url('../../../public/assets/shared/icon-hamburger.svg')]"}  md:hidden`}
          onClick={handleClick}
        ></div>

        <NavBar isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Component;
