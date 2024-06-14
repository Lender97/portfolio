import {FunctionComponent} from 'react'
import styled from 'styled-components'

const ContainerHalf = styled.div`
    width: 50%;
    float: left;
    margin-top: 70px;

    @media (max-width: 600px) {
        width: 100%;
        margin-top: 10px;
      }
`


const Intro: FunctionComponent = () => {
    return (
        <ContainerHalf>
        <h1>Welkom in mijn portfolio.</h1>
        <p>
            Hallo, Ik ben Lender. Een ambitieuse jonge man met een passie voor IT. Van jongs af aan heb ik een sterke interesse in de digitale wereld en de talloze mogelijkheden die deze biedt. Mijn liefde voor technologie heeft mij geleid tot het ontwikkelen van een uitgebreide set aan vaardigheden in diverse programmeertalen en frameworks.
        </p>
        </ContainerHalf>
    )
}
export default Intro