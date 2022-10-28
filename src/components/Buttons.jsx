const Button = (props) => {
  return (
    <button className={`btn btn-${props.type}`}>
      <a href='https://github.com/ngonzalia' target='_blank' className={ props.type === 'hero' ? 'btn-text btn-text-sm' : 'btn-text' }>
        Get Started
      </a>
    </button>
  )
}

export default Button;