import React from "react";
import Header from "./Header";
import "./style.css";
import BlogList from "./BlogList";
import Post from "./Post";

function App() {
  console.log(BlogList);
  const blog = BlogList.map(post => {
    return (
      <Post
        title={post.title}
        subTitle={post.subTitle}
        author={post.author}
        date={post.date}
      />
    );
  });

  return (
    <div>
      <Header />
      <div>{blog}</div>
    </div>
  );
}

export default App;
