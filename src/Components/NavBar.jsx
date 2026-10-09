const NavBar = ({
  isDarkMode,
  setIsDarkMode,
  font,
  setFont,
  FontDropdownIsOpen,
  setFontDropdownIsOpen,
}) => {
  const handleClick = () => {
    FontDropdownIsOpen
      ? setFontDropdownIsOpen(false)
      : setFontDropdownIsOpen(true);
  };
  return (
    <>
      <div className="flex flex-row justify-between items-center gap-500 font-inter font-bold text-[0.875rem]/[1.4378rem] md:mt-300" aria-label="Choose font">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="38"
          viewBox="0 0 34 38"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#838383"
            strokeLinecap="round"
            strokeWidth="1.5"
          >
            <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
            <path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8" />
            <path d="M11 9h12" />
          </g>
        </svg>
        <div className="flex flex-row justify-center items-center gap-8">
          <div className="flex flex-row justify-center items-center gap-200">
            <span>
              {font === "sans"
                ? "Sans serif"
                : font === "serif"
                  ? "Serif"
                  : "Mono"}
            </span>
            <button onClick={handleClick} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="8"
                viewBox="0 0 14 8"
              >
                <path
                  fill="none"
                  stroke="#A445ED"
                  strokeWidth="1.5"
                  d="m1 1 6 6 6-6"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-row items-center justify-center gap-125">
            <label
              htmlFor="theme-toggle"
              className="bg-neutral-500 relative inline-flex items-center w-10 h-5 cursor-pointer rounded-10"
            >
              <input
                id="theme-toggle"
                type="checkbox"
                className="relative sr-only peer"
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)}
              />
              <span className="absolute inset-0 rounded-full bg-neutral-500 transition-colors duration-200 cursor-pointer top-0 bottom-0 left-0 right-0 before:bg-white before:transition-transform before:duration-200 before:content-[''] before:w-3.5 before:h-3.5 before:rounded-full before:absolute before:top-0.5 before:left-0.5 peer-checked:bg-blue-500 peer-checked:before:translate-x-5 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"></span>
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
            
            >
              <path
                fill="none"
                stroke="#838383"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
