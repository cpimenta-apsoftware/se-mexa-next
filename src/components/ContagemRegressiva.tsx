import { useState, useEffect } from 'react';
import styles from '../styles/components/ContagemRegressiva.module.css';

export function ContagemRegressiva() {
  const [iiTempo, definirTempo] = useState(25 * 60);
  const [ibAtivo, definirAtividade] = useState(false);

  const iiMinuto = Math.floor(iiTempo / 60);
  const iiSegundo = iiTempo % 60;

  const [iiDezenaMinuto, iiUnidadeMinuto] = String(iiMinuto).padStart(2, '0').split('');
  const [iiDezenaSegundo, iiUnidadeSegundo] = String(iiSegundo).padStart(2, '0').split('');

  function iniciarContagemReressiva() {
    definirAtividade(!ibAtivo);
  }

  useEffect(() => {
    if (ibAtivo && iiTempo > 0) {
      setTimeout(() => {
        definirTempo(iiTempo - 1);
      }, 1000);
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

      <button type="button"
        className={styles.botaoContagemRegressiva}
        onClick={iniciarContagemReressiva}
        >        
        {!ibAtivo?'Iniciar um ciclo':'Parar ciclo'}
      </button>
    </div>
  );
}