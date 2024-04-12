const Button = (props) => {
  const { title } = props

  const styles = {
    padding: '12px 24px',
    backgroundColor: '#ee44dd',
    color: '#fdfdfd',
    borderRadius: '6px',
    border: 'none',
    fontSize: '18px'
  }

  return <button style={{...styles}}>{title}</button>
}
export default Button