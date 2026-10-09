const NotFound = ({ isSubmitted, word, isDarkMode, error }) => {
  return (
    <>
    
      <div className="max-w-184 flex flex-col justify-center items-center mt-300 lg:mt-600">
        <span className="text-[4rem]">&#128533;</span>

        <h2 className="font-bold text-[1.125rem]/[1.5rem] lg:text-[1.25rem]/[1.5rem] mt-200 lg:mt-600"
        style={{ color: isDarkMode ? "white": "black",}}>
          No Definitions Found
        </h2>
        <p className="text-neutral-500 text-base/[1.25rem] lg:text-[1.125rem]/[1.5rem] mt-200 lg:mt-250">
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    </>
  );
};

export default NotFound;
