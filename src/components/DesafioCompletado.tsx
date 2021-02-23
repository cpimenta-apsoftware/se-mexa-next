import styles from '../styles/components/DesafioCompletado.module.css';

export function DesafioCompletado() {
  return (
    <div className={styles.conteinerDesafioCompletado}>
      <span>Desafios completados</span>
      <span>5</span>
    </div>
  );
}