import { H2Style } from './style';

const Text = ({
  h2,
  children
}) => {
  return (
    <>
      {h2 && <H2Style>{children}</H2Style>}
    </>
  )
}

export default Text
