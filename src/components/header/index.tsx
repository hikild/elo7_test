import React from "react";
import HeaderBanner from "../../assets/foto-header.png";
import "./index.css";

const Header = () => {
  return (
    <header>
      <section className="banner">
        <img src={HeaderBanner} alt="Banner time Elo7" />
        <h1 id="title">
          Trabalhe no <span>Elo7</span>
        </h1>
      </section>
      <section className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          autem ad esse amet nulla veniam, nihil quisquam dolorum harum error
          nam, aperiam quaerat dicta quia nisi id optio quidem consectetur
          excepturi voluptate quod! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Laboriosam, repudiandae quasi. Sit enim
          necessitatibus beatae sequi saepe? Vel, exercitationem? Voluptate
          molestias dolorem eius suscipit hic eos optio natus dolore voluptatum!
        </p>
        <div className="title-box-border">
          <a href="#jobs" className="t-blue">
            <p>Vagas em aberto ⨠</p>
          </a>
        </div>
      </section>
    </header>
  );
};

export default Header;
