import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'
// import { Abs , Xyz} from './componats/props.jsx'
// import { GrandParent} from './componats/props.jsx'

function event(){
  alert("hello");
}

function Show({isshow}){
  if(isshow){
    return(
      <>
      <h1> show</h1>
      </>
    )
  }
  else{
    return(
      <>
      <h1>not show</h1>
      </>
    )
  }

}

function Dis({isshow2}){
  return(
    <>
    {isshow2 && <h1>Show</h1>}
   {!isshow2 && <h1>Not Show</h1>}
    </>
  )

}

// lab 10
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Abs name="vrajesh" age={18}/>
    <Xyz name="vibhu" age={20}/> */}
    {/* <GrandParent/>
    <button onClick={()=>{
      alert("hello vrajesh");

    }}> click</button>
    <button onClick={event}>click 2</button> */}

    <Show isshow={true}/>
    <Dis isshow2={false}/>
  </StrictMode>
)
