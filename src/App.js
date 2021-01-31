import { Global } from '@emotion/react';
import { GlobalStyle } from './globalStyle';
import { Login, Home } from './pages';

function App() {
  return (
    <>
      <Global styles={GlobalStyle}/>
      <Login />
    </>
  );
}
export default App;