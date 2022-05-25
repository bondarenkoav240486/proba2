
// IMPORTS.................................................................
  import React, {useMemo, useEffect, useState,useRef} from 'react';
// import {useHistory} from 'react-router-dom';
import MyButton from "./UI/button/MyButton";
// import PostItem from "./PostItem";
import ComponentDate from './ComponentDate.js';


// .......................................................................
const Calendar = ({allNotes,setAllNotes,setVisible,setPosts}) => {
// console.log(posts)
let date  = new Date();

let initYear  = date.getFullYear();
// console.log( date.getDate())

const[year,setYear] = useState(initYear);

let initMonth = date.getMonth();
const[month,setMonth] = useState(initMonth);

let initDates = draw(year,month)
const[dates,setDates] = useState(initDates);
// console.log(dates,month);

// arr of dates
function range(count) {
 let arr = [];
 for(let i = 1;i<=count;i++){
  arr.push(i)
}
return arr
}

// функция для получения последнего дня месяца 
function getLastDay(year, month) {
 return new Date(year,month+1,0).getDate()
}

// получение первого дня первой недели месяца
function getFirstWeekDay(year, month) {
 let date = new Date(year, month, 1);
 let num  = date.getDay();
 if (num == 0) {
  return 6;
} else {
  return num - 1;
}
}

 //  получение последнего дня последней недели месяца
 function getLastWeekDay(year, month) {
    let date = new Date(year, month + 1, 0);
    let num  = date.getDay(); 

    if (num == 0) {
     return 6;
  } else {
     return num - 1;
  }
}

//   ф-ция для нормализации массива(добавление пустых строк по краям)
function normalize(arr, left, right) {
 for(let i = 0;i< left;i++){
    arr.unshift('')
 }
 for(let i = 0;i< right;i++){
    arr.push('')
 }
 return arr
}

//  ф-ция для формирования двумерного массива
function chunk(arr, n) {
  // n - количество элементов в подмассиве
  let amountWeeks = arr.length/n
  // console.log(amountWeeks);
  let arr2 = [];
  for(let i = 0;i<amountWeeks;i++ ){
     arr2.push(arr.splice(0,n));
    // arr2[i] = arr.splice(0,n);
 }
 return arr2
}



// ....
function getNextYear(){
 if (month == 11) {
  let copyYear = year+1;
  setYear(copyYear);

  return copyYear
}

let copyYear = year;
setYear(copyYear);

return copyYear
}
// ....
    // console.log(month)
    function getNextMonth(){
    // console.log(month)
    if(month==11){
     let copyMonth = 0;
     setMonth(copyMonth);

     return copyMonth
  }
  else{
     let copyMonth = month+1;
     setMonth(copyMonth);
    // console.log(month,copyMonth);

    return  copyMonth
 }
}
// ....
function getPrevYear(){
 if (month == 0) {
  let copyYear = year-1;
  setYear(copyYear);

  return copyYear
}
let copyYear = year;
setYear(copyYear);

return copyYear
}
// ....
function getPrevMonth(){
  console.log(month)
  if(month==0){
     let copyMonth = 11;
     setMonth(copyMonth)

     return copyMonth
  }
  else{
   let copyMonth = month-1;
   setMonth(copyMonth);
   console.log(month,copyMonth);

   return copyMonth 
}
}

function draw( year, month) {
 let arr = range(getLastDay(year, month));

 let firstWeekDay = getFirstWeekDay(year, month);
 let lastWeekDay  = getLastWeekDay(year, month);

 let datesBuffer = chunk(normalize(arr, firstWeekDay, 
  6 - lastWeekDay), 7); 


 return datesBuffer
}


function next() {
   const nextMonth = getNextMonth();
   let nextDates = [...draw(getNextYear(), nextMonth )]
   setDates(nextDates);
}

function prev() {
  let prevtDates = [...draw(getPrevYear(), getPrevMonth() )]
  console.log(prevtDates,month)
  setDates(prevtDates);
}



function createInfoMonth(month){
  let  monthes = [
  'Январь','Февраль','Март','Апрель', 
  'Май','Июнь','Июль','Август',
  'Сентябрь','Октябрь','Ноябрь','Декабрь'
  ];
 return monthes[month]
} 

function organize(event) {

   setVisible(true);
   
//  
if( event.target.textContent == ''){
 return 
}
else{
}  
// 
let id = year + '.' + month + '.' + event.target.textContent;
let obj ={};
// 
if( allNotes.find(elem=>elem.id==id)==undefined ){
  obj = {
   id:id,
   notes:[
   // {id:'1', title:id, body:''},
   // {id:'11', title:'', body:''},
   // {id:'111', title:'', body:''},
   ]
}
allNotes.push(obj);
}
else{
}
// 
console.log( allNotes );
// console.log(allNotes.find(elem=>elem.id==id))
allNotes[0].dateId = allNotes.find(elem=>elem.id==id).id
// 
setPosts(  [...allNotes.find(elem=>elem.id==id).notes]  )
// 
setAllNotes([...allNotes ])
// 
}



    return (

   <div id="calendar">
      <h1 className='info'>{year}  {createInfoMonth(month)}</h1>
    
       <table>
         <thead>
              <tr>
                <th>пн</th>
                <th>вт</th>
                <th>ср</th>
                <th>чт</th>
                <th>пт</th>
                <th>сб</th>
                <th>вс</th>
              </tr>
          </thead>
          <tbody>
            {dates.map((week, index) =>
               <tr key={index}>
                  {week.map((date, index) =>
                    
                     <ComponentDate 
                     key={index}
                      organize = {organize}
                      // setShowNotesDate = {setShowNotesDate}
                      allNotes={allNotes}
                      setAllNotes={setAllNotes}

                     >
                     {date}
                     </ComponentDate>
                   
                  )} 

               </tr>
        
            )}

        </tbody>
      </table>


       <div className="nav">
        <MyButton 
            onClick={prev }
          >
           ←  
          </MyButton>
         <MyButton 
            onClick={next }
          >
          →
          </MyButton>
      </div>
      </div>





        );
    };

export default Calendar ;