import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appService from "../appwrite/appConf";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  //the posts will be fetched or hold in posts and updated by setPosts.[] the post will be saved in the form of array with their properties.

  useEffect(() => {}, []);
  //the useEffect is used to fetch a list of posts.
  appService.getPosts([]).then((posts) => {
    //if the post is get then it sets the post.documents
    if (posts) {
      setPosts(posts.documents);
    }
  });

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
//we used<PostCard /> component is used and we passed post in it.
//the $.id is the appwrite id sending method which send a specific id of a post.

export default AllPosts;
