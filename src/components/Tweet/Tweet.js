import React from 'react';
import { Link } from 'react-router-dom';

const Tweet = ({
  id,
  text,
  createdAt,
  replyToId,
  repliedTweet,
  highlighted,
}) => {
  // This is needed to render semantically correct markup
  const Element = highlighted ? 'div' : 'li';

  return (
    <Element key={id}>
      {replyToId &&
        repliedTweet && (
          <React.Fragment>
            In reply to <cite> {repliedTweet.text}</cite>
          </React.Fragment>
        )}
      <p>{text}</p>
      <Link to={`/tweet/${id}`}>
        <small>{new Date(createdAt).toDateString()}</small>
      </Link>
    </Element>
  );
};

export default Tweet;
