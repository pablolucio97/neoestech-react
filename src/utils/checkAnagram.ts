export function checkAnagrams(str1: string, str2: string) {
  // function to sort strings

  const sortString = (str: string) =>
    str.replace(/\s/g, "").toLowerCase().split("").sort().join("");

  const sortedFirstString = sortString(str1);

  const sortedSecondString = sortString(str2);

  // returns true if both string are identical after sorting, it means they are anagrams

  return sortedFirstString === sortedSecondString;
}

// console.log(checkAnamgrams("earth", "heart")); // true
// console.log(checkAnamgrams("listen", "silent")); // true
// console.log(checkAnamgrams("mice", "rice")); // false
