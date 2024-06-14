import {FunctionComponent} from 'react'


const NavBar: FunctionComponent = () => {

  function showSidebar(){
    const sidebar = document.querySelector('.sidebar')!;
    sidebar.className = "sidebar flex";
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')!;
    sidebar.className += "sidebar hide";
  }

    return (
        <header>
         <nav>
          <ul className='sidebar'>
                    <li onClick={hideSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" className='hamburgerIcon' height="26" viewBox="0 96 960 960" width="26"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg></a></li>
                    <li><a href={'/'}>Home</a></li>
                    <li><a href={'/mijnVerhaal'}>Mijn verhaal</a></li>
                    <li><a href={'/projecten'}>Projecten</a></li>
                    <li><a href={'/contact'}>Contact</a></li>
          </ul>
          <ul>
                    <li className='hideOnMobile'><a href={'/'}>Home</a></li>
                    <li className='hideOnMobile'><a href={'/mijnVerhaal'}>Mijn verhaal</a></li>
                    <li className='hideOnMobile'><a href={'/projecten'}>Projecten</a></li>
                    <li className='hideOnMobile'><a href={'/contact'}>Contact</a></li>
                    <li className='menu-button' onClick={showSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" className='hamburgerIcon' height="26" viewBox="0 96 960 960" width="26"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg></a></li>
          </ul>
        </nav>
        </header>
    )
}
export default NavBar