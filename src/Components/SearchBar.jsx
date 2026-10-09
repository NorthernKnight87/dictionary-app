const SearchBar = ({
  userInput,
  setUserInput,
  onSearch,
  error,
  isSubmitted,
}) => {
  return (
    <>
      <div
        className={`flex flex-row justify-between items-center text-neutral-800 bg-neutral-100 rounded-16 px-6 py-4 mt-6 focus-within:outline-2 focus-within:outline-purple-500
        ${
          userInput === "" && isSubmitted
            ? "border border-solid border-red-500"
            : ""
        }`}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(userInput);
          }}
          className="flex flex-row justify-between items-center gap-4 w-full"
          noValidate
        >
          <label htmlFor="search" className="sr-only">
            Search for a word
          </label>
          <input
            type="search"
            id="search"
            placeholder="Search for any word..."
            className="outline-none [&::-webkit-search-cancel-button]:appearance-none h-auto"
            required
            autoFocus
            onInvalid={(e) =>
              e.currentTarget.setCustomValidity(
                "Please write a word to search the database",
              )
            }
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button type="submit" className="cursor-pointer" aria-label="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                fill="none"
                stroke="#A445ED"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
              />
            </svg>
          </button>
        </form>
      </div>
      <div className="mt-200 text-left text-red-500">
        {userInput === "" && isSubmitted == true && (
          <p>Whoops, can't be empty!</p>
        )}
      </div>

      <div className="mt-200 text-center">
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </>
  );
};

export default SearchBar;
