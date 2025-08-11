// function Abs(props){
//     return(
//         <>
//         <h1>hello{props.name}</h1>
//         <h1>hello{props.age}</h1>
//         </>
//     )
// }
// // export {Abs};
// function Xyz({name,age}){
//     return(
//         <>
//         <h1>hello{name}</h1>
//         <h1>hello{age}</h1>
//         </>
//     )
// }
// export {Abs,Xyz};

 function GrandParent(props){
        
        return(
            <>
            <Parent name = {props.name}  age = {props.age} />
            </>
        )
    }

    function Parent(props){
        
        return(
            <>
            <Child name = {props.name}  age = {props.age} />
            </>
        )
    }

    function Child(props){

        return(
            <>
            <h1>heyyy {props.name}</h1>
            <h2>heyyy {props.age}</h2>
            </>
        )
    }
    export {GrandParent};

