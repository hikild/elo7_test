import React, { useEffect, useState } from "react";
import "./index.css";

type DataType = {
  cargo: string;
  ativa: boolean;
  link: string;
  localizacao: LocalizacaoType;
};

type LocalizacaoType = {
  bairro: string;
  cidade: string;
  pais: string;
};

const Footer = () => {
  const [dataResponse, setDataResponse] = useState<DataType[]>();

  useEffect(() => {
    async function fetchData() {
      try {
        await fetch("http://www.mocky.io/v2/5d6fb6b1310000f89166087b")
          .then((res) => res.json())
          .then((res) => {
            setDataResponse(res.vagas);
          });
      } catch (error) {
        console.log("Erro ao consultar a API", error);
      }
    }

    fetchData();
  }, []);

  return (
    <section id="jobs">
      <h3 className="t-grey">Vagas em Aberto</h3>
      <div className="job">
        <h3 className="t-grey">Desenvolvimento</h3>
        {dataResponse?.map(
          (data, index) =>
            data.ativa && (
              <div className="job-type" key={index}>
                <a href={data.link} className="job-title">
                  {data.cargo}
                </a>
                {data.localizacao !== undefined ? (
                  <p className="job-location">
                    {data.localizacao.bairro} - {data.localizacao.cidade}
                  </p>
                ) : (
                  <p className="job-location">Remoto</p>
                )}
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default Footer;
