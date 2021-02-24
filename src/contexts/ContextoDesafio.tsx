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
  ibContagemRegressivaAtiva: boolean;
  iiTempo: number;  
  ibContagemRegressivaFinalizada: boolean;
  iiDezenaMinuto: string;
  iiUnidadeMinuto: string;
  iiDezenaSegundo: string;
  iiUnidadeSegundo: string;
  subirNivel: () => void;
  iniciarNovoDesafio: () => void;  
  redefinirDesafio: () => void;
  completarDesafio: () => void;
  redefinirContagemRegressiva: () => void;
  definirTempo: (aiTempo: number) => void;
  definirContagemRegressivaFinalizada: (abFinalizado: boolean) => void;
  definirContagemRegressivaAtiva: (abContagemRegressivaAtiva: boolean) => void;
  iniciarContagemRegressiva: () => void;
}

export const ContextoDesafio = createContext({} as RetornoContextoDesafio);

export function ProvedorDesafio({ children } : PropriedadeProvedorDesafio) {
  const [iiNivel, definirNivel] = useState(5);
  const [iiExperienciaAtual, definirExperienciaAtual] = useState(120);
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
    redefinirContagemRegressiva();
    definirContagemRegressivaFinalizada(false);
  }

  function completarDesafio() {
    definirDesafioAtivo(null);
    definirDesafiosCompletados(iiDesafiosCompletados + 1);
    definirExperienciaAtual(iiExperienciaAtual + ioDesafioAtivo.quantidadeExperiencia);
    redefinirContagemRegressiva();
    definirContagemRegressivaFinalizada(false);
  }

  //Contagem regressiva  
  const iiTempoMaximo = 0.05 * 60;

  const [iiTempo, definirTempo] = useState(iiTempoMaximo);
  const [ibContagemRegressivaAtiva, definirContagemRegressivaAtiva] = useState(false);
  const [ibContagemRegressivaFinalizada, definirContagemRegressivaFinalizada] = useState(false);

  const iiMinuto = Math.floor(iiTempo / 60);
  const iiSegundo = iiTempo % 60;

  const [iiDezenaMinuto, iiUnidadeMinuto] = String(iiMinuto).padStart(2, '0').split('');
  const [iiDezenaSegundo, iiUnidadeSegundo] = String(iiSegundo).padStart(2, '0').split('');

  function iniciarContagemRegressiva() {
    definirContagemRegressivaAtiva(true);
  }

  function redefinirContagemRegressiva() {    
    definirContagemRegressivaAtiva(false);
    definirTempo(iiTempoMaximo);
  }

  return (
    <ContextoDesafio.Provider 
      value={{
        iiNivel, 
        iiExperienciaAtual, 
        iiDesafiosCompletados, 
        ioDesafioAtivo,
        iiExperienciaProximoNivel,
        ibContagemRegressivaAtiva,        
        iiTempo,
        ibContagemRegressivaFinalizada,
        iiDezenaMinuto,
        iiUnidadeMinuto,
        iiDezenaSegundo,
        iiUnidadeSegundo,
        subirNivel,
        iniciarNovoDesafio, 
        redefinirDesafio,
        completarDesafio,
        redefinirContagemRegressiva,
        definirTempo,
        definirContagemRegressivaFinalizada,
        definirContagemRegressivaAtiva,
        iniciarContagemRegressiva
      }}
    >
      {children}
    </ContextoDesafio.Provider>
  );
}