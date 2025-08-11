const name="vrajesh"
const  Greet1=()=>{
    return <h1>Hello</h1>
}
// const  Greet2=()=>{
//     return <h1>good morning</h1>
// }
function Greet2(){
    return(
        <>
        <h1>hello good morning</h1>
        </>
    )
}
export default function Greet(){
    return(
        <>
        <h1>Hello vrajesh</h1>
        </>
    )
}
// export default function Greet3(){
//     return(
//         <>
//         <h1>Hello vrajesh</h1>
//         </>
//     )
// }



// export default function Greet2(){
//     return(
//         <h2>Hello 22</h2>
//     )

// }
export  {Greet1,Greet2,name}
