import { useContext } from 'react';
import { ContextoDesafio } from '../contexts/ContextoDesafio';
import styles from '../styles/components/CaixaDesafio.module.css';

export function CaixaDesafio() { 

  const { ioDesafioAtivo, redefinirDesafio } = useContext(ContextoDesafio);    

  return (
    <div className={styles.conteinerCaixaDesafio}>
      {ioDesafioAtivo ? (
        <div className={styles.desafioAtivo}>
          <header>Ganhe {ioDesafioAtivo.quantidadeExperiencia} xp</header>
          <main>
            <img src={`icons/${ioDesafioAtivo.tipo}.svg`}/>
            <strong>Novo desafio</strong>
            <p>{ioDesafioAtivo.descricao}</p>
          </main>

          <footer>
            <button 
              type="button"
              className={styles.botaoDesafioPerdido}
              onClick={redefinirDesafio}
            >
              Falhei
            </button>
            <button 
              type="button"
              className={styles.botaoDesafioCompletado}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.desafioNaoAtivo}>
        <strong>Finalize um ciclo para receber um desafio</strong> 
        <p>
          <img src="icons/level-up.svg" alt="Subir Nível" />
          Avance de nível completando desafios.
        </p>
      </div>
      )}
    </div>
  )
}