import styled from '@emotion/styled';
import tw from "twin.macro";

export const InputStyle = styled.input`
  ${tw`
    p-2
    border
    rounded
    w-full
  `}
  ${props => props.borderGray && `${tw`border-gray-300`}`}

  &:active{
    ${tw`
      border
    `}
    outline: none;
    border-color: #4267b2;
  }

  &:focus{
    ${tw`
      border
    `}
    outline: none;
    border-color: #4267b2;
  }

`

