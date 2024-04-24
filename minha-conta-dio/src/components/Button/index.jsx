import './style.css'

const Button = ({label, variant, type, onClick}) => {
  return (
    <button type={type || 'submit'} className={`btn ${variant || 'primary'}`} onClick={onClick}>
      {label || 'Button'}
    </button>
  )
}

export default Button