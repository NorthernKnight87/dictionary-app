import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import Pronunciation from "./Components/Pronunciation";
import FontDropdown from "./Components/FontDropdown";
import PartOfSpeech from "./Components/PartOfSpeech";
import Source from "./Components/Source";
import NotFound from "./Components/NotFound";

/* Your users should be able to:

- Search for words using the input field - done
- See the Free Dictionary API's response for the searched word - done
- See a form validation message when trying to submit a blank form - done
- Play the audio file for a word when it's available - not available
- Switch between serif, sans serif, and monospace fonts - done
- Switch between light and dark themes - done
- View the optimal layout for the interface depending on their device's screen size - done
- See hover and focus states for all interactive elements on the page -done */

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [font, setFont] = useState("sans");
  const [FontDropdownIsOpen, setFontDropdownIsOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [word, setWord] = useState(null);
  const [isSubmitted, toggleIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [wordNotFound, setWordNotFound] = useState(false);

  const handleSearch = async (userInput) => {
    if (!userInput.trim()) return;
    toggleIsSubmitted(true);
    setWord(null);
    setError("");
    setWordNotFound(false);
    try {
      const url = `https://freedictionaryapi.com/api/v1/entries/en/${encodeURIComponent(userInput)}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      const jsonResponse = await response.json();

      if (!jsonResponse.entries || jsonResponse.entries.length === 0) {
        setWordNotFound(true);
      }
      setWord(jsonResponse);
    } catch (error) {
      console.error("Dictionary search failed:", error);
      setError("Unable to fetch word. Please try again later.");
    }
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <div
        className="min-h-screen bg-neutral-0 text-neutral-800 dark:bg-neutral-950"
        style={{
          fontFamily:
            font === "sans"
              ? "Inter"
              : font === "serif"
                ? "Lora"
                : "Inconsolata",
        }}
      >
        <div className="relative flex flex-col p-325">
          <NavBar
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            font={font}
            setFont={setFont}
            FontDropdownIsOpen={FontDropdownIsOpen}
            setFontDropdownIsOpen={setFontDropdownIsOpen}
          />
          {FontDropdownIsOpen && (
            <FontDropdown
              font={font}
              setFont={setFont}
              FontDropdownIsOpen={FontDropdownIsOpen}
              setFontDropdownIsOpen={setFontDropdownIsOpen}
              isDarkMode={isDarkMode}
            />
          )}
          <SearchBar
            userInput={userInput}
            setUserInput={setUserInput}
            onSearch={handleSearch}
            error={error}
            isSubmitted={isSubmitted}
          />
          {isSubmitted && wordNotFound && (
            <div className="flex flex-col justify-center items-center text-center">
              <NotFound
                word={word}
                isSubmitted={isSubmitted}
                isDarkMode={isDarkMode}
              />
            </div>
          )}

          <Pronunciation word={word} isSubmitted={isSubmitted} />
          <div className="mt-600">
            <PartOfSpeech word={word} />
          </div>
          <div>
            <Source word={word} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
