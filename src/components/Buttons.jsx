const Button = (props) => {
  return (
    <a href='https://github.com/ngonzalia' target='_blank' className={`btn btn-${props.type} btn-text`}>
      <span className={ props.type === 'hero' ? 'btn-text-sm' : '' }>
        Get Started
      </span>
    </a>
  )
}

export default Button;