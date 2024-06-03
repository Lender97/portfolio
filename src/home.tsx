import {FunctionComponent} from 'react'
import Intro from './intro'
import lender from "./images/Lender.webp"


const Home: FunctionComponent = () => {
    return (
        <>
        <Intro />
        <div id='divFotoHome'>
        <img src={lender} alt="Foto van Lender" id='fotoHome'/>
        </div>
        </>
    )
}
export default Home