import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FaHeart, FaRegComment, FaShare } from "react-icons/fa";
import { analyzeSentiment } from "../utils/sentimentAnalysis";
import "animate.css";
import postImages from "../assets/f.jpg"; // Replace with your actual image path

// Dummy comments for each platform
const dummyComments = {
  Instagram: [
    { id: 1, user: "travel_lover", text: "Absolutely love this view! 😍" },
    { id: 2, user: "foodie_jane", text: "This makes me want to visit right now!" },
  ],
  Facebook: [
    { id: 1, user: "John Doe", text: "Great post, really inspiring!" },
    { id: 2, user: "Jane Smith", text: "Thanks for sharing this, very helpful." },
  ],
  X: [
    { id: 1, user: "TechGuru", text: "Interesting take, totally agree!" },
    { id: 2, user: "NewsFanatic", text: "Can't wait to see more updates on this." },
  ],
};

const SocialMediaPostModal = ({ showModal, onHide, selectedPlatform }) => {
  const [comment, setComment] = useState("");
  const [sentiment, setSentiment] = useState(null);

  const handleSubmit = () => {
    const result = analyzeSentiment(comment);
    setSentiment(result);
  };

  const handleClose = () => {
    setComment("");
    setSentiment(null);
    onHide();
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered size="lg" contentClassName="p-0">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full mx-auto overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center">
            <img
              src={`https://i.pravatar.cc/150?u=${selectedPlatform}`}
              alt="profile"
              className="h-10 w-10 rounded-full object-cover mr-3"
            />
            <div>
              <h5 className="text-sm font-bold">{selectedPlatform}_official</h5>
              <p className="text-xs text-gray-500">Just now • India</p>
            </div>
          </div>
          <span className="text-gray-400 text-lg cursor-pointer">•••</span>
        </div>

        {/* Post Image */}
        <img src={postImages} alt="Post" className="w-full h-auto object-cover" />

        {/* Post Actions */}
        <div className="flex items-center px-4 py-3 space-x-6 border-b border-gray-200">
          <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500 transition">
            <FaHeart size={22} />
            <span>120</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500 transition">
            <FaRegComment size={22} />
            <span>32</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-green-500 transition">
            <FaShare size={22} />
            <span>Share</span>
          </button>
        </div>

        {/* Post Description */}
        <div className="px-4 py-3 border-b border-gray-200">
          <p className="text-gray-800 font-medium mb-2">
            This is an example post on <span className="font-bold">{selectedPlatform}</span>. Enjoy the beautiful scenery and engaging content!
          </p>
        </div>

        {/* Dummy Comments */}
        <div className="px-4 py-2 max-h-40 overflow-y-auto border-b border-gray-200">
          <h6 className="font-semibold mb-2 text-gray-700">Comments</h6>
          {dummyComments[selectedPlatform]?.map(({ id, user, text }) => (
            <div key={id} className="mb-2">
              <span className="font-semibold text-blue-600 mr-1">@{user}</span>
              <span className="text-gray-700">{text}</span>
            </div>
          ))}
        </div>

        {/* Comment Input + Sentiment */}
        <div className="p-4">
          <Form>
            <Form.Group controlId="commentTextarea">
              <Form.Label>Enter your comment:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Type your comment here..."
                className="mb-3"
              />
            </Form.Group>
            <Button
              variant="primary"
              className="w-full"
              onClick={handleSubmit}
              disabled={!comment.trim()}
            >
              Submit Comment
            </Button>
          </Form>

          {/* Sentiment Output */}
          {sentiment && (
            <div className="mt-5 text-center bg-white p-6 rounded-lg shadow-md animate__animated animate__fadeInUp">
              {/* Sentiment Label + Emoji */}
              <h4 className="text-2xl font-semibold mb-2">
                The sentiment of the text is{" "}
                <span
                  className={`${
                    sentiment.label === "Positive"
                      ? "text-green-600"
                      : sentiment.label === "Negative"
                      ? "text-red-600"
                      : "text-gray-600"
                  }`}
                >
                  {sentiment.label}
                </span>
              </h4>

              <div className="text-5xl mb-4">
                {sentiment.label === "Positive"
                  ? "😊"
                  : sentiment.label === "Negative"
                  ? "😠"
                  : "😐"}
              </div>

              {/* Score Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div className="bg-gray-900 text-red rounded-lg p-4 shadow">
                  <h3 className="text-3xl font-bold">{sentiment.score}</h3>
                  <p className="text-sm mt-1">Sentiment Score</p>
                </div>
                <div className="bg-gray-900 text-green rounded-lg p-4 shadow">
                  <h3 className="text-3xl font-bold">{sentiment.wordCount}</h3>
                  <p className="text-sm mt-1">Words Detected</p>
                </div>
                <div className="bg-gray-900 text-red rounded-lg p-4 shadow">
                  <h3 className="text-3xl font-bold">{sentiment.comparative.toFixed(2)}</h3>
                  <p className="text-sm mt-1">Comparative Score</p>
                </div>
              </div>

              {/* Sentiment Words */}
              <div className="mt-6">
                <h6 className="font-semibold mb-3 text-gray-700">Sentiment Words</h6>
                <div className="flex flex-wrap justify-center gap-2">
                  {sentiment.words.length > 0 ? (
                    sentiment.words.map((word, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow"
                      >
                        {word}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-500">No sentiment words detected.</span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default SocialMediaPostModal;
