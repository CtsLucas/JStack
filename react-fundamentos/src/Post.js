import React from 'react';
import PropTypes from 'prop-types';

export default function Post(props) {
  return (
    <>
      <article>
        <strong>{props.post.title}</strong>
        <br />
        <small>{props.post.subtitle}</small>
        <br />
        Likes: {props.likes}
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
  likes: PropTypes.number.isRequired,
};
