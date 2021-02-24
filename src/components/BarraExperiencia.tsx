import { useContext } from 'react';
import { ContextoDesafio } from '../contexts/ContextoDesafio';
import styles from '../styles/components/BarraExperiencia.module.css';

export function BarraExperiencia() {
  const {iiExperienciaAtual, iiExperienciaProximoNivel} = useContext(ContextoDesafio);

  const iiPercentualExperiencia = Math.round((iiExperienciaAtual * 100) / iiExperienciaProximoNivel);

  return (
    <header className={styles.barraExperiencia}>
      <span>0 xp</span>
      <div> 
        <div style={{width: `${iiPercentualExperiencia}%`}}/>
        
        <span className={styles.experienciaAtual} style={{ left: `${iiPercentualExperiencia}%` }}>
          {iiExperienciaAtual} xp
        </span>
      </div>
      <span>{iiExperienciaProximoNivel} xp</span>
    </header>
  );
}