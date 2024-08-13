import React from "react";
const Privearrows = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`top-[40%] left-[-100px] absolute translate-y-[-50%] z-10 ${className} `} onClick={onClick}>
       <svg width="60" height="60" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="border-2 hover:border-black transition-all duration-150 rounded-full">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5 64C50.1731 64 64.5 49.6731 64.5 32C64.5 14.3269 50.1731 0 32.5 0C14.8269 0 0.5 14.3269 0.5 32C0.5 49.6731 14.8269 64 32.5 64Z" fill="black" fill-opacity="0.200748"/>
    <path d="M29.3017 33.3689H40.0374C40.273 33.3689 40.4641 33.1779 40.4641 32.9422V30.9511C40.4641 30.7155 40.273 30.5244 40.0374 30.5244H29.3017V28.8868C29.3017 28.1265 28.3826 27.7458 27.845 28.2834L24.7851 31.3433C24.4518 31.6765 24.4518 32.2168 24.7851 32.55L27.845 35.6099C28.3825 36.1475 29.3017 35.7668 29.3017 35.0065V33.3689Z" fill="white"/>
    </svg>
    </div>
  );
};

export default Privearrows;
