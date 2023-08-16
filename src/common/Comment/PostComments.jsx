import React from "react";
import PostComment from "./PostComment";
function PostComments() {
  return (
    <div className=" bg-white w-3/12 rounded-mlarge">
      <div className="items-center text-center py-6 ">Comments</div>
      <div>
        <PostComment></PostComment>
      </div>
    </div>
  );
}

export default PostComments;
