import React from "react";

export const Quote = ({content, author}) => {
  return (<div className="quote">
    {content}
    <div className="author">&mdash; {author}</div>
  </div>)
}