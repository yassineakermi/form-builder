export default function splitAndCapitalizeString(str: string) {
  // Split the string using regular expressions
  const words = str.split(/(?=[A-Z])/);

  // Capitalize the first letter of each word
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the words with spaces
  const result = capitalizedWords.join(" ");

  return result;
}
