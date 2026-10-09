const Source = ({ word }) => {
  if (!word || !word.entries?.length) {
    return null;
  }

  return (
    <>
      <div className="relative flex flex-col justify-between mt-300">
      <div className="absolute -top-4 right-0 justify-self-center h-px w-full md:w-155.25 bg-neutral-200"></div>
        <h4 className="text-neutral-500 text-[0.875rem]/[0.938rem] underline decoration-solid mb-100">
          Source
        </h4>
        <div className="flex flex-row flex-nowrap justify-start items-start gap-100 underline decoration-solid">
          <a
            href={`https://en.wiktionary.org/wiki/${word.word}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`https://en.wiktionary.org/wiki/${word.word}`}
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <path
              fill="none"
              stroke="#838383"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Source;
