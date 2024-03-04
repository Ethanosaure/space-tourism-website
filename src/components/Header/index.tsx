import { useState } from "react";
import NavBar from "../Nav";

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="absolute flex h-[100%] w-[100%] justify-between">
      <div className="ml-[20px] mt-[20px]">
        <img src="../../../public/assets/shared/logo.svg" alt="logo" />
      </div>
      <div
        className={`absolute right-[20px] top-[20px] z-10 flex flex-col ${isOpen ? "right-0 top-0 h-[100%] w-[70%] backdrop-blur-sm" : ""}`}
      >
        <div
          className={`m-[20px] h-[21px] w-[24px] ${isOpen ? "self-end bg-[url('../../../public/assets/shared/icon-close.svg')] bg-contain bg-no-repeat" : "bg-[url('../../../public/assets/shared/icon-hamburger.svg')]"}  md:hidden`}
          onClick={handleClick}
        ></div>
        <NavBar isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Component;
