import './style.css'

const Input = ({id, label, type, placeholder, value, onChange, required, icon}) => {
  return (
    <div className="input-field">
      {icon && <i>{icon}</i>}
      <label htmlFor={id} className="sr-only">{label}</label>
      <input id={id} type={type || 'text'} value={value} required={required}
            placeholder={required ? `*${placeholder}` : placeholder || 'Placeholder'}
            autoComplete="off" onChange={onChange} />
    </div>
  )
}

export default Input