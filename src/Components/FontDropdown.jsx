const FontDropdown = ({
  font,
  setFont,
  fontDropdownIsOpen,
  setFontDropdownIsOpen,
  isDarkMode,
}) => {
  console.log("isDarkMode", isDarkMode);
  const handleChange = (e) => {
    setFont(e.target.value);
    setFontDropdownIsOpen(false);
  };
  return (
    <form className="flex items-center justify-end rounded-16">
      <label htmlFor="font" aria-label="font family"></label>
      <select
        value={font}
        name="font"
        id="font"
        onChange={handleChange}
        className={`z-10 rounded-16 p-300 font-bold text-[1.125rem]/[1.5rem]
        ${isDarkMode ? "bg-black text-neutral-0 border border-solid border-black shadow-[0px_5px_30px_rgb(164_69_237)]" : "bg-white text-neutral-900 shadow-[0px_5px_30px_rgb(31_31_31)]"}`}
        size="3"
      >
        <option
          value="sans"
          className="font-inter font-bold mb-100 cursor-pointer checked:bg-white hover:text-purple-500"
        >
          Sans serif
        </option>
        <option value="serif" className="font-lora font-bold cursor-pointer checked:bg-white hover:text-purple-500">
          Serif
        </option>
        <option
          value="mono"
          className="font-inconsolata font-bold mt-100 cursor-pointer checked:bg-white hover:text-purple-500"
        >
          Mono
        </option>
      </select>
    </form>
  );
};

export default FontDropdown;
