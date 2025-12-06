import React from "react";
import { type Theme } from "../hooks";

interface Props {
  value: Theme;
  onChange: (theme: Theme) => void;
}

const ThemeSwitch: React.FC<Props> = ({ value, onChange }) => {
  const isDark = value === "dark";

  return (
    <div
      className={`
        relative flex w-12 h-12 items-center 
        rounded-full border border-yellow-400
        bg-gray-700 overflow-hidden select-none
        cursor-pointer shadow-2xl dark:shadow-[0_0_10px_1px_rgba(255,255,200,0.5)] shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]
      `}
      onClick={() => onChange(isDark ? "light" : "dark")}
    >
      {/* Sliding background */}
      <div
        className={`
          absolute top-0 left-0 h-full w-full 
          rounded-full bg-gray-200 
          transition-transform duration-400 ease-out
          ${isDark ? "translate-x-12 translate-y-8" : "translate-x-0 translate-y-0"}
        `}
      >
        {/* Dark icon */}
        <div className="relative h-full w-full flex-1 flex justify-center items-center z-10" title="Switch to Dark Mode">
          <span className={`"text-gray-500`}>🌞</span>
        </div>
      </div>

      {/* Light icon */}
      <div className="flex-1 flex justify-center" title="Switch to Light Mode">
        <span className={`text-yellow-300`} >🌙</span>
      </div>
    </div>
  );
};

export default ThemeSwitch;
