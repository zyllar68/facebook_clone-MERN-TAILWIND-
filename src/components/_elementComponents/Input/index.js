import { InputStyle } from './style';

const Input = ({
  placeholder,
  borderGray,
  type
}) => {
  return (
    <InputStyle
      type={type}
      borderGray={borderGray}
      placeholder={placeholder}
    />
  )
}

export default Input;