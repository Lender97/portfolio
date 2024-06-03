import styled from 'styled-components'
import {FunctionComponent} from 'react'

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 100px;
  min-height: 130px;
`

const NavUL = styled.ul`
  list-style: none;
  padding: 20px;
  margin-top: 20px;
`

const NavLi = styled.li`
  display: inline-block;
  cursor: pointer;
  box-sizing: border-box;
  border: 2px solid transparent;
  margin-left: 10px;
  padding: 3px;

  &:hover {
    border: 2px solid #1d778a;
    border-radius: 0.25em;
  }
`

const NavBar: FunctionComponent = () => {

    return (
        <header>
         <NavContainer>
                <NavUL>
                    <NavLi><a href={'/'}>Home</a></NavLi>
                    <NavLi><a href={'/mijnVerhaal'}>Mijn verhaal</a></NavLi>
                    <NavLi><a href={'/projecten'}>Projecten</a></NavLi>
                    <NavLi><a href={'/contact'}>Contact</a></NavLi>
                    <NavLi><a href={'/pageNotFound'}>404</a></NavLi>
                </NavUL>
        </NavContainer>
        </header>
    )
}
export default NavBar