import React from "react";
import ContentSection from "../../components/ContentSection";

type FeaturedType = {};

const Featured: React.FC<FeaturedType> = (props) => {
  return (
    <ContentSection id={"destaques"} className={"!h-fit flex flex-col"}>
      <div className={"py-5"}>
        <h1 className={"font-bold text-2xl text-center box-border pb-2"}>
          <p>Nossos produtos em</p>
          <p>destaque</p>
        </h1>
        <p className={"px-[10vw] text-center text-sm text-black/50"}>
          Produtos frescos e de qualidade, produzidos com muito carinho!
        </p>
      </div>
      <div
        className={"flex px-[5vw] items-center justify-center flex-wrap gap-5"}
      >
        <Card
          name={"Sushi"}
          src={"/galery/sushi.jpg"}
          desc={"Sushi tradicional japones"}
        />
        <Card
          name={"Mandioca chips"}
          src={"/galery/mandioca.jpg"}
          desc={"Mandioca crocante em fatias!"}
        />
        <Card
          name={"Bifun"}
          src={"/galery/bifun.jpg"}
          desc={"Salada de macarrão japones"}
        />
      </div>
    </ContentSection>
  );
};

const Card: React.FC<{
  name: string;
  src: string;
  desc: string;
}> = (info) => {
  return (
    <div
      className={
        "max-w-[calc(50%-1.25rem)] md:max-w-[calc(30%-1.25rem)] px-4 py-8 flex flex-col gap-3 items-center text-center " +
        "rounded-xl shadow-xl"
      }
    >
      <img
        className="aspect-square w-3/4 object-cover shadow-lg rounded-xl  "
        src={info.src}
        alt="Imagem aleatória"
      />
      <h2 className={"font-bold text-sm"}>{info.name}</h2>
      <p className={"text-[0.6rem] text-black/60"}>{info.desc}</p>
    </div>
  );
};

const ImgPopUp = () => {};

export default Featured;
