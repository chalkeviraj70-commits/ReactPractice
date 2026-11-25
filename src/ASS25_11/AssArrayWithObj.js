import './ArraywithObj.css'
import Mbharat from '../Assets/mahabharat.jpg'
import Shivray from '../Assets/maharaj.jpg'
import ShambhuRaje from '../Assets/DhakaleDhani.jpg'

function ArraywithObj(){
     let img1 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI17fwtJxGSPZRGY1fOk3oEc4AXMPC-jeNO60jHhYLEg&s=10"
       let Ramayan ="https://in.bookmyshow.com/movies/mumbai/ramayana/ET00451914"
       let Mahabharat="https://www.prabhatbooks.com/mahabharat-book-on-ancient-indian-stories-about-pandavas-and-kauravas-kurukshetra-war-greatest-epic-of-india-book-in-hindi.htm"
       let Shivpuran="https://www.hotstar.com/in/movies/ranapati-shivray-swari-agra/1271704677/watch"
       let Chava ="https://www.imdb.com/title/tt27922706/"
    let arr=[
   {id:1,uname:"Ramayana",photo:<img src={img1}  height={80}  width={80}/>,visitehere: <a href={Ramayan}>Ramayan</a>},
   {id:1,uname:"Mahabharat", photo:<img src={Mbharat}   height={80}  width={80} />,visitehere: <a href={Mahabharat}>Mahabharat</a> },
   {id:1,uname:"Shivpuran",photo:<img src={Shivray}    height={80}  width={80}/> ,visitehere: <a href={Shivpuran}>Shivpuran</a>},
   {id:1,uname:"Swarajya_Rakshak",photo:<img src={ShambhuRaje}   height={80}  width={80} /> ,visitehere: <a href={Chava}>Chava</a>}
    ]

    return(
        <>
          {
       arr.map((val) => (
        <div className="content">
        <p>id is {val.id}</p>
        <p>name is {val.uname}</p>
      
        <p> {val.photo}</p>
        <p> check this {val.visitehere}</p>
        </div>

       )
       )
    }
        
        </>
    )
}

export default ArraywithObj