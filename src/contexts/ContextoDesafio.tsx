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
  completarDesafio: () => void;  
}

export const ContextoDesafio = createContext({} as RetornoContextoDesafio);

export function ProvedorDesafio({ children } : PropriedadeProvedorDesafio) {
  const [iiNivel, definirNivel] = useState(5);
  const [iiExperienciaAtual, definirExperienciaAtual] = useState(570);
  const [iiDesafiosCompletados, definirDesafiosCompletados] = useState(9);

  const [ioDesafioAtivo, definirDesafioAtivo] = useState<Desafio>(null);

  const iiExperienciaProximoNivel = Math.pow((iiNivel + 1) * 4, 2);
 
  function subirNivel(){
    definirNivel(iiNivel + 1);
  }

  function iniciarNovoDesafio(){
    const liIndiceAleatorioDesafio = Math.floor(Math.random() * desafios.length);
    const loDesafio = desafios[liIndiceAleatorioDesafio] as Desafio;

    definirDesafioAtivo(loDesafio);
  }

  function redefinirDesafio(){
    definirDesafioAtivo(null);
    
  }

  function completarDesafio() {
    if (!ioDesafioAtivo) {
      return;
    }

    let liExperienciaFinal = iiExperienciaAtual + 
      ioDesafioAtivo.quantidadeExperiencia;

    if(liExperienciaFinal >= iiExperienciaProximoNivel){
      liExperienciaFinal-= iiExperienciaProximoNivel;         
      subirNivel();
    }

    definirExperienciaAtual(liExperienciaFinal);
    definirDesafioAtivo(null);
    definirDesafiosCompletados(iiDesafiosCompletados + 1);
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
        redefinirDesafio,
        completarDesafio,        
      }}
    >
      {children}
    </ContextoDesafio.Provider>
  );
}