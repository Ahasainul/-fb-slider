import React from "react";
const Nextarrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`top-[40%] right-[-70px] absolute translate-y-[-50%] z-10 ${className}  `}
      onClick={onClick}
    >
      <svg
        width="65"
        height="64"
        viewBox="0 0 65 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="border-2 hover:border-black transition-all duration-150 rounded-full"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M32.5 0C14.8269 0 0.5 14.3269 0.5 32C0.5 49.6731 14.8269 64 32.5 64C50.1731 64 64.5 49.6731 64.5 32C64.5 14.3269 50.1731 0 32.5 0Z"
          fill="black"
          fill-opacity="0.200748"
        />
        <path
          d="M35.6983 30.6311H24.9626C24.727 30.6311 24.5359 30.8221 24.5359 31.0578V33.0489C24.5359 33.2845 24.727 33.4756 24.9626 33.4756H35.6983V35.1132C35.6983 35.8735 36.6174 36.2542 37.155 35.7166L40.2149 32.6567C40.5482 32.3235 40.5482 31.7832 40.2149 31.45L37.155 28.3901C36.6175 27.8525 35.6983 28.2332 35.6983 28.9935V30.6311Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Nextarrow;
