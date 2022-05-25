import React from 'react';
import MyButton from './UI/button/MyButton.js';

// import {useHistory} from 'react-router-dom';
// import MyButton from "./UI/button/MyButton";


const PostItem = (props) => {

    return (
    <div className="post">
            <div className="post__content">
                <strong>{props.post.title}</strong>
                
            </div>
            <div className="post__btns">
                <MyButton onClick={() => props.open(props.post)}>
                    Открыть
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
    </div>


    );
};

export default PostItem;