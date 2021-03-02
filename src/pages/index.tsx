import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { BarraExperiencia } from "../components/BarraExperiencia";
import { ContagemRegressiva } from '../components/ContagemRegressiva';
import { DesafioCompletado } from '../components/DesafioCompletado';
import { Perfil } from '../components/Perfil';
import { CaixaDesafio } from "../components/CaixaDesafio";

import styles from '../styles/pages/Inicio.module.css';
import { ProvedorContagemRegressiva } from '../contexts/ContextoContagemRegressiva';
import { ProvedorDesafio } from '../contexts/ContextoDesafio';

interface PropriedadesInicio {
  nivel: number;
  experienciaAtual: number;
  desafiosCompletados: number;
}

export default function Home(props: PropriedadesInicio) {  

  return (
    <ProvedorDesafio
      nivel={props.nivel}
      experienciaAtual={props.experienciaAtual}
      desafiosCompletados={props.desafiosCompletados}
    >
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
    </ProvedorDesafio>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { nivel, experienciaAtual, desafiosCompletados } = ctx.req.cookies;

  const loUsuario: PropriedadesInicio = {
    nivel: Number(nivel ?? 1),
    experienciaAtual: Number(experienciaAtual ?? 0),
    desafiosCompletados: Number(desafiosCompletados ?? 0)
  }

  return {
    props: loUsuario
  }
}
