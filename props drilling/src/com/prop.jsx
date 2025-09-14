function A(){
    const name="vrajesh";
    return(
      <div style={{border : "2px solid blue" , padding :"90px"}}> <B name={name}/></div>
    )
}
function B(props){
    const age=18;
    return(
         <div style={{border : "2px solid red" , padding :"80px"}}><C name={props.name} age={age}/></div>
    )
}
function C(props){
    const secname="faldu";
    return(
        <div style={{border : "2px solid pink" , padding :"60px"}}><D name={props.name} age={props.age} secname={secname}/></div>
    )

}
function D(props){
    const branch="CSE";
    return(
        <div style={{border : "2px solid black" , padding :"40px"}}><E name={props.name} age={props.age} secname={props.secname} branch={branch}/></div>
    )

}
function E(props){
    const rollno=173;
     return(
        <div style={{border : "2px solid blue" , padding :"20px"}}>Name:{props.name}<br/> age:{props.age} secname:{props.secname} branch:{props.branch} rollno:{rollno}</div>
    )
    

}
export {A};