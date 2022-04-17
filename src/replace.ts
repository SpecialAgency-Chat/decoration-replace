import { Maps } from "./data";

/**
 * 
 * @param {string} value Sentences to be converted (e.g. "𝓗𝓮𝓵𝓵𝓸, 𝔀𝓸𝓻𝓵𝓭")
 * @returns {string} Converted sentences (e.g. "Hello, World")
 */
const replace = (value: string): string => {
  const arr = [...value];
  let result: string = "";
  for (const d of arr) {
    if (Maps.find(x => x.has(d))) {
      //@ts-expect-error
      result += Maps.find(x => x.get(d)).get(d);
    } else {
      result += d;
    }
  }
  return result;
};

export { replace };
