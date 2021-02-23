import styles from '../styles/components/BarraExperiencia.module.css';

export function BarraExperiencia() {
  return (
    <header className={styles.barraExperiencia}>
      <span>0 xp</span>
      <div> 
        <div style={{width: '50%'}}/>
        
        <span className={styles.experienciaAtual} style={{ left: '50%' }}>
          300 xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  );
}