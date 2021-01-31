import styled from '@emotion/styled';
import tw from "twin.macro";

export const Hero = styled.div`
  ${tw`
    w-full
    pt-16
    pb-16
  `}
  background-color: #f0f2f5;
  height: 57vh;
`

export const Wrapper = styled.div`
  ${tw`
    py-5
    grid grid-cols-2
    mx-auto
  `}
  width: 980px;
`

export const LeftContent = styled.div`
  ${tw`
    pr-8
  `}
  width: 580px;
`

export const RightContent = styled.div`
  ${tw`
    inline-block
    ml-20
  `}
`

export const ImageWrapper = styled.div`
  ${tw`
    inline-block
  `}
  padding: 112px 0 16px;
`

export const Image = styled.img`
  ${tw`
    flex
    items-start
    h-24
  `}
  margin-left: -22px;
`

export const CardWrapper = styled.div`
  height: 456px;
  width: 396px;
  padding: 20px 0 28px;
  margin: 40px 0 0;
`

export const CreatePage = styled.p`
  ${tw`
    text-center
    p-5
  `}

  span{
    ${tw`
      font-bold
    `}
  }
`

export const Modal = styled.div`
  ${tw`
    fixed
    z-10 
    inset-0 
    overflow-y-auto 
  `}
`


