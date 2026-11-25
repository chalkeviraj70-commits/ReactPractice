function  Calc(){
    let a=10
    let b=12
  function add(){
    return a+b
  }
  function sub(){
    return a-b
  }
function multy(){
    return a*b
}
function div(){
    return a/b
}

    return(
        <>
        <h1>Addition is: {add()}</h1>
        <h1>Addition is: {sub()}</h1>
        <h1>Addition is: {multy()}</h1>
        <h1>Addition is: {div()}</h1>
        </>
    )
}


export default Calc


