import { createContext, useState, ReactNode } from 'react';
import desafios from '../../desafios.json';

interface PropriedadeProvedorDesafio {
  children: ReactNode;
}

interface Desafio {
  tipo: 'body' | 'eye';
  descricao: string;
  quantidadeExperiencia: number;
}

interface RetornoContextoDesafio {
  iiNivel: number;
  iiExperienciaAtual: number;
  iiDesafiosCompletados: number;
  ioDesafioAtivo: Desafio;
  iiExperienciaProximoNivel: number;
  subirNivel: () => void;
  iniciarNovoDesafio: () => void;  
  redefinirDesafio: () => void;
}

export const ContextoDesafio = createContext({} as RetornoContextoDesafio);

export function ProvedorDesafio({ children } : PropriedadeProvedorDesafio) {
  const [iiNivel, definirNivel] = useState(1);
  const [iiExperienciaAtual, definirExperienciaAtual] = useState(0);
  const [iiDesafiosCompletados, definirDesafiosCompletados] = useState(0);

  const [ioDesafioAtivo, definirDesafioAtivo] = useState(null);

  const iiExperienciaProximoNivel = Math.pow((iiNivel + 1) * 4, 2)
 
  function subirNivel(){
    definirNivel(iiNivel + 1)
  }

  function iniciarNovoDesafio(){
    const liIndiceAleatorioDesafio = Math.floor(Math.random() * desafios.length);
    const liDesafio = desafios[liIndiceAleatorioDesafio];

    definirDesafioAtivo(liDesafio);
  }

  function redefinirDesafio(){
    definirDesafioAtivo(null);
  }

  return (
    <ContextoDesafio.Provider 
      value={{
        iiNivel, 
        iiExperienciaAtual, 
        iiDesafiosCompletados, 
        ioDesafioAtivo,
        iiExperienciaProximoNivel,
        subirNivel,
        iniciarNovoDesafio, 
        redefinirDesafio   
      }}
    >
      {children}
    </ContextoDesafio.Provider>
  );
}