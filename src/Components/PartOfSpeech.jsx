const PartOfSpeech = ({ word }) => {
  if (!word || !word.entries?.length) {
    return null;
  }

  const senses = word.entries[0].senses || [];

  return (
    <>
      <div className="relative flex flex-col justify-between items-start gap-200  mt-300">
        <h3 className="text-[1.125rem]/[1.5rem] font-bold md:text-[1.125rem]/[1.5rem] lg:text-[1.5rem]/[1.563rem]">
          {word.entries[0].partOfSpeech}
        </h3>
        <div className="absolute top-4 right-0 justify-self-center h-px w-66.25 md:w-150.25 bg-neutral-200"></div>
        <h2 className="text-neutral-500 text-base/[1.063rem] md:text-[1.25rem]/[1.313rem]">
          Meaning
        </h2>
      </div>
      <ul className="list-disc flex flex-col gap-150 text-[0.938rem]/[1.5rem] mt-300 lg:text-[1.125rem]/[1.5rem]">
        {senses.map((sense, index) => {
          return (
            <li key={index}>
              <p>{sense.definition ?? ""}</p>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-row justify-start items-center text-base/[1.063rem] mt-300 gap-300 md:text-[1.25rem]/[1.313rem]">
        <h3 className="text-neutral-500 ">Synonyms</h3>
        <p className="text-purple-500">{word.entries?.[0]?.synonyms[0]}</p>
      </div>
      <div className="relative flex flex-col justify-between items-start gap-200 mt-300">
        <h3 className="text-[1.125rem]/[1.5rem] font-bold md:text-[1.125rem]/[1.5rem] lg:text-[1.5rem]/[1.563rem]">
          {word.entries[1]?.partOfSpeech}
        </h3>
        <div className="absolute top-4 right-0 justify-self-center h-px w-66.25 md:w-155.25 bg-neutral-200"></div>
        <h2 className="text-neutral-500 text-base/[1.063rem] md:text-[1.25rem]/[1.313rem]">
          Meaning
        </h2>
      </div>
      <ul className="list-disc flex flex-col gap-150 text-[0.938rem]/[1.5rem] mt-300 mb-200 lg:text-[1.125rem]/[1.5rem]">
        {word.entries[1].senses.map((sense, index) => {
          return (
            <li key={index}>
              <p>{sense.definition ?? ""}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PartOfSpeech;
