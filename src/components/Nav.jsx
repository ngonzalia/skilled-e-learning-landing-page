// logo
import Logo from '../assets/logo-dark.svg'

// Button
import Button from './Buttons';

const Nav = () => {
  return (
    <nav className='nav'>
      <img
        src={Logo}
        alt='Logo'
        className='nav-logo'
      />

      <Button type='nav' />
    </nav>
  )
}

export default Nav;