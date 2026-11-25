function ArraywithMap(){
    let StudArray=[1,"viraj","Dombivali"]
    return (

        <>
        
        {StudArray.map((val , index ) =>{
            return (
            <div key={index}>
            <p>id{val}</p>
            {/* <p>id{ArraywithMap[1]}</p>
            <p>id{ArraywithMap[2]}</p> */}
            {/* <p>id{ArraywithMap[3]}</p> */}



            </div>
            )
        }
        )}
        
        </>
    )
}

export default ArraywithMap