import Logo from '../assets/logo-light.svg';
import Button from './Buttons'

const Footer = () => {
  return (
    <footer className='footer'>
      <img
        src={Logo}
        alt='Logo'
        className='footer-logo'
      />

      <Button type='footer' />
    </footer>
  )
}

export default Footer;