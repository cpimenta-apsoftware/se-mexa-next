import { createContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';

import desafios from '../../desafios.json';

interface PropriedadeProvedorDesafio {
  children: ReactNode;
  nivel: number;
  experienciaAtual: number;
  desafiosCompletados: number;
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

export function ProvedorDesafio({ 
  children, 
  ...resto
} : PropriedadeProvedorDesafio) {
  const [iiNivel, definirNivel] = useState(resto.nivel ?? 1);
  const [iiExperienciaAtual, definirExperienciaAtual] = 
    useState(resto.experienciaAtual ?? 0);
  const [iiDesafiosCompletados, definirDesafiosCompletados] = 
    useState(resto.desafiosCompletados ?? 0);

  const [ioDesafioAtivo, definirDesafioAtivo] = useState<Desafio>(null);

  const iiExperienciaProximoNivel = Math.pow((iiNivel + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set('nivel', String(iiNivel));
    Cookies.set('experienciaAtual', String(iiExperienciaAtual));
    Cookies.set('desafiosCompletados', String(iiDesafiosCompletados));
  }, [iiNivel, iiExperienciaAtual, iiDesafiosCompletados]);
 
  function subirNivel(){
    definirNivel(iiNivel + 1);
  }

  function iniciarNovoDesafio(){
    const liIndiceAleatorioDesafio = Math.floor(Math.random() * desafios.length);
    const loDesafio = desafios[liIndiceAleatorioDesafio] as Desafio;

    definirDesafioAtivo(loDesafio);

    new Audio('/notification.mp3').play();
    
    if(Notification.permission === 'granted'){
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${loDesafio.quantidadeExperiencia} xp!`
      });      
    }
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