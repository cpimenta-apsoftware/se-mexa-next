import { useContext } from 'react';
import { ContextoDesafio } from '../contexts/ContextoDesafio';
import styles from '../styles/components/CaixaMensagemEvolucaoNivel.module.css';

export function CaixaMensagemEvolucaoNivel() {
  const {iiNivel, fecharCaixaMensagemEvolucaoNiel} = 
  useContext(ContextoDesafio);

  return (
    <div className={styles.sobreposicao}>
      <div className={styles.conteiner}>
        <header>{iiNivel}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo nível!</p>

        <button type="button">
          <img 
            src="/icons/close.svg" 
            alt="Fechar caixa de mensagem" 
            onClick={fecharCaixaMensagemEvolucaoNiel}
          />
        </button>
      </div>
    </div>
  );
}