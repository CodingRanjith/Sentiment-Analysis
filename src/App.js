import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import SocialMediaPostModal from './components/SocialMediaPostModal';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [postImage, setPostImage] = useState("");
  const [showText, setShowText] = useState(true);

  const handlePlatformClick = (platform) => {
    setSelectedPlatform(platform);
    setPostImage(`https://via.placeholder.com/500?text=${platform}+Post`);
    setShowModal(true);
    setShowText(false);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #e866b3 100%)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "3rem 1rem",
      }}
    >
      {/* Title & Subtitle */}
      {showText && (
        <div className="text-center mb-12 text-white max-w-xl">
          <h1 className="text-5xl font-extrabold mb-3 drop-shadow-lg">
            Social Media Sentiment Analysis
          </h1>
          <p className="text-xl font-medium tracking-wide drop-shadow-md">
            Click a platform to analyze sentiment in comments.
          </p>
        </div>
      )}

      {/* Gradient background container for cards */}
      <div
        className="rounded-xl shadow-xl w-full max-w-4xl p-10 flex items-center justify-center"
        style={{
          minHeight: "100vh",
          gap: "2rem",
        }}
      >
        <Row
          className="justify-content-center"
          style={{ width: "100%", gap: "1.5rem" }}
        >
          {[
            {
              platform: "Instagram",
              variant: "outline-danger",
              icon: <FaInstagram size={120} />,
            },
            {
              platform: "Facebook",
              variant: "outline-primary",
              icon: <FaFacebook size={120} />,
            },
            {
              platform: "X",
              variant: "outline-info",
              icon: <FaTwitter size={120} />,
            },
          ].map(({ platform, variant, icon }) => (
            <Col
              key={platform}
              xs={12}
              sm={6}
              md={4}
              className="d-flex justify-content-center"
            >
              <Card
                className="shadow-lg rounded-xl w-full max-w-xs hover:scale-105 transition-transform duration-300"
                style={{ borderRadius: "1rem" }}
              >
                <Card.Body className="text-center py-8 px-6">
                  <Button
                    variant={variant}
                    onClick={() => handlePlatformClick(platform)}
                    className="w-full py-3 rounded-full text-xl font-semibold text-gray-900 flex flex-col items-center justify-center gap-2
                      hover:bg-gradient-to-r hover:text-white
                      focus:outline-none"
                    style={{
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    }}
                  >
                    <div className="mb-2 text-current">{icon}</div>
                    {platform}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Modal */}
      <SocialMediaPostModal
        showModal={showModal}
        onHide={() => {
          setShowModal(false);
          setShowText(true);
        }}
        selectedPlatform={selectedPlatform}
        postImage={postImage}
      />
    </div>
  );
};

export default App;
