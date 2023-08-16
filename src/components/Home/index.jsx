import React from "react";
import { BaseLayout } from "../../layout/BaseLayout";
import Post from "../../common/Post";
import PostComments from "../../common/Comment/PostComments";

export const Home = () => {
  return (
    <BaseLayout>
      <div className="w-full relative">
        <div className="absolute pt-24">
          <div className="bg-custom-bg pt-9 px-4 w-screen">
            <div className="flex ">
              <Post></Post>
              <PostComments></PostComments>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};
