import React from "react";

function BlogsTitle({ children }) {
  return (
    <div className="mb-10">
      <h4 className="text-white_ inline-block font-semibold text-3xl">
        {children}
      </h4>
    </div>
  );
}

export default BlogsTitle;
