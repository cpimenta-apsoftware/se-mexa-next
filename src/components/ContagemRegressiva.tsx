import { useState, useEffect, useContext } from 'react';
import { ContextoDesafio } from '../contexts/ContextoDesafio';
import styles from '../styles/components/ContagemRegressiva.module.css';

export function ContagemRegressiva() {
  let ioContagemRegressivaTempoPassado: NodeJS.Timeout;

  const {
    iniciarNovoDesafio,
    ibContagemRegressivaAtiva,
    iiTempo,
    redefinirContagemRegressiva,
    definirTempo,
    definirContagemRegressivaFinalizada,
    definirContagemRegressivaAtiva,
    ibContagemRegressivaFinalizada,
    iiDezenaMinuto,
    iiUnidadeMinuto,
    iiDezenaSegundo,
    iiUnidadeSegundo,
    iniciarContagemRegressiva
  } = useContext(ContextoDesafio);

  function cancelarContagemRegressiva() {
    clearTimeout(ioContagemRegressivaTempoPassado);
    redefinirContagemRegressiva();
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
              className={`${styles.botaoContagemRegressiva} ${styles.botaoContagemRegressivaAtivo}`}
              onClick={cancelarContagemRegressiva}
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