import {FunctionComponent} from 'react'
import { Navigate } from 'react-router-dom'
import useCountdown from './utility/useCountdown'

const PageNotFound: FunctionComponent = () => {

    const countdown = useCountdown(5);   

    if (countdown === 0) {
        return <Navigate to={'/'}/>
    }
    
    return (
        <>
        <p>
            U wordt binnen {countdown} seconden terug naar de homepagina gestuurd.
        </p>
        </>
    )
}
export default PageNotFound