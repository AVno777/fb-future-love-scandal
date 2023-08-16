import React from "react";
import PostComment from "./PostComment";

function PostComments() {
  return (
    <div className=" bg-white w-3/12 rounded-mlarge">
      <div className="text-center text-lg py-6 relative">
        Comments
        <div className="absolute left-0 right-0 h-0.5 bg-custom-bg bottom-0"></div>
      </div>
      <div>
        <PostComment></PostComment>
      </div>
    </div>
  );
}

export default PostComments;
