import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import {Greet2,Greet1,name} from './components/greet'
import Greet from './components/greet'
// import Greet3 from './components/greet'
class Xyz extends React.Component {
  render() {
    return <h1>Hello Vrajesh</h1>
  }
}
function Abc() {
  return <h1>Hello with function Component</h1>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* lab8 */}
    {/* <Xyz />
    <Abc />
     */}
     {/* lab 9 */}
      <Greet1/>
      <Greet2/>
      <Greet/>
      <h1>{name}</h1>


  </StrictMode>
)
