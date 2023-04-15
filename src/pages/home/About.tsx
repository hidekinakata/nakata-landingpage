import React from "react";
import ContentSection from "../../components/ContentSection";

type AboutType = {};

const About: React.FC<AboutType> = (props) => {
  return (
    <ContentSection
      id={"sobre"}
      className={
        "!h-fit flex flex-col justify-center items-center gap-8 box-content "
      }
    >
      <div className={"block md:hidden"}>
        <div className={"text-sm text-justify p-5 [&>p]:indent-4 [&>p]:mb-2"}>
          <h1 className={"font-bold text-2xl mb-8 text-center"}>Sobre nós</h1>
          <p>
            Olá! Nós somos os donos desse site e queremos contar um pouco da
            nossa história para vocês.
          </p>

          <p>
            Eu sou Akihiko, e comecei a trabalhar com agricultura desde cedo. Já
            cultivei diversas culturas, como café e quiabo, mas atualmente estou
            me dedicando à produção de maracujá e mandioca. Sempre gostei de
            plantar e ver as coisas crescerem, é um trabalho gratificante.
          </p>
          <p>
            E eu sou Nana, sempre gostei de fazer artesanato e bordados. Além
            disso, sempre cozinhei muito bem, para nossa família e amigos.
            Quando surgiu a oportunidade de participar de uma feira na nossa
            cidade, Gabriel Monteiro, resolvemos tentar. Foi uma experiência
            muito positiva e bem-sucedida, mas infelizmente, a pandemia veio com
            força e não foi possível continuar.
          </p>
          <figure
            className={
              "w-6/12 relative rounded-lg drop-shadow-lg float-left mr-4 mt-4 mb-4 p-1 py-1 " +
              "bg-white"
            }
          >
            <img
              className="w-full object-cover shadow rounded-xl  "
              src={"galery/produtores.png"}
              alt="Imagem aleatória"
            />
            <figcaption
              className={"px-2 pt-2 text-center text-xs font-semibold"}
            >
              Nana e Akihiko
            </figcaption>
          </figure>
          <p className={"text-xs"}>
            Porém não desistimos! Quando surgiu a oportunidade da feira do
            produtor rural em Piacatu, decidimos participar e nos dedicamos a
            seguir cursos para aprimorar nosso trabalho, tanto na qualidade dos
            produtos como na organização e apresentação na feira. Hoje fazemos
            feiras com mais um grupo de agricultores de uma a duas vezes por
            mês, oferecendo produtos frescos e saudáveis para nossa comunidade.
          </p>
          <p>
            É um trabalho que exige dedicação e cuidado, mas fazemos com amor e
            acreditamos na importância de valorizar a produção local. Esperamos
            que vocês apreciem nossos produtos e conheçam um pouco mais sobre
            nossa história navegando pelo site.
          </p>
        </div>
      </div>
      <div className={"hidden md:block"}>
        <div className={"text-sm text-justify p-5 px-20"}>
          <h1 className={"font-bold text-2xl mb-8 text-center"}>Sobre nós</h1>

          <div className={"flex items-center justify-center"}>
            <figure
              className={
                "h-[70vh] aspect-[3/4] relative rounded-lg drop-shadow-lg mr-4 mt-4 mb-4 p-4 flex-grow-[5] " +
                "bg-white"
              }
            >
              <img
                className="w-full object-cover shadow rounded-xl  "
                src={"galery/produtores.png"}
                alt="Imagem aleatória"
              />
              <figcaption
                className={"px-2 pt-2 text-center text-xs font-semibold"}
              >
                Nana e Akihiko
              </figcaption>
            </figure>
            <div className={"flex-grow-[3] [&>p]:indent-4 [&>p]:mb-2"}>
              <p>
                Olá! Nós somos os donos desse site e queremos contar um pouco da
                nossa história para vocês.
              </p>

              <p>
                Eu sou Akihiko, e comecei a trabalhar com agricultura desde
                cedo. Já cultivei diversas culturas, como café e quiabo, mas
                atualmente estou me dedicando à produção de maracujá e mandioca.
                Sempre gostei de plantar e ver as coisas crescerem, é um
                trabalho gratificante.
              </p>
              <p>
                E eu sou Nana, sempre gostei de fazer artesanato e bordados.
                Além disso, sempre cozinhei muito bem, para nossa família e
                amigos. Quando surgiu a oportunidade de participar de uma feira
                na nossa cidade, Gabriel Monteiro, resolvemos tentar. Foi uma
                experiência muito positiva e bem-sucedida, mas infelizmente, a
                pandemia veio com força e não foi possível continuar.
              </p>

              <p>
                Porém não desistimos! Quando surgiu a oportunidade da feira do
                produtor rural em Piacatu, decidimos participar e nos dedicamos
                a seguir cursos para aprimorar nosso trabalho, tanto na
                qualidade dos produtos como na organização e apresentação na
                feira. Hoje fazemos feiras com mais um grupo de agricultores de
                uma a duas vezes por mês, oferecendo produtos frescos e
                saudáveis para nossa comunidade.
              </p>
              <p>
                É um trabalho que exige dedicação e cuidado, mas fazemos com
                amor e acreditamos na importância de valorizar a produção local.
                Esperamos que vocês apreciem nossos produtos e conheçam um pouco
                mais sobre nossa história navegando pelo site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ContentSection>
  );
};

export default About;
