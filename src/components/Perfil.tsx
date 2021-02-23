import styles from '../styles/components/Perfil.module.css';

export function Perfil() {
  return (
    <div className={styles.conteinerPerfil}>
      <img src="https://github.com/cpimenta-apsoftware.png" alt="Caique Pimenta" />
      <div>
        <strong>Caique Pimenta</strong>
        <p>
          <img src="icons/level.svg" alt="Nível" />
          Nível 1
        </p>
      </div>
    </div>
  );
}