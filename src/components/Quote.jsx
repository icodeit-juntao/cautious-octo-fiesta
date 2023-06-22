import React from "react";

export const Quote = ({content, author}) => {
  return (<p className="quote">
    {content}
    <div className="author">{author}</div>
  </p>)
}