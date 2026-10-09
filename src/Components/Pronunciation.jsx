const Pronunciation = ({ word, isSubmitted }) => {
  {
    /* This is a good practice to check if the word object and its entries property exist before trying to access them. It prevents runtime errors that could occur if the word object is null or undefined. */
  }
  if (!word || !word.entries?.length) {
    return null;
  }

  const entry = word.entries[0];
  {
    /*This is known as optional chaining. It allows you to access deeply nested properties without having to explicitly check if each level exists. */
  }
  const pronunciation = entry.pronunciations?.[0]?.text;

  return (
    <div className="flex flex-row justify-between items-center mt-300">
      <div>
        <h1 className="font-bold text-[2rem]/[2.125rem] lg:text-[4rem]/[4.188rem]">
          {/*word is an object that contains the word and its entries. The word property is accessed to display the actual word being pronounced. */}
          {word.word}
        </h1>
        {/* This is known as the nullish coalescing operator. It returns the right-hand side operand when the left-hand side is null or undefined. */}
        <p className="text-[1.125rem]/[1.5rem] lg:text-[1.25rem]/[1.813rem]">
          {pronunciation ?? ""}
        </p>
      </div>
      

      <div className="max-w-12 max-h-12">
        <button className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 75 75"
          >
            <g fill="#A445ED" fillRule="evenodd">
              <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
              <path d="M29 27v21l21-10.5z" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pronunciation;
