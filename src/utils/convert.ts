function isEndWithConsonant(korStr) {
  const finalChrCode = korStr.charCodeAt(korStr.length - 1);
  const finalConsonantCode = (finalChrCode - 44032) % 28;
  return finalConsonantCode !== 0;
}

export function convertName(name: string) {
  const onlyName = name.substring(1);
  return isEndWithConsonant(onlyName) ? onlyName + "이" : onlyName;
}
