const Card = (props) => {
  return (
    <div className='card'>
      <img
        src={require(`../assets/icon-${props.img}.svg`)}
        alt={`${props.img} icon`}
        className='card-img' />
      
      <h1 className='card-title'>{props.title}</h1>
      <p className='card-text'>{props.text}</p>
      <a href='https://github.com/ngonzalia' target='_blank' className='card-link'>Get Started</a>
    </div>
  )
}

export default Card;