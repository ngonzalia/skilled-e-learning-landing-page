const Button = (props) => {
  return (
    <button className={`btn btn-${props.type} btn-text`}>
      <span className={ props.type === 'hero' ? 'btn-text-sm' : '' }>
        Get Started
      </span>
    </button>
  )
}

export default Button;