import React from "react";
import { Link } from "react-router-dom";
import appService from "../appwrite/appConf";

function PostCard({$id, title, featuredImage}) { //this $id is the syntax of appwrite.
  return (
        <Link to={`/post/${$id}`}> 
    <div className="w-full bg-gray-100 rounded-xl p-4">
      <div className="w-full justify-center mb-4">
        {/* this to in the link is the href */}
          <img
            src={appService.getFilePreview(featuredImage)}
            alt={{ title }}
            className="rounded-xl"
          />
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
        </Link>
  );
}

export default PostCard;
