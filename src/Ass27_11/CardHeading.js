import '../Ass27_11/CardHeading.css'
import Logo from '../Ass27_11/Chhatrapati Warrior Emblem.png'

function Heading(){
    return(
        <>
        <div>
        <div className="Navbar">
            <img src={Logo} id='logo'></img>
            <div className='Nav'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>History</li>
                    <li>Contact</li>
                </ul>

            </div>
            {/* <div className='Visit'></div> */}
        
        </div>
        </div>
         <div className='Head'>
        <h1>Card with Same Content</h1>
       </div>
        </>
    )
}
export default Heading