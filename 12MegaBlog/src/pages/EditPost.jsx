import React from "react";
import { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import { useParams, useNavigate } from "react-router-dom";
import appService from "../appwrite/appConf";

function EditPost() {
  const [post, setPosts] = useState(null);
  const { slug } = useParams();
  //this is used to Extract the URL information.
  const navigate = useNavigate();

  useEffect(() => {
// It checks if a slug is available in the URL, and if so, it uses appService.getPost(slug) to retrieve the corresponding post data.
    if (slug) {
      appService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        }
      });
    } else {
//If no valid slug, navigate back to the home page
      navigate("/");
    }
  }, [slug, navigate]);
  //this dependency is for the use of useEffect (if any changes occurs in slug and navigate then run useEffect)

//if post is then return
  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}
//post data is passed to it using the post prop.

export default EditPost;
