import './style.css'

const Button = ({label, variant, type, className, iconLeft, iconRight, onClick}) => {
  return (
    <button type={type || 'submit'} className={`btn ${variant || 'primary'} ${className}`} onClick={onClick}>
      {iconLeft && <i>{iconLeft}</i>}
      {label || 'Button'}
      {iconRight && <i>{iconRight}</i>}
    </button>
  )
}

export default Button