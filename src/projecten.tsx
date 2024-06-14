import {FunctionComponent} from 'react'
import icon_github from "./images/icon_github.png"
import styled from 'styled-components'

const ContainerHalf = styled.div`
    width: 50%;
    float: left;
    margin-top: 70px;
    padding-left: 10px;
    margin-bottom: 150px;

    @media (max-width: 600px) {
        width: 100%;
        margin-top: 10px;
        padding-left: 10px;
        margin-bottom: 60px;
      }
`

const Projecten: FunctionComponent = () => {
    return (
        <div className='container'>
        <h1>Voorgaande projecten</h1>
        <ContainerHalf>
        <h2>Websites</h2>
        <ul>
            <li><a href="https://tirdo.be/" target='_blank' className='link'>Tirdo</a></li>
        </ul>
        </ContainerHalf>
        <ContainerHalf>
        <h2>Github</h2>
        <p>Hieronder vind u een link naar mijn GitHub. Hier zijn nog enkele projecten terug te vinden die gemaakt zijn tijdens de opleiding "programmeren in avondschool".</p>
        <p><a href="https://github.com/Lender97?tab=repositories" target='_blank'><img src={icon_github} id='iconGithub' /></a></p>
        </ContainerHalf>
        </div>
    )
}
export default Projecten