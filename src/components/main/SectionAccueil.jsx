import React from "react";
import Accueil from "./style/Accueil";
import ReactPlayer from "react-player";

const SectionAccueil = () => {
  return (
    <Accueil>
      <div className="movieDetails">
        <small className="genre">CATEGORIE</small>
        <h2>THOR LE RAGNAROCK</h2>
        <div className="classificationInfo">
          <div className="duration">
            <span className="titleDUrate">Durée</span>
            <span>30 min</span>
          </div>
          <div className="cotation">
            <span className="titleCote">Note</span>
            <span>8.5</span>
          </div>
          <div className="outDate">
            <span className="titleDate">Out Date</span>
            <span>2021</span>
          </div>
          <div className="gender">
            <span className="genderValue">ACTION</span>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          sapiente quasi ad deserunt aut voluptates quam odit vel atque dolores
          voluptate dolorem voluptatem delectus, pariatur repudiandae error
          perspiciatis. Nesciunt, sapiente.
        </p>
        <div className="collomnDetails">
          <p className="details">
            <span className="tit">Cast</span> me, him and you
          </p>
          <p className="details">
            <span className="tit">Genre</span> action film
          </p>
          <p className="details">
            <span className="tit">Tags</span> blabla
          </p>
        </div>
      </div>
      <div className="movieTeaser">
        <ReactPlayer
          width="100%"
          height="100%"
          controls={true}
          url="https://www.youtube.com/watch?v=rLL11dEMGdU"
        />
      </div>
    </Accueil>
  );
};

export default SectionAccueil;
