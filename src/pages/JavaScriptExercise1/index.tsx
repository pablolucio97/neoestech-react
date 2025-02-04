import { useState } from "react";
import Header from "../../components/Header";
import { checkAnagrams } from "../../utils/checkAnagram";

const JavaScriptExercise1: React.FC = () => {
  const [firstWord, setFirstWord] = useState("");
  const [secondWord, setSecondWord] = useState("");
  const [wordsAreAnagrams, setWordsAreAnagrams] = useState(false);
  const [wordsWereChecked, setWordsWereChecked] = useState(false);

  const handleCheckAnagrams = () => {
    const isAnagrams = checkAnagrams(firstWord, secondWord);
    setWordsWereChecked(true);
    setWordsAreAnagrams(isAnagrams);
  };

  const handleClearStates = () => {
    setFirstWord("");
    setSecondWord("");
    setWordsAreAnagrams(false);
    setWordsWereChecked(false);
  };

  return (
    <div className="flex flex-col w-screen h-screen items-center pt-40">
      <Header pageTitle="JavaScript Exercise 1" />
      <div className="w-[95%] md:w-[40rem] flex flex-col bg-gray-50 p-4 rounded-lg shadow-md mb-3">
        <input
          type="text"
          placeholder="type the first word"
          className="mb-2"
          value={firstWord}
          onChange={(val) => setFirstWord(val.target.value)}
        />
        <input
          type="text"
          placeholder="type the second word"
          className="mb-2"
          value={secondWord}
          onChange={(val) => setSecondWord(val.target.value)}
        />
        <button
          className="w-full bg-orange-400 text-white font-bold mt-3"
          disabled={!firstWord || !secondWord}
          onClick={handleCheckAnagrams}
        >
          Check if words are anagrams
        </button>
      </div>
      {firstWord && secondWord && wordsWereChecked && (
        <span className="mb-2 text-md md:text-lg font-bold">
          {wordsAreAnagrams ? "Words are anagrams" : "Words are not anagrams"}
        </span>
      )}
      <button onClick={handleClearStates}>Reset states</button>
    </div>
  );
};

export default JavaScriptExercise1;
