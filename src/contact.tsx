import {FunctionComponent} from 'react'
import Form from './form'
import vragen from './images/vragen.webp'


const Contact: FunctionComponent = () => {
    return (
        <div className='container'>
        <h1>Wenst u contact met mij op te nemen?</h1>
        <p>Ik ben benieuwd naar wat u mij wil vragen! Twijfel niet en stuur mij een bericht voor meer info!</p>
        <div className='flex-container justify-content-around mt-5'>
        <Form/>
        <img src={vragen} alt='foto met vraagtekens' id='imgVragen' className='flex-right'/>
        </div>
        </div>
    )
}
export default Contact