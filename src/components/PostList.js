
    // <h1 style={{textAlign: 'center'}}>
    // {title}
    // </h1>

import React from 'react';
// import {useHistory} from 'react-router-dom';
// import MyButton from "./UI/button/MyButton";
import PostItem from "./PostItem";


const PostList = ({posts,title,remove,open}) => {
// console.log(posts)

    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены!
            </h1>
        )
    }

    return (

    <div className="postlist">


    {posts.map((post, index) =>
       
        <PostItem 
        remove={remove}
        open={open}
         key={post.id}
          remove={remove} 
          number={index + 1} 
          post={post} 
          />
     )}

    </div>

        );
    };

export default PostList ;