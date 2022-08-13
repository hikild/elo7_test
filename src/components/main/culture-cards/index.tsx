import React from "react";
import "../index.css";
import { dataObj } from "./mockObj";
import BottomPhoto from "../../../assets/foto-bottom.png";

const Cards = () => {
  return (
    <section id="culture">
      <div className="cards">
        {dataObj.map((data) => (
          <div className="card" key={data.id}>
            <img src={data.img} alt={data.title} />
            <h3 className="t-grey">{data.title}</h3>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
      <div className="title-box-border">
        <p className="t-blue">Saiba mais ⨠</p>
      </div>
      <img src={BottomPhoto} alt="Foto do ambiente Elo7" />
    </section>
  );
};

export default Cards;
