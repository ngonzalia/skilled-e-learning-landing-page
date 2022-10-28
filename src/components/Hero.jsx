import image from '../assets/image-hero-mobile.webp'

// button
import Button from './Buttons';

const Hero = () => {
  return (
    <section className='main'>
      <h1 className='main-title'>
        Maximize skill, minimize budget
      </h1>
      <p className='main-text'>
      Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.
      </p>
      <Button type='hero' />

      <div className='main-img-container'>
        <img
          src={image}
          alt='Stats'
          className='hero-img'
        />
      </div>
    </section>
  )
}

export default Hero;