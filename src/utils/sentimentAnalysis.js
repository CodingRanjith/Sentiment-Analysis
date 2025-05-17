import Sentiment from "sentiment";
const sentiment = new Sentiment();

export const analyzeSentiment = (text) => {
  const result = sentiment.analyze(text);
  return {
    label: result.score > 0 ? "Positive" : result.score < 0 ? "Negative" : "Neutral",
    score: result.score,
    comparative: result.comparative,
    words: result.words,
    wordCount: result.words.length,
  };
};
