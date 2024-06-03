import { FunctionComponent } from 'react'
import {Route, Routes} from 'react-router-dom'
import MijnVerhaal from './mijnVerhaal'
import Projecten from './projecten'
import Contact from './contact'
import Home from './home'
import PageNotFound from './pageNotFound'

const Routing: FunctionComponent = () => {
    return (
        <Routes>
            <Route path={'/mijnVerhaal'} element={<MijnVerhaal />} />
            <Route path={'/projecten'} element={<Projecten />} />
            <Route path={'/contact'} element={<Contact />} />
            <Route path={'/'} element={<Home />} />
            <Route path={'/pageNotFound'} element={<PageNotFound />} />
        </Routes>
    )
}

export default Routing