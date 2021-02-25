import Head from 'next/head';

import { BarraExperiencia } from "../components/BarraExperiencia";
import { ContagemRegressiva } from '../components/ContagemRegressiva';
import { DesafioCompletado } from '../components/DesafioCompletado';
import { Perfil } from '../components/Perfil';
import { CaixaDesafio } from "../components/CaixaDesafio";

import styles from '../styles/pages/Inicio.module.css';
import { ProvedorContagemRegressiva } from '../contexts/ContextoContagemRegressiva';

export default function Home() {
  return (
    <div className={styles.conteiner}>
      <Head>
        <title>Início | Se Mexa! </title>
      </Head>
      <BarraExperiencia />

      <ProvedorContagemRegressiva>
        <section>
          <div >
            <Perfil />
            <DesafioCompletado />
            <ContagemRegressiva />
          </div>
          <div>
            <CaixaDesafio />
          </div>
        </section>
      </ProvedorContagemRegressiva>
    </div>
  );
}
