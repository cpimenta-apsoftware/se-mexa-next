import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ContextoDesafio } from './ContextoDesafio';

interface DadosContextoContagemRegressiva {
  iiMinuto: number;
  iiSegundo: number;
  ibContagemRegressivaFinalizada: boolean;
  ibContagemRegressivaAtiva: boolean;
  iniciarContagemRegressiva: () => void;
  redefinirContagemRegressiva: () => void;
}

interface PropriedadeProvedorContagemRegressiva {
  children: ReactNode;
}

export const ContextoContagemRegressiva = 
  createContext({} as DadosContextoContagemRegressiva);

let ioContagemRegressivaTempoPassado: NodeJS.Timeout;

export function ProvedorContagemRegressiva({ children } : 
  PropriedadeProvedorContagemRegressiva) {

  const {
    iniciarNovoDesafio    
  } = useContext(ContextoDesafio);

  const iiTempoMaximo = 0.05 * 60;

  const [iiTempo, definirTempo] = useState(iiTempoMaximo);
  const [ibContagemRegressivaAtiva, definirContagemRegressivaAtiva] = 
    useState(false);
  const [ibContagemRegressivaFinalizada, definirContagemRegressivaFinalizada] = 
    useState(false);

  const iiMinuto = Math.floor(iiTempo / 60);
  const iiSegundo = iiTempo % 60;

  function iniciarContagemRegressiva() {
    definirContagemRegressivaAtiva(true);
  }

  function redefinirContagemRegressiva() {    
    clearTimeout(ioContagemRegressivaTempoPassado);
    definirContagemRegressivaAtiva(false);
    definirContagemRegressivaFinalizada(false);
    definirTempo(iiTempoMaximo);    
  }  

  useEffect(() => {
    if (ibContagemRegressivaAtiva && iiTempo > 0) {
      ioContagemRegressivaTempoPassado = setTimeout(() => {
        definirTempo(iiTempo - 1);
      }, 1000);
    } else if (ibContagemRegressivaAtiva && iiTempo === 0) {
      definirContagemRegressivaFinalizada(true);
      definirContagemRegressivaAtiva(false);
      iniciarNovoDesafio();
    }
  }, [ibContagemRegressivaAtiva, iiTempo]);

  return (
    <ContextoContagemRegressiva.Provider value={{
      iiMinuto,
      iiSegundo,
      ibContagemRegressivaFinalizada,
      ibContagemRegressivaAtiva,
      iniciarContagemRegressiva,
      redefinirContagemRegressiva
    }}>
      {children}
    </ContextoContagemRegressiva.Provider>
  )
}