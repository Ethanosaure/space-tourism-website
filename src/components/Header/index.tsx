import { useState } from "react";
import NavBar from "../Nav";

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="absolute flex h-[100%] w-[100%] justify-between md:h-[10%] xl:mt-[2%] ">
      <div className="pl-[20px] pt-[20px]">
        <img src="../../../public/assets/shared/logo.svg" alt="logo" />
      </div>
      <div
        className={`absolute right-0 top-0 z-10 m-0 flex flex-col p-[20px] md:h-[100%] md:w-[65%] md:flex-row md:bg-white md:bg-opacity-5 md:backdrop-blur-xl ${isOpen ? " h-[100%] w-[70%] backdrop-blur-xl" : ""}`}
      >
        <div
          className={`m-[20px] h-[21px] w-[24px] ${isOpen ? " self-end bg-[url('../../../public/assets/shared/icon-close.svg')] bg-contain bg-no-repeat" : "bg-[url('../../../public/assets/shared/icon-hamburger.svg')]"}  md:hidden`}
          onClick={handleClick}
        ></div>
        <NavBar isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Component;
