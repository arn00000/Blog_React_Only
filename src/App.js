import React, { useEffect, useState } from "react";
import Post from "./components/Post";
import "tw-elements";
import Swal from "sweetalert2";

function App() {
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("posts")) || []
  );

  const getPosts = async () => {
    let url = await fetch("http://jsonplaceholder.typicode.com/posts");
    let data = await url.json();

    if (localStorage.getItem("posts")) {
      setPosts(JSON.parse(localStorage.getItem("posts")));
    } else {
      setPosts(data);
      localStorage.setItem("posts", JSON.stringify(data));
    }

    return data;
  };

  const editPost = (updatedPost) => {
    // alert(JSON.stringify(updatedPost));
    let posts = JSON.parse(localStorage.getItem("posts"));
    posts.map((post) => {
      if (post.id == updatedPost.id) {
        return (post.title = updatedPost.title), (post.body = updatedPost.body);
      }
    });
    localStorage.setItem("posts", JSON.stringify(posts));
    getPosts();
  };

  const deletePost = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        let posts = JSON.parse(localStorage.getItem("posts"));
        posts = posts.filter((post) => post.id != id);
        localStorage.setItem("posts", JSON.stringify(posts));
        getPosts();
      }
    });
  };

  let showPosts = JSON.parse(localStorage.getItem("posts")).map((post) => (
    <Post
      key={post.id}
      data={post}
      deletePost={deletePost}
      editPost={editPost}
    />
  ));

  //   showPosts();

  useEffect(() => {
    getPosts();
  }, []);

  // console.log(posts);

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 m-5 sm:grid-cols-2">
        {showPosts}
      </div>
    </div>
  );
}

export default App;
