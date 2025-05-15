import React from 'react';
import { Button } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const SocialMediaButtons = ({ onPlatformClick }) => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <Button className="m-2" variant="outline-primary" onClick={() => onPlatformClick("Instagram")}>
        <FaInstagram /> Instagram
      </Button>
      <Button className="m-2" variant="outline-primary" onClick={() => onPlatformClick("Facebook")}>
        <FaFacebook /> Facebook
      </Button>
      <Button className="m-2" variant="outline-primary" onClick={() => onPlatformClick("X")}>
        <FaTwitter /> X
      </Button>
    </div>
  );
};

export default SocialMediaButtons;
