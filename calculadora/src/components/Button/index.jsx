import { ButtonWrapper } from "./styles"

const Button = ({ label, event }) => {
  return <ButtonWrapper onClick={event}>{label}</ButtonWrapper>
}

export default Button