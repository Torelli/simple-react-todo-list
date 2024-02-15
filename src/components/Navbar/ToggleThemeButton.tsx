import { useEffect, useState } from "react";

export default function ToggleThemeButton() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme == "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [theme]);

  function handleThemeToggling() {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <button
      onClick={handleThemeToggling}
      id="theme-btn"
      className="group relative"
    >
      <i className="fa-solid fa-circle-half-stroke text-2xl" />
      <div className="opacity-0 translate-x-1 whitespace-nowrap bg-gray-900 text-white dark:bg-white dark:text-gray-900 text-center text-base rounded-lg py-2 absolute z-10 group-hover:translate-x-0 group-hover:opacity-100 -top-3 right-10 px-3 pointer-events-none transition-all">
        <span id="theme-tooltip">
          {theme == "dark" ? "Turn off dark mode" : "Turn on dark mode"}
        </span>
        <svg
          className="absolute text-gray-900 dark:text-white h-2 -right-2 bottom-4 -rotate-90"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xmlSpace="preserve"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </button>
  );
}
