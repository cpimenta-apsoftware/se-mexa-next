import { useContext } from 'react';
import { ContextoDesafio } from '../contexts/ContextoDesafio';
import styles from '../styles/components/DesafioCompletado.module.css';

export function DesafioCompletado() {
  const {iiDesafiosCompletados} = useContext(ContextoDesafio);

  return (
    <div className={styles.conteinerDesafioCompletado}>
      <span>Desafios completados</span>
      <span>{iiDesafiosCompletados}</span>
    </div>
  );
}