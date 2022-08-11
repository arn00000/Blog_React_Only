import React, { useState } from "react";

function Post({ data, deletePost, editPost }) {
  const [show, setShow] = useState(false);
  const [post, setPost] = useState(data);

  const onChangeHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    editPost(post);
  };
  return (
    <div>
      <div class="p-6 h-72 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-auto ">
        <p className="text-white">{data.id}</p>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
          {data.title}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
          {data.body}
        </p>
        <button
          className="bg-cyan-500 shadow-lg shadow-cyan-500/50  px-8 py-2.5 rounded-lg text-white mr-2"
          data-bs-toggle="modal"
          data-bs-target={`#modal-${post.id}`}
        >
          Edit
        </button>

        <div
          className="fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto outline-none modal fade"
          id={`modal-${post.id}`}
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="relative w-auto pointer-events-none modal-dialog">
            <div className="relative flex flex-col w-full text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto modal-content bg-clip-padding">
              <div className="flex items-center justify-between flex-shrink-0 p-4 border-b border-gray-200 modal-header rounded-t-md">
                <h5
                  className="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalLabel"
                >
                  Edit
                </h5>
                <button
                  type="button"
                  className="box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 btn-close focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form
                onSubmit={onSubmitHandler}
                className="flex flex-wrap items-center justify-end flex-shrink-0 p-4 border-t border-gray-200 modal-footer rounded-b-md"
              >
                <input
                  name="title"
                  type="text"
                  className="w-full h-10 mb-5 text-sm text-black border-2 rounded-lg border-slate-900"
                  onChange={onChangeHandler}
                  value={post.title}
                />
                <input
                  name="body"
                  type="text"
                  className="w-full h-10 mb-5 text-sm text-black border-2 rounded-lg border-slate-900"
                  onChange={onChangeHandler}
                  value={post.body}
                />

                <button
                  type="button"
                  className="px-6
                  py-2.5
                  bg-red-600
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  transition
                  duration-150
                  ease-in-out"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  className="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-1"
                  data-bs-dismiss="modal"
                >
                  Save changes
                </button>
              </form>
            </div>
          </div>
        </div>

        <button
          className="bg-red-500 shadow-lg shadow-red-500/50 px-8 py-2.5 rounded-lg text-white mr-2"
          onClick={() => deletePost(data.id)}
        >
          Delete
        </button>
        <button
          className="bg-yellow-500 shadow-lg shadow-yellow-500/50 px-8 py-2.5 rounded-lg text-white"
          onClick={() => setShow(!show)}
        >
          {show ? "Hide" : "Show"}
        </button>
        {show ? (
          <form>
            <div class="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
              <div class="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                <label for="comment" class="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows="4"
                  class="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  placeholder="Write a comment..."
                  required=""
                ></textarea>
              </div>
              <div class="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                <button
                  type="submit"
                  class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                >
                  Post comment
                </button>
                <div class="flex pl-0 space-x-1 sm:pl-2">
                  <button
                    type="button"
                    class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Attach file</span>
                  </button>
                  <button
                    type="button"
                    class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Set location</span>
                  </button>
                  <button
                    type="button"
                    class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Upload image</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        ) : null}
      </div>
    </div>
  );
}

export default Post;
