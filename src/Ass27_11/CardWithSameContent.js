import '../Ass27_11/CardWithSameContent.css'
import Maharaj from '../Assets/maharaj.jpg'

function CardSameContent(){
    // function Head(){
    //     return(
    //         <>
    //         <h1>Card with Same Content</h1></>
    //     )
    // }
    return(
       
        <>
        
       
        

       <div  className='Content'>
        <h2>This is Card</h2>
         <img src={Maharaj}  height={300}  width={300}></img>
         <br/>

        <button> <a  href='https://www.youtube.com/watch?v=SRhuXVuhpT0'> Click Here</a></button>
         <pre>
            "प्रतिपच्चन्द्रलेखेव वर्धिष्णुर्विश्ववन्दिता ।
            <br/>
              शाहसूनोः शिवस्यैषा मुद्रा भद्राय राजते ।।"
         </pre>
         </div>
         


        </>
    )
}


export default CardSameContent