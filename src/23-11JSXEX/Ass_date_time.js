function DateTime(){
       
    let a= new Date()
//    let b= a.toDateString
    
    return(

        <>

       <h1>Date and Time print</h1>
       <h1> Current Date and Time -  {a.toLocaleString()}</h1>
       <h1> current Date- {a.toDateString()}</h1>
       <h1>current Time- {a.toLocaleTimeString()}</h1>
       <h1>current Date (without Day): {a.toLocaleDateString()}</h1> 
        

        </>
    )
}

export default DateTime