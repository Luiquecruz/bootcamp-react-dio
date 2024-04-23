import './style.css'

const Button = ({label, variant, type}) => {
  return <button type={type || 'submit'} className={`btn ${variant || 'primary'}`}>{label || 'Button'}</button>
}

export default Button