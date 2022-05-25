import React, {useEffect, useState,useRef} from 'react';


const ComponentDate = ({children,index,organize,setShowNotesDate,allNotes,setAllNotes}) => {

  // const [post, setPost] = useState({title:'',body:''});
   console.log();



 

  return (
  	<td key={index}
  	onClick = {organize}
  	>
  	{children}
  	</td> 

  	);
  };

export default ComponentDate;