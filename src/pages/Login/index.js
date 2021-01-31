/** @jsxImportSource @emotion/react */
import * as LoginStyle from './style';
import { Text, Input, Button } from 'components/_elementComponents';
import { LoginCardForm, RegisterForm } from 'components'

const Login = () => {
  return (
    <>
      <LoginStyle.Hero>
        <LoginStyle.Wrapper>    
          <LoginStyle.LeftContent>
            <LoginStyle.ImageWrapper>
              <LoginStyle.Image src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' alt='' />
              <Text h2>Connect with friends and the world around you on Facebook.</Text>
            </LoginStyle.ImageWrapper>
          </LoginStyle.LeftContent>
        
          <LoginStyle.RightContent>
            <LoginStyle.CardWrapper>

              <LoginCardForm />

              <LoginStyle.CreatePage>
                <span>Create a Page</span> for a celebrity, band or business.
              </LoginStyle.CreatePage>

            </LoginStyle.CardWrapper>
          </LoginStyle.RightContent>

        </LoginStyle.Wrapper>
      </LoginStyle.Hero>
      <LoginStyle.Modal>
        <RegisterForm />
      </LoginStyle.Modal>
    </>
  )
}

export default Login;
