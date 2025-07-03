import React from "react";

interface ToggleProps {
  data: string[] | null;
  show: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ data, show }) => {
  return show ? (
    <div className="absolute -left-12 top-10 w-[340px] flex flex-wrap items-center shadow-lg p-4 shadow-red-500/200 z-10">
      {data &&
        data.map((item) => (
          <div
            key={item}
            className="py-1 px-2 hover:bg-red-100 hover:text-black hover:scale-105 rounded inline-block w-[100px] "
          >
            {item}
          </div>
        ))}
    </div>
  ) : null;
};

export default Toggle;
