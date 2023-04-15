import React from "react";
import ContentSection from "../../components/ContentSection";

type ContactType = {};

const Contact: React.FC<ContactType> = (props) => {
  return (
    <ContentSection id={"contato"} className={"!h-fit flex flex-col mb-32"}>
      <div className={"pt-5 pb-10"}>
        <h1 className={"font-bold text-2xl text-center box-border px-20 pb-2"}>
          Mande um oi no nosso Whatsapp!
        </h1>
        <p className={"px-[10vw] text-center text-sm text-black/50"}>
          Converse sobre nossos produtos, mais detalhes sobre o que oferecemos,
          combine uma encomenda!
        </p>
      </div>

      <div>
        <h2 className={"text-center px-15 font-semibold mb-4"}>
          Vá direto para uma conversa!
        </h2>
        <div className={"flex flex-col justify-center items-center gap-3"}>
          <a
            href={`https://api.whatsapp.com/send?phone=5518996485810&text=Oi!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20que%20voc%C3%AAs%20tem`}
            className={"p-5 bg-green-400 text-white rounded-full"}
          >
            WhatsApp da Nana
          </a>
          <a
            href={`https://api.whatsapp.com/send?phone=5518997633676&text=Oi!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20que%20voc%C3%AAs%20tem`}
            className={"p-5 bg-green-400 text-white rounded-full"}
          >
            WhatsApp do Akihiko
          </a>
        </div>
      </div>

      <div className={"mt-8"}>
        <h2 className={"text-center px-15 font-semibold mb-4"}>
          Ou salve nossos números!
        </h2>
        <div className={"flex flex-col justify-center items-center gap-3"}>
          <p className={"p-5 bg-green-400 text-white rounded-full"}>
            WhatsApp da Nana: (18) 99648-5810
          </p>
          <p className={"p-5 bg-green-400 text-white rounded-full"}>
            WhatsApp do Akihiko: (18) 99763-3676
          </p>
        </div>
      </div>
    </ContentSection>
  );
};

export default Contact;
