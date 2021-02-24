import '../styles/global.css';

import { ProvedorDesafio } from '../contexts/ContextoDesafio';

function MyApp({ Component, pageProps }) {  

  return (
    <ProvedorDesafio>
      <Component {...pageProps} />
    </ProvedorDesafio>
  );
}

export default MyApp;
