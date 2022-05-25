
  import React, {useMemo, useEffect, useState,useRef} from 'react';

// POSTS.........................................................................
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton.js';
import MyInput from './components/UI/input/MyInput.js';
import MySelect from './components/UI/select/MySelect.js';
// import MyModal from './components/UI/MyModal/MyModal.js';
import './styles/App.css';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter.js';

// ORGANIZER.......................................................................
import ComponentDate from './components/ComponentDate.js';
import Calendar from './components/Calendar.js';
import Notes from './components/Notes.js';



function App() {

// POSTS.........................................................................
const [visible, setVisible] = useState(false);


// ORGANIZER.......................................................................
let initNotesAll = [
{
   id:'',
   notes:[
   // {id:'1', title:'1', body:''},
   // {id:'11', title:'1', body:''},
   // {id:'111', title:'1', body:''},
   ],
   dateId:'',
},
{
   id:'',
   notes:[
   {id:'2', title:'', body:''},
   {id:'22', title:'', body:''},
   {id:'222', title:'', body:''},
   ],
},
];

// ........................................................................
if (JSON.parse( localStorage.getItem('key2') )===null) {
   localStorage.setItem('key2',JSON.stringify(initNotesAll));
   console.log(initNotesAll);
}
else{
  initNotesAll = JSON.parse( localStorage.getItem('key2') );
  console.log(initNotesAll);
}
const [allNotes, setAllNotes] = useState(initNotesAll);

// POSTS
const [posts, setPosts] = useState(

   allNotes[0].notes
   )




return (

   <div className='App' >
         
         <div className='organizer' >
   
            <Calendar
                  allNotes={allNotes}
                  setAllNotes={setAllNotes}
                                 setVisible={setVisible}
                  setPosts={setPosts}
            />

            {
               visible
               ?
               <Notes  
                    posts={posts}
                    setPosts={setPosts}
                    allNotes={allNotes}
                    setAllNotes={setAllNotes}
                    initNotesAll={initNotesAll}
                    setVisible={setVisible}
                   
               />
               :
               <></>
            }
         </div>
   </div>
  );
}

export default App;
