function Student(){
    const stu=[
        {id:1,name:"vrajesh", dept:"ce"},
        {id:2,name:"vibhu", dept:"ce"},
        {id:3,name:"shaym", dept:"ce"},
        {id:4,name:"keldeep", dept:"ce"},
        {id:5,name:"kush", dept:"ce"}
    ]
    return(
        <>
        {
            stu.map((st)=>{
                return(
                <tr>
                    <td>{st.id}</td>
                    <td>{st.name}</td>
                    <td>{st.dept}</td>
                </tr>
                )
            })
        }
        </>
    )
}
export {Student}