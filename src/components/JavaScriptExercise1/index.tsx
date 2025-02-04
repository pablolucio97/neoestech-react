import { useState } from "react";
import { checkAnagrams } from "../../utils/checkAnagram";

const JavaScriptExercise1: React.FC = () => {
  const [firstWord, setFirstWord] = useState("");
  const [secondWord, setSecondWord] = useState("");
  const [wordsAreAnagrams, setWordsAreAnagrams] = useState(false);

  const handleCheckAnagrams = () => {
    const isAnagrams = checkAnagrams(firstWord, secondWord);
    setWordsAreAnagrams(isAnagrams);
  };

  const handleResetState = () => {
    setFirstWord("");
    setSecondWord("");
  };

  return (
    <div>
      <p>JavaScript Exercise 1</p>
      <input
        type="text"
        value={firstWord}
        onChange={(val) => setFirstWord(val.target.value)}
      />
      <input
        type="text"
        value={secondWord}
        onChange={(val) => setSecondWord(val.target.value)}
      />
      <button
        disabled={!firstWord || !secondWord}
        onClick={handleCheckAnagrams}
      >
        Check if words are anagrams
      </button>
      {firstWord && secondWord && (
        <span>
          {wordsAreAnagrams ? "Words are anagrams" : "Words are not anagrams"}
        </span>
      )}
      <button onClick={handleResetState}>Reset state</button>
    </div>
  );
};

export default JavaScriptExercise1;
