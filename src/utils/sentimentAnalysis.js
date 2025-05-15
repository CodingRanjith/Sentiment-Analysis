export const analyzeSentiment = (comment) => {
  const positiveWords = [
    "happy", "good", "amazing", "great", "love", "awesome", "nice", "excellent",
    "wonderful", "fantastic", "best", "cool", "awesome", "superb", "perfect",
    "brilliant", "beautiful", "awesome", "love it", "liked", "thank you",
    "shukriya", "bahut acha", "mast", "lit", "zabardast", "achha hai", "sahi hai",
    "respect", "congrats", "well done", "good job", "beautiful", "lovely",
    "smile", "cheerful", "incredible", "happy vibes", "🙏", "😍", "👍", "👌", "✨",
    "bhai", "sister", "dost", "friend", "family", "great work", "beyond amazing"
  ];

  const negativeWords = [
    "bad", "sad", "angry", "hate", "upset", "worst", "terrible", "disgusting",
    "stupid", "useless", "never", "dislike", "boring", "tired", "frustrated",
    "annoyed", "disappointed", "pathetic", "chutiya", "bewakoof", "fool", "mad",
    "gussa", "ruk jao", "stop it", "fake", "liar", "cheater", "useless", "ugly",
    "cry", "😭", "😡", "👎", "waste", "hate it", "problem", "issue", "angry vibes",
    "harassment", "troll", "scam", "cheated", "sad vibes", "ruined", "shame",
    "fail", "problematic"
  ];

  // Normalize comment to lowercase
  const commentLower = comment.toLowerCase();

  // Check positive first, then negative (to handle mixed comments)
  if (positiveWords.some((word) => commentLower.includes(word))) {
    return "Positive";
  }
  if (negativeWords.some((word) => commentLower.includes(word))) {
    return "Negative";
  }
  return "Neutral";
};
