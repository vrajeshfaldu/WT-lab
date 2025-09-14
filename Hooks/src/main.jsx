import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'

// lab 13
function Hooks(){
  const[count,setCount]=useState(0);
  const[isvisible,setVisible]=useState(true);
    // useEffect(()=>{
    //   console.log("this method calling every time");

    // })
  //  useEffect(()=>{
  //   console.log("this method render one time");

  // },[])
  // useEffect(()=>{
  //    console.log("this method render with one  dependency count");


  // },[count])
  // useEffect(()=>{
  //   console.log("this method render with two  dependency count or isvisible");

  // },[count,isvisible])

  //settimeout delay mate chhe
 const [sec,setSec]=useState(0);
  useEffect(()=>{ //sec uper depend chhe to etli sec na delay pchhi usseffect render thase  
    setTimeout(()=>{
      setSec(sec+1);
      console.log("sec :"+sec);

    },3000)
  },[sec])

  return(
    <>

     <h1>count:{count}</h1>
     <button onClick={()=>setCount(count+1) } className='btn btn-outline-success'>Increase</button>

     <button onClick={()=>setCount(count-1) } className='btn btn-outline-success '>Decrease</button>
    <br/>
    <br/>
     <button onClick={()=>{setVisible(!isvisible)}} className='btn btn-outline-primary'>
      {isvisible?"Hide":"show"}
     </button>
     <br/>
     <br/>  


     {isvisible && <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi ut non ex magni reprehenderit veritatis. Beatae quidem recusandae mollitia sit, similique reprehenderit possimus expedita quas reiciendis repudiandae, nam, cupiditate laudantium?</p>}
    </>

  )
}
createRoot(document.getElementById('root')).render(
  <>
    <Hooks/>
  </>,
)
