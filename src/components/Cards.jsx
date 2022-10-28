// cards
import Card from './Card';

const Cards = () => {
  return (
    <section className='cards'>

      <div className='cards-container'>
        <div className='cards-subtitle'>
          <h2 className='subtitle'>
            Check out our most popular courses!
          </h2>
        </div>

        <Card
          img='animation'
          title='Animation'
          text='Learn the latest animation techniques to create stunning motion design and captivate your audience.'
        />
        <Card
          img='design'
          title='Design'
          text='Create beautiful, usable interfaces to help shape the future of how the web looks.'
        />
        <Card
          img='photography'
          title='Photography'
          text='Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.'
        />
        <Card
          img='crypto'
          title='Crypto'
          text='All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.'
        />
        <Card 
          img='business'
          title='Business'
          text='A step-by-step playbook to help you start, scale, and sustain your business without outside investment.'
        />
      </div>
    </section>
  )
}

export default Cards;