import React from "react";
import "./index.css";
import VideoPic from "../../assets/placeholder-video.png";
import TeamCard from "./team-card";
import Cards from "./culture-cards";

const Main = () => {
  return (
    <main>
      <section className="grey-bg">
        <section id="ceo">
          <img src={VideoPic} alt="Video do nosso CEO" />
          <div id="t-name">
            <h3 className="t-grey">Palavra do CEO</h3>
            <p id="color-name">Carlos Curioni</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam veniam corporis nam non, et debitis! Iusto odit officia
              libero possimus voluptas voluptatum in illo aut repellat
              perspiciatis perferendis inventore, error suscipit soluta hic
              aspernatur beatae, rem id ipsum ullam odio! Corrupti minus
              exercitationem maiores temporibus fugit sit magni culpa odit!
              Inventore, magnam. Eveniet, porro distinctio modi itaque suscipit
              quos ducimus.
            </p>
          </div>
        </section>
        <TeamCard />
      </section>
      <Cards />
    </main>
  );
};

export default Main;
