import './style.css'

const Input = ({id, label, type, placeholder, register, rules, name, value, onChange, icon}) => {

  return (
    <div className="input-field">
      {icon && <i>{icon}</i>}
      <label htmlFor={id} className="sr-only">{label}</label>
      <input id={id} type={type || 'text'} value={value} onChange={onChange}
            placeholder={rules?.required ? `*${placeholder}` : placeholder}
            autoComplete="off" name={name} {...register(name, rules)} />
    </div>
  )
}

export default Input