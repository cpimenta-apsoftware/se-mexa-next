import { useState, useEffect, useContext } from 'react';
import { ContextoDesafio } from '../contexts/ContextoDesafio';
import styles from '../styles/components/ContagemRegressiva.module.css';

let ioContagemRegressivaTempoPassado: NodeJS.Timeout;
const iiTempoMaximo = 0.05 * 60;

export function ContagemRegressiva() {

  const { iniciarNovoDesafio } = useContext(ContextoDesafio);  

  const [iiTempo, definirTempo] = useState(iiTempoMaximo);
  const [ibAtivo, definirAtividade] = useState(false);
  const [ibFinalizado, definirFinalizado] = useState(false);

  const iiMinuto = Math.floor(iiTempo / 60);
  const iiSegundo = iiTempo % 60;

  const [iiDezenaMinuto, iiUnidadeMinuto] = String(iiMinuto).padStart(2, '0').split('');
  const [iiDezenaSegundo, iiUnidadeSegundo] = String(iiSegundo).padStart(2, '0').split('');

  function iniciarContagemRegressiva() {
    definirAtividade(true);
  }

  function redefinirContagemRegressiva() {
    clearTimeout(ioContagemRegressivaTempoPassado);
    definirAtividade(false);
    definirTempo(iiTempoMaximo);
  }

  useEffect(() => {
    if (ibAtivo && iiTempo > 0) {
      ioContagemRegressivaTempoPassado = setTimeout(() => {
        definirTempo(iiTempo - 1);
      }, 1000);
    } else if (ibAtivo && iiTempo === 0) {
      definirFinalizado(true);
      definirAtividade(false);
      iniciarNovoDesafio();
    }
  }, [ibAtivo, iiTempo]);

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

      {ibFinalizado ? (        
        <button
          disabled
          className={styles.botaoContagemRegressiva}
        >
          Ciclo encerrado  
          <img src="icons/check_circle.svg" alt="Check" />          
        </button>                
      ) : (
        <>
          {ibAtivo ? (
            <button type="button"
              className={`${styles.botaoContagemRegressiva} ${styles.botaoContagemRegressivaAtivo}`}
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