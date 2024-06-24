import React from "react";
import Blogs from "./Blogs";

const LatestBlogs = () => {
  return (
    <div>
      <h2 className="text-center my-12 text-lg lg:text-6xl font-bold">
        Latest Blogs
      </h2>
      <Blogs amount={4} />
    </div>
  );
};

export default LatestBlogs;
