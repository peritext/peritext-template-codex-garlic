import React from 'react';

export default ({
  href,
  target,
  children,
  className,
  id,
  style,
}) => (
  <a href={href} target={target} className={className} id={id} style={id}>
    p. <span className="page-link" href={href} />
  </a>
)