import React from 'react';
import { Form } from 'react-bootstrap';

const CommentBox = ({ comment, setComment }) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="commentTextArea">
        <Form.Label>Enter your Comment</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Type your comment..."
        />
      </Form.Group>
    </Form>
  );
};

export default CommentBox;
