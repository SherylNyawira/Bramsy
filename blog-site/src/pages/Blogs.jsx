import React from "react";
import "../Blogs.css";

function Blogs() {
  return (
    <main className="blogs">
      <h2>Blogs</h2>
      <div className="blog-list">
        <div className="blog-card">
          <h3>Blog Title 1</h3>
          <p>Short description of the blog...</p>
        </div>
        <div className="blog-card">
          <h3>Blog Title 2</h3>
          <p>Short description of the blog...</p>
        </div>
      </div>
    </main>
  );
}

export default Blogs;