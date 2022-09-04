export  function divideLabelIfMultiLine(
  text: string
): string[] | string {
  const splitText = text.split(/\s+/g);
  return splitText.length > 1 ? splitText : text;
}
