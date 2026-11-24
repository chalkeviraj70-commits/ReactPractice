function Obj(){

    let obj1={
        id:1,
        fname:"viraj",
        lname:"chalke",
        city:"Dombivali"

    }
    return(
        <>
        <h1>hii</h1>
        <p>this is object </p>
        <p> ID is: {obj1.id}</p>
        <p>First Name {obj1.fname}</p>
        <p>Last Name: {obj1.lname}</p>
        <p>CIty is: {obj1.city}</p>
        </>
    )
}


export default Obj