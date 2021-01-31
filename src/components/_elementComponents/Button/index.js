import { ButtonStyle } from './style';

const Button = ({
  title,
  fbBlue,
  color,
  fontWeight,
  bgColor,
  w_full
}) => {
  return (
    <ButtonStyle
      fontWeight={fontWeight}
      color={color}
      fbBlue={fbBlue}
      bgColor={bgColor}
      w_full={w_full}>
      {title}
    </ButtonStyle>
  )
}

export default Button;
