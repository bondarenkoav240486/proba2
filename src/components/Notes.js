
  import React, {useMemo, useEffect, useState,useRef} from 'react';

// POSTS.........................................................................
import PostList from './PostList';
import MyButton from './UI/button/MyButton.js';
import MyInput from './UI/input/MyInput.js';
import MySelect from './UI/select/MySelect.js';
// import MyModal from './components/UI/MyModal/MyModal.js';
// import './styles/App.css';
import PostForm from './PostForm';
import PostFilter from './PostFilter.js';


// .......................................................................
const Notes = ({posts,setPosts,allNotes,setAllNotes,initNotesAll,setVisible}) => {
// console.log(posts)


const [post, setPost] = useState({title:'',body:''});
const [save, setSave] = useState(true);
const [filter, setFilter] = useState({sort:'', query:''});
const [modal, setModal] = useState(false);

// POSTS.........................................................................

// POSTS CREATE
const createPost = (newPost) => {
   setPosts([...posts, newPost])
   setModal(false)
   setSave(true)
   console.log(save)
}

// POSTS edit
const editPost = (editedPost) => {
  let i = posts.indexOf( posts.find(p=>p.id==editedPost.id) )
  setPosts([...posts.slice(0, i), editedPost, ...posts.slice( i + 1)])
  setSave(true)
  console.log(save)
}

// POSTS REMOVE
const removePost = (post) => {
  setPosts(posts.filter(p=>p.id!==post.id))
}

//POSTS open
const openPost = (post) => {
  setPost(posts.find(p=>p.id==post.id))
  setSave(false)
  console.log(save)
}

//POSTS sorte
const sortedPosts = useMemo(()=>{

 console.log ('otrabotala func getSortedPosts')
 if(filter.sort){

  return  [...posts].sort( (a,b)=>{ 

   return a[filter.sort].localeCompare(b[filter.sort]) 
}) 

}

return posts;

},[filter.sort,posts])

//POSTS sortedAndSearched
const sortedAndSearchedPosts = useMemo(()=>{
  return sortedPosts.filter(post=>post.title.toLowerCase().includes(filter.query.toLowerCase()))
})

const saveChanges = () => {
   // console.log(allNotes);
   let id = allNotes[0].dateId ;
   allNotes.find(elem=>elem.id==id).notes = posts
   setAllNotes([...allNotes ])

   initNotesAll = allNotes;
   // localStorage.setItem('key1',JSON.stringify(initNotesAll));
   localStorage.setItem('key2',JSON.stringify(initNotesAll));
   // let initNotesAllCopy = JSON.parse( localStorage.getItem('key1') );
   let initNotesAllCopy = JSON.parse( localStorage.getItem('key2') );
   console.log(initNotesAllCopy)

   // setVisible(false);

}

    return (


      <div className = "posts">

         <PostForm  
             create={createPost} 
             editPost={editPost}
             save={save}
            post={post}
            setPost={setPost}
          />

         <div>

            <PostFilter
            filter={filter}
            setFilter={setFilter}
            />

         </div>

         <PostList
            posts={sortedAndSearchedPosts}
            title={'posts of JS'}
           remove={removePost}
           open={openPost}
         />

         <MyButton 
            onClick={saveChanges }
          >
            сохранить изменения
         </MyButton>

        <MyButton 
            onClick={()=>setVisible(false) }
          >
            спрятать записи
         </MyButton>
      </div>


        );
    };

export default Notes ;