import { useState, useEffect, useContext } from 'react';
import { ContextoContagemRegressiva } from '../contexts/ContextoContagemRegressiva';
import styles from '../styles/components/ContagemRegressiva.module.css';

export function ContagemRegressiva() {  

  const {
    iiMinuto,
    iiSegundo,
    ibContagemRegressivaFinalizada,
    ibContagemRegressivaAtiva,
    redefinirContagemRegressiva,
    iniciarContagemRegressiva    
  } = useContext(ContextoContagemRegressiva);
  
  const [iiDezenaMinuto, iiUnidadeMinuto] = 
    String(iiMinuto).padStart(2, '0').split('');
  const [iiDezenaSegundo, iiUnidadeSegundo] = 
    String(iiSegundo).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.conteinerContagemRegressiva}>
        <div>
          <span>{iiDezenaMinuto}</span>
          <span>{iiUnidadeMinuto}</span>
        </div>
        <span>:</span>
        <div>
          <span>{iiDezenaSegundo}</span>
          <span>{iiUnidadeSegundo}</span>
        </div>
      </div>

      {ibContagemRegressivaFinalizada ? (
        <button
          disabled
          className={styles.botaoContagemRegressiva}
        >
          Ciclo encerrado
          <img src="icons/check_circle.svg" alt="Check" />
        </button>
      ) : (
        <>
          {ibContagemRegressivaAtiva ? (
            <button type="button"
              className={`${styles.botaoContagemRegressiva} 
                          ${styles.botaoContagemRegressivaAtivo}`}
              onClick={redefinirContagemRegressiva}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button type="button"
              className={styles.botaoContagemRegressiva}
              onClick={iniciarContagemRegressiva}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}