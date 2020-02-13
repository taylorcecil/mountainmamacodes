import React from "react";

function Post(props) {
  console.log(props);
  return (
    <div className="blogSection">
      <div>
        <h2>{props.title}</h2>
        <h2 className="subTitle">{props.subTitle}</h2>
        <p>
          Posted by <b>{props.author}</b> on {props.date}
        </p>
      </div>
      <hr />
    </div>
  );
}

export default Post;
