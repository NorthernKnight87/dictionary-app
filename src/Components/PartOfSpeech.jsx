const PartOfSpeech = ({ word }) => {
  if (!word || !word.entries?.length) {
    return null;
  }

  return (
    <>
      <div className="relative flex flex-col justify-between items-start gap-200">
        {word.entries.map((entry, i) => (
          <section
            key={i}
            className="flex flex-col gap-150 text-[0.938rem]/[1.5rem] mt-300 lg:text-[1.125rem]/[1.5rem]"
          >
            <h2 className="text-[1.125rem]/[1.5rem] font-bold md:text-[1.125rem]/[1.5rem] lg:text-[1.5rem]/[1.563rem]">
              {entry.partOfSpeech}
            </h2>
            <div className="flex w-65.25 h-0 border-neutral-500"></div>
            <h3 className="text-neutral-500 text-base/[1.063rem] md:text-[1.25rem]/[1.313rem]">
              Meaning
            </h3>
            <ul className="list-disc text-[0.938rem]/[1.5rem] md:text-[1.125rem]/[1.5rem] flex flex-col gap-150 px-300">
              {entry.senses.map((sense, j) => (
                <li key={j}>{sense.definition}</li>
              ))}
            </ul>
            {entry.synonyms?.length > 0 && (
              <p className="text-neutral-500 text-base/[1.25rem] md:text-[1.25rem]/[1.938rem]">
                Synonyms
                <span className="text-purple-500 pl-1 font-bold">
                  {entry.synonyms.join(", ")}
                </span>
              </p>
            )}
          </section>
        ))}
      </div>
    </>
  );
};

export default PartOfSpeech;
