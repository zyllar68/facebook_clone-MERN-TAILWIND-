import styled from '@emotion/styled';
import tw from "twin.macro";

export const Card = styled.div`
  ${tw`
    bg-white
    pt-4
    pl-4
    pr-4
    pb-6
    rounded-lg
    shadow-md
  `}
`

export const Form = styled.form``

export const FormRow = styled.div`
  ${props => props.textCenter && `text-align: center;`}
  ${tw`
    pt-2.5
    pb-2.5
  `}

  &:hover{
    ${tw`
      underline
    `}
  }

`
export const ForgotPassword = styled.a`
  color: #1877f2;
`

export const HorizontalLine = styled.div`
  ${tw`
    flex
    items-center
    my-5
    mx-4
    text-center
    border-b
  `}
  border-color: #dadde1;
`

export const FooterButton = styled.div`
  ${tw`
    flex
    justify-center
  `}
`