function Express(){

    let fname="viraj"
    let lname="chalke"

    function add(){
        let a=10
        let b=10
        return(
            <>
           <h1>result is {a+b}</h1> 
            </>
        )
    }

    let list1=
    <ul>
        <li>hello li</li>
        <li>hello li</li>
    </ul>
    return(
        <>
        <h1>My name is {fname} {lname}</h1>
        <p>{5+5}</p>
        <p>result {add()}</p>
        <p>{list1}</p>
        </>
    )
}
export default Express