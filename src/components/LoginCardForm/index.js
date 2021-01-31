import { Card, Form, FormRow, ForgotPassword, HorizontalLine, FooterButton,
  CreatePage } from './style';
import { Input, Button } from 'components/_elementComponents';

const LoginCardForm = () => {
  return (
    <Card>
  
      <Form>
        
        <FormRow>
          <Input 
            borderGray
            placeholder='Email or Phone Number'
          />
        </FormRow>

        <FormRow>
          <Input 
            borderGray
            placeholder='Password'
            type='password'
          />
        </FormRow>

        <FormRow>
          <Button
            w_full
            fbBlue
            color='white'
            fontWeight='bold' 
            title='Log In'
          />
        </FormRow>

        <FormRow
          textCenter>
          <ForgotPassword
            href="#">
            Forgot Password?
          </ForgotPassword>
        </FormRow>

      </Form>
      
      <HorizontalLine />

      <FooterButton>
        <Button
          title='Create New Account' 
          bgColor='#42b72a'
        />
      </FooterButton>

    </Card>
  )
}

export default LoginCardForm
