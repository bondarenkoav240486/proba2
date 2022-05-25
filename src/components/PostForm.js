// import React from 'react';
import React, {useEffect, useState,useRef} from 'react';

import MyButton from './UI/button/MyButton.js';
import MyTextArea from './UI/textArea/MyTextArea.js';
import MyInput from './UI/input/MyInput.js';


const PostForm = ({create,editPost,save,post,setPost}) => {

  // const [post, setPost] = useState({title:'',body:''});

  const addNewPost = (e) => {
    e.preventDefault()
      // setPosts([...posts, {...post,id: Date.now()}])
    const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        console.log(save)
        
        // console.log(create)
      // setPosts([...posts, newPost])
    // console.log(bodyInputRef.current.value)
  }

   const saveEditedPost = (e) => {
    e.preventDefault()
      // setPosts([...posts, {...post,id: Date.now()}])
    const editedPost = {
            ...post
        }
        editPost(editedPost)
        console.log(save)
        // console.log(create)
      // setPosts([...posts, newPost])
    // console.log(bodyInputRef.current.value)
  }

    return (
    <div className="PostForm">
            <form>

          <MyInput
            // ref={bodyInputRef}
            value={post.title}
            onChange={e=>setPost({ ...post, title: e.target.value})}
           type='text' 
           placeholder='placeholder1' 
           />

          <MyTextArea type='text' 
            value={post.body}
            // onChange={e=>setBody(e.target.value)}
            onChange={e=>setPost({ ...post, body: e.target.value})}

            placeholder='placeholder2' 
          />
          
          <MyButton 
            onClick={ save ? addNewPost : saveEditedPost
            }
            // onClick={addNewPost}
          >
          button create post
          </MyButton>

        </form>
    </div>


    );
};

export default PostForm;