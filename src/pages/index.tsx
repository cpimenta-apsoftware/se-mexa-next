import { BarraExperiencia } from "../components/BarraExperiencia";
import { ContagemRegressiva } from '../components/ContagemRegressiva';
import { DesafioCompletado } from '../components/DesafioCompletado';
import { Perfil } from '../components/Perfil';

import Head from 'next/head';

import styles from '../styles/pages/Inicio.module.css';

export default function Home() {
  return (
    <div className={styles.conteiner}>
      <Head>
        <title>Início | Se Mexa! </title>
      </Head>
      <BarraExperiencia />

      <section>
        <div >
          <Perfil />
          <DesafioCompletado />
          <ContagemRegressiva />
        </div>
        <div>

        </div>
      </section>
    </div>
  );
}
