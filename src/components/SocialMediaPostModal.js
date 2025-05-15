import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import { FaHeart, FaRegComment, FaShare } from "react-icons/fa";
import { analyzeSentiment } from '../utils/sentimentAnalysis';
import postImages from "../assets/f.jpg"; 



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

const SocialMediaPostModal = ({ showModal, onHide, selectedPlatform, postImage }) => {
  const [comment, setComment] = useState("");
  const [sentiment, setSentiment] = useState("");

  const handleSubmit = () => {
    setSentiment(analyzeSentiment(comment));
  };

  const handleClose = () => {
    setComment("");
    setSentiment("");
    onHide();
  };

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      centered
      size="lg"
      dialogClassName="rounded-lg"
      contentClassName="p-0"
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xl mx-auto">
        {/* Header */}
        <div className="flex items-center p-4 border-b border-gray-200">
          <div className="rounded-full bg-gray-300 h-10 w-10 flex items-center justify-center font-bold text-gray-700 mr-3">
            {selectedPlatform[0]}
          </div>
          <h5 className="text-lg font-semibold">{selectedPlatform}</h5>
        </div>

        {/* Post Image */}
        <img
          src={postImages}
          alt={`${selectedPlatform} post`}
          className="w-full object-cover max-h-96"
        />

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

        {/* Comment Input */}
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
          {sentiment && (
            <Alert
              variant={
                sentiment === "Positive"
                  ? "success"
                  : sentiment === "Negative"
                  ? "danger"
                  : "secondary"
              }
              className="text-center font-semibold mt-3"
            >
              Sentiment: <strong>{sentiment}</strong>
            </Alert>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default SocialMediaPostModal;
