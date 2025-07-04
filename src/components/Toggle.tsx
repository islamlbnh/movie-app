import React from "react";

interface ToggleProps {
  data: string[] | null;
  show: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ data, show }) => {
  return show ? (
    <div className="absolute -left-36 top-10 w-[320px] flex flex-wrap items-center shadow-lg rounded-md p-4 shadow-red-500/200 z-10 bg-red-400 ">
      {data &&
        data.map((item) => (
          <div
            key={item}
            className="py-1 px-2 hover:bg-red-100 hover:text-black hover:scale-105 rounded inline-block w-[90px] "
          >
            {item}
          </div>
        ))}
    </div>
  ) : null;
};

export default Toggle;
