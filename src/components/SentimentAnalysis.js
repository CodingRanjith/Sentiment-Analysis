import React from 'react';
import { Alert } from 'react-bootstrap';

const SentimentAnalysis = ({ sentiment }) => {
  return (
    <Alert variant={sentiment === "Positive" ? "success" : sentiment === "Negative" ? "danger" : "secondary"} className="mt-3">
      Sentiment: <strong>{sentiment}</strong>
    </Alert>
  );
};

export default SentimentAnalysis;
