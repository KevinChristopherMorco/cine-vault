const formatReview = (content) => {
  const sentences = content.match(/[^.!?]+[.!?]*\s*/g) || [];

  const formatSentences = [];

  for (let i = 0; i < sentences.length; i += 6) {
    const newLines = sentences.slice(i, i + 6).join(" ");
    formatSentences.push(newLines);
  }

  return formatSentences;
};

export default formatReview;
