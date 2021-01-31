import styled from '@emotion/styled';
import tw from "twin.macro";




export const ButtonStyle = styled.button`
  ${tw`
    p-2
    rounded
  `}
  ${props => props.w_full  && `width: 100% !important;`}
  ${props => props.bgColor && `background-color: ${props.bgColor}; color: white; font-weight: bold;`}
  ${props => props.color ? `color: ${props.color};` : `${tw`text-black`}`}
  ${props => props.fbBlue && `background-color: #1877f2;`}
  ${props => props.fontWeight  && `font-weight: ${props.fontWeight};`}
  
  &:active{
    outline: none;
  }

  &:focus{
    outline: none;
  }
`