import { useContext } from 'react';
import { ContextoDesafio } from '../contexts/ContextoDesafio';
import styles from '../styles/components/Perfil.module.css';

export function Perfil() {
  const { iiNivel } = useContext(ContextoDesafio);    

  return (
    <div className={styles.conteinerPerfil}>
      <img src="https://github.com/cpimenta-apsoftware.png" alt="Caique Pimenta" />
      <div>
        <strong>Caique Pimenta</strong>
        <p>
          <img src="icons/level.svg" alt="Nível" />
          Nível {iiNivel}
        </p>
      </div>
    </div>
  );
}