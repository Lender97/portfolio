import {FunctionComponent} from 'react'
import Intro from './intro'
import lender from "./images/Lender.webp"


const Home: FunctionComponent = () => {
    return (
        <div className='container'>
        <Intro />
        <div id='divFotoHome'>
        <img src={lender} alt="Foto van Lender" id='fotoHome'/>
        </div>
        </div>
    )
}
export default Home